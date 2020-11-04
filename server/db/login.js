const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require('crypto')

dotenv.config();

async function login (connection, req, res) {
    const sql_statement = `SELECT * FROM users WHERE username = ${connection.escape(req.body.username)}`;
    connection.query(sql_statement, (err,result) => {
        if (err) {
            return res.status(400).send({
              msg: err
            });
        }
        if (!result.length) {
            return res.status(401).send({
                msg: 'Username or password is incorrect! 1'
            });
        }
        if (crypto.createHash('sha256').update(req.body.password).digest('hex') == result[0]['password']){
            const token = jwt.sign({
              username: result[0].username,
              userId: result[0].id
            },
            process.env.ACCESS_TOKEN_SECRET, {
              expiresIn: '1h'
            }
            );
            connection.query(
              `UPDATE users SET lat_login = now() WHERE username = ${connection.escape(result[0].username)}`
            );

            res.cookie('jwt', token, {httpOnly: true, samesite: true, secure: true});
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
        }
        return res.status(401).send({
          msg: 'Username or password is incorrect! 3'
        });
    });
}

async function addUser (connection, req, res) {
  const sql_statement = `SELECT * FROM users WHERE LOWER(username) = LOWER(${connection.escape(req.body.username)})`;

  connection.query(sql_statement, (err,result) => {
    if(result.length > 0){
      return res.status(409).send({
        msg: 'This username is already in use!'
      });
    }else{
      var new_password = crypto.createHash('sha256').update(req.body.password).digest('hex');
      const sql_statement = `INSERT INTO users (id, username, password, registered, lat_login) VALUES ('${uuid.v4()}', '${req.body.username}', ${connection.escape(new_password)}, now(), now())`;
      connection.query(sql_statement, (err, result) =>{
        if (err) {
          return res.status(400).send({
            msg: err
          });
        }
        return res.status(201).send({
          msg: `New user ${req.body.username} registered successfully!`
        });
      });
    }
  });
}

async function verifyUser(req, res, next){
  try {
    const token = req.headers.authorization.split(' ')[1] || req.cookie.jwt;
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).send({
      msg: 'Your session is not valid!'
    });
  }
}

module.exports.login = login;
module.exports.addUser = addUser;
module.exports.verifyUser = verifyUser;
