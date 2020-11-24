const users = require('../api/Users');

async function getUser(req, res, next) {
    try {
        const user = {};
        context.username = req.params.username;
        const rows = await users.find(user);

        if (rows.length > 0) {
            return res.status(200).json({msg: 'User succesffully found !', data: rows[0]});
        } else {
            return res.status(404).json({msg: 'User not found !', data: rows});
        }
    } catch (err) {
        next(err);
    }
}

async function addUser(req, res, next) {
    let inputUser = {
        username: req.body.username
    }
    const existingUser = await users.find(inputUser);
    if(existingUser.length > 0){
        return res.status(401).json({msg: 'Username already exists !', status: 401});
    }
    let user = {
        username: req.body.username,
        password: req.body.password
    }

    if(user.password.length < 5){
        return res.status(401).json({msg: 'Invalid weak password!', status: 401});
    }
    const result = await users.addUser(user);
    return res.status(200).json({msg: 'User added successfully!', status: 200});
}

async function addPermission(req, res, next){
    let user = {
        username: req.params.username,
        section: req.params.section,
        permission: req.params.permission
    }
    const msgResult = await users.addPermission(user);
    if(msgResult != 'Permission granted successfully !'){
        return res.status(401).json({msg: msgResult, status: 401});
    }
    return res.status(200).json({msg: msgResult, status: 200});
}

async function removePermission(req, res, next){
    let user = {
        username: req.params.username,
        section: req.params.section,
        permission: req.params.permission
    }
    const msgResult = await users.removePermission(user);
    if(msgResult != 'Permission removed successfully !'){
        return res.status(401).json({msg: msgResult, status: 401});
    }
    return res.status(200).json({msg: msgResult, status: 200});
}

async function deleteUser(req, res, next) {
    let user = {
        username: req.params.username
    }
    const userDeleted_result = await users.deleteUser(user);
    if(userDeleted_result != 'User deleted successfully !'){
        return res.status(400).json({msg: userDeleted_result, status: 400});
    }
    return res.status(200).json({msg: 'User deleted successfully!', status: 200});
}

async function login(req, res, next){
    console.log('loginnn');
    let user = {
        username: req.body.username,
        password: req.body.password
    }
    const userLogedIn_result = await users.login(user);
    console.log(userLogedIn_result);
    if(userLogedIn_result.msg != 'User loged in successfully!'){
        return res.status(401).json({msg: userLogedIn_result.msg, status: 401});
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.cookie('jwtToken', userLogedIn_result.jwt, {httpOnly: true});
    return res.status(200).json({msg: userLogedIn_result.msg, data: userLogedIn_result.jwt, status: 200});
}

async function getToken(req, res, next){
    let token;
    if(req.headers['authorization']){
        token = req.headers['authorization'].split(' ')[1];
    }else if(req.cookies['jwtToken'] && req.cookies.jwtToken != ''){
        token = req.cookies.jwtToken;
    }
    else{
        return -1;
    }
    return token;
}

async function verifyToken(req, res){
    const tokenResult = await getToken(req, res);
    if(tokenResult == -1){
        return ['No token provided !'];
    }
    const verificationResult = await users.verifyToken(tokenResult);
    if(verificationResult.msg == 'Invalid session !'){
        return [verificationResult.msg];
    }
    return [verificationResult.token.username, verificationResult.token.userID];
}

async function verifyPermission(req, res){
    const token_result = await verifyToken(req, res);
    if(token_result.length == 1){
        return res.status(401).json({msg: token_result[0]});
    }
    if(token_result[0] != req.params.username){
        return res.status(401).json({msg: 'Token integrity compromised !', status: 401});
    }
    let user = {
        userID: token_result[1],
        permission: req.params.permission,
        section: req.params.section
    }
    const permissionResult = await users.verifyPermission(user);
    if(permissionResult == -1){
        return res.status(401).json({msg: 'Action permission denied !', status: 401});
    }
    return res.status(200).json({msg: 'Action allowed !', status: 200});
}

async function insertSection(req, res){
    let section = {
        name: req.body.sectionName
    }
    const sectionResult = await users.insertSection(section);
    if(sectionResult.msg == 'Section already exists !'){
        return res.status(400).json({msg: sectionResult.msg, status: 400});
    }
    return res.status(200).json({msg: sectionResult.msg, status: 200});
}

async function insertPermission(req, res){
    let permission = {
        section: req.body.section,
        name: req.body.permission
    }
    const permissionResult = await users.insertPermission(permission);
    if(permissionResult.msg != 'Permission inserted successfully !'){
        return res.status(401).json({msg: permissionResult.msg, status: 401});
    }
    return res.status(401).json({msg: permissionResult.msg, status: 200});
}

async function getSections(req, res, next){
    try {
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await users.getSections(context);

        if (req.params.id) {
            if (rows.length === 1) {
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            console.log(rows);
            res.status(200).json(rows);
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports.getUser = getUser;
module.exports.addUser = addUser;
module.exports.addPermission = addPermission;
module.exports.removePermission = removePermission;
module.exports.deleteUser = deleteUser;
module.exports.login = login;
module.exports.verifyPermission = verifyPermission;
module.exports.insertSection = insertSection;
module.exports.insertPermission = insertPermission;
module.exports.getSections = getSections;
