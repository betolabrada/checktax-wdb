const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require('crypto');
const { type } = require('os');

dotenv.config();

async function login(connection, req, res) {
    const sql_statement = `SELECT * FROM users WHERE username = ${connection.escape(req.body.username)}`;
    connection.query(sql_statement, (err,result) => {
        if (err) {
            return res.status(400).send({
              msg: err
            });
        }
        if (!result.length) {
            return res.status(401).send({
                msg: 'Username or password is incorrect!'
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
              jwt_token: token
            });
        }
        return res.status(401).send({
          msg: 'Username or password is incorrect!'
        });
    });
}

async function addUser(connection, req, res) {
  const sql_statement = `SELECT * FROM users WHERE LOWER(username) = LOWER(${connection.escape(req.body.username)})`;

  connection.query(sql_statement, (err,result) => {
    if(result.length > 0){
      return res.status(401).send({
        msg: 'This username is already in use!'
      });
    }else{
      var new_password = crypto.createHash('sha256').update(req.body.password).digest('hex');
      const sql_statement = `INSERT INTO users (id, username, password, registered, lat_login) VALUES ('${uuid.v4()}', ${connection.escape(req.body.username)}, ${connection.escape(new_password)}, now(), now())`;
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
    res.send(req.userData);
    next();
  } catch (err) {
    return res.status(401).send({
      msg: 'Your session is not valid!'
    });
  }
}

async function deleteUser(connection, req, res) {
  const sql_statement = `SELECT id FROM users WHERE LOWER(username) = LOWER(${connection.escape(req.body.username)})`;

  connection.query(sql_statement, (err,result) => {
    if(result.length == 0){
      return res.status(401).send({
        msg: 'This username does not exists !'
      });
    }else{
      const delete_permissions = `DELETE FROM user_permissions WHERE userID = '${result[0].id}'`;
      connection.query(delete_permissions, (err, result) =>{
        if (err) {
          return res.status(400).send({
            msg: err
          });
        }
        const delete_user = `DELETE FROM users WHERE username = ${connection.escape(req.body.username)}`;
        connection.query(delete_user, (err, resultDel) => {
          if(err){
            return res.status(400).send({
              msg: err
            });
          }
          return res.status(201).send({
            msg: `User ${req.body.username} deleted successfully !`
          });
        });
      });
    }
  });
}

async function addPermissions(connection, req, res){
  const get_username = `SELECT id FROM users WHERE LOWER(username) = LOWER(${connection.escape(req.body.username)})`;
  connection.query(get_username, (err, userResult) => {
    if(userResult.length == 0){
      return res.status(401).send({
        msg: 'This username does not exists !'
      });
    }else{
      const sections = req.body.sections;
      for(var section in sections){
        for(let i = 0; i < sections[section].permissions.length; i++){
          const get_section_id = `SELECT id FROM permissions_section WHERE LOWER(section) = ${connection.escape(section)}`;
          connection.query(get_section_id, (err, sectionRes) => {
            if(sectionRes.length == 0){
              return res.status(401).send({
                msg: `This section (${section}) of permissions does not exists !`
              });
            }
            else{
              const get_permission_id = `SELECT id FROM permissions WHERE LOWER(permission) = ${connection.escape(sections[section].permissions[i])} AND idPermissionSectio = '${sectionRes[0].id}'`;
              connection.query(get_permission_id, (err, permRes) => {
                if(permRes.length == 0){
                  return res.status(401).send({
                    msg: `This permission (${sections[section].permissions[i]}) does not exists !`
                  });
                }else{
                  const verify_permission = `SELECT * FROM user_permissions WHERE userID = '${userResult[0].id}' AND permissionID = '${permRes[0].id}'`;
                  connection.query(verify_permission, (err, verifyResult) => {
                    if (verifyResult.length > 0) {
                      return res.status(401).send({
                        msg: 'Permission already set !'
                      });
                    }else{
                      const insert_permission = `INSERT INTO user_permissions (id, userID, permissionID) VALUES('${uuid.v4()}', '${userResult[0].id}', '${permRes[0].id}')`;
                      connection.query(insert_permission, (err) => {
                        if (err) {
                          return res.status(400).send({
                            msg: err
                          });
                        }
                        return res.status(201).send({
                          msg: `Permissions added successfully to user ${req.body.username}`
                        });
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }
    }
  });
}

module.exports.login = login;
module.exports.addUser = addUser;
module.exports.verifyUser = verifyUser;
module.exports.deleteUser = deleteUser;
module.exports.addPermissions = addPermissions;