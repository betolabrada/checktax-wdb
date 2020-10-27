const users = require('../api/Users');

async function get(req, res, next) {
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await users.find(context);

        if (req.params.id) {
            if (rows.length === 1) {
                console.log(rows[0]);
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}

async function post(req, res, next) {
    let user = {
        id: req.body.id,
        first_name: req.body.first_name,
        email: req.body.email
    };

    const result = await users.insert(user);
    res.status(201).end('User added successfully!');
}

async function deleteUser(req, res, next) {
    let id = parseInt(req.params.id, 10);
    const result = await users.deleteById(id);
    res.status(201).end('User deleted successfully!');
}

async function put(req, res, next) {
    let context = {
        id: parseInt(req.params.id, 10),
        first_name: req.body.first_name,
        email: req.body.email
    };
    const result = await users.update(context);
    res.status(201).end('User updated successfully!');
}

module.exports.get = get;
module.exports.post = post;
module.exports.deleteUser = deleteUser;
module.exports.put = put;