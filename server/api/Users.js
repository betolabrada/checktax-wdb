const database = require('../services/Database');
const uuid = require('uuid');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const selectQuery = 'SELECT id FROM users WHERE LOWER(username) = :username';
const verifyCredentialsQuery = 'SELECT id FROM users WHERE LOWER(username) = :username AND password = :password';
const selectSectionPermission = 'SELECT permissions.id "permissionID", permissions_section.id "sectionID" FROM permissions INNER JOIN permissions_section ON permissions.idPermissionSection = permissions_section.id WHERE (PERMISSIONS.permission = :permission AND permissions_section.section = :section)';
const selectUserPermission = 'SELECT * FROM user_permissions WHERE userID = :userID AND permissionID = :permissionID';

const insertUserQuery = 'INSERT INTO users(id, username, password, registered, last_login) VALUES(:id, :username, :password, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)';
const insertPermission = 'INSERT INTO user_permissions (id, userID, permissionID) VALUES(:id, :userID, :permissionID)';
const deleteUserQuery = 'DELETE FROM users WHERE id = :id';
const deleteUserPermissions = 'DELETE FROM user_permissions WHERE userID = :userID';
const deletePermission = 'DELETE FROM user_permissions WHERE userID = :userID AND permissionID = :permissionID';
const updateLogIn = 'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = :id';
const updatePassword = 'UPDATE users SET password = :password WHERE id = :id';

async function find(user) {
    let binds = Object.assign({}, user);
    const result = await database.queryExecutor(selectQuery, binds);
    return result.rows;
}

async function addUser(user) {
    let binds = Object.assign({}, user);
    binds.id = uuid.v4();
    binds.password = crypto.createHash('sha256').update(user.password).digest('hex');
    const result = await database.queryExecutor(insertUserQuery, binds);
    return result;
}

async function addPermission(user){
    let userBinds = {
        username: user.username
    }
    let userIDRedusult = await find(userBinds);
    if(userIDRedusult.length > 0){
        let permissionBinds = {
            permission: user.permission,
            section: user.section
        }
        const permission_section_result = await database.queryExecutor(selectSectionPermission, permissionBinds);
        let userPermissionBinds = {
            userID: userIDRedusult[0].ID,
            permissionID: permission_section_result.rows[0].permissionID
        }
        const userPermissionVerification = await database.queryExecutor(selectUserPermission, userPermissionBinds);
        if(userPermissionVerification.rows.length > 0){
            return 'Permission already granted !';
        }else{
            let newPermissionBinds = {
                id: uuid.v4(),
                userID: userIDRedusult[0].ID,
                permissionID: permission_section_result.rows[0].permissionID
            }
            const permissionGranted = await database.queryExecutor(insertPermission, newPermissionBinds);
            return 'Permission granted successfully !';
        }

    }else{
        return 'User does not exists !';
    }
}

async function removePermission(user){
    let userBinds = {
        username: user.username
    }
    let userIDRedusult = await find(userBinds);
    if(userIDRedusult.length > 0){
        let permissionBinds = {
            permission: user.permission,
            section: user.section
        }
        const permission_section_result = await database.queryExecutor(selectSectionPermission, permissionBinds);
        let userPermissionBinds = {
            userID: userIDRedusult[0].ID,
            permissionID: permission_section_result.rows[0].permissionID
        }
        const permissionRemovedResult = await database.queryExecutor(deletePermission, userPermissionBinds);
        if(permissionRemovedResult.rowsAffected > 0){
            return 'Permission removed successfully !';
        }else{
            return 'No modifications on user permissions';
        }

    }else{
        return 'User does not exists !';
    }
}

async function deleteUser(user){
    let userBinds = {
        username: user.username
    }
    let userIDRedusult = await find(userBinds);
    if(userIDRedusult.length > 0){
        let deleteUserPermissionsBinds = {
            userID: userIDRedusult[0].ID
        }
        await database.queryExecutor(deleteUserPermissions, deleteUserPermissionsBinds);

        let deleteUserBinds = {
            id: userIDRedusult[0].ID
        }
        const userDeleted_result = await database.queryExecutor(deleteUserQuery, deleteUserBinds);
        if(userDeleted_result.rowsAffected > 0){
            return 'User deleted successfully !';
        }
    }else{
        return 'User does not exists !';
    }
}

async function login(user){
    if(user.username == '' || user.password == ''){
        return {
            msg: 'Invalid username or password!'
        }
    }
    let userBinds = {
        username: user.username
    }
    let userIDRedusult = await find(userBinds);
    if(userIDRedusult.length > 0){
        let credentialBinds = {
            username: user.username,
            password: crypto.createHash('sha256').update(user.password).digest('hex')
        }
        const authenticationResult = await database.queryExecutor(verifyCredentialsQuery, credentialBinds);
        if(authenticationResult.rows.length > 0){
            const jwtToken = jwt.sign({
                username: authenticationResult.rows[0].username,
                userID: authenticationResult.rows[0].ID
              },
              process.env.ACCESS_TOKEN_SECRET, {
                algorithm: 'HS256',
                expiresIn: '1h'
              }
            );
            let idBinds = {
                id: userIDRedusult[0].ID
            }
            await database.queryExecutor(updateLogIn, idBinds);
            return {
                msg: 'User loged in successfully!',
                jwt: jwtToken
            }
        }
        return {
            msg: 'Wrong password !'
        }
    }else{
        return {
            msg: 'Invalid username. User does not exists !'
        }
    }
}

async function verifyToken(token){
    try {
        const decoded = jwt.verify(
            token, 
            process.env.ACCESS_TOKEN_SECRET
        );
        return {
                msg: 'Valid session !',
                token: decoded
            };
    } catch (error) {
        return {msg: 'Invalid session !'};
    }
}

async function verifyPermission(user){
    let permissionBinds = {
        permission: user.permission,
        section: user.section
    }
    const permissionResult = await database.queryExecutor(selectSectionPermission, permissionBinds);
    if(permissionResult.rows.length == 0){
        return -1;
    }
    let userPermissionBinds = {
        userID: user.userID,
        permissionID: permissionResult.rows[0].permissionID
    }
    const userPermissionResult = await database.queryExecutor(selectUserPermission, userPermissionBinds);
    if(userPermissionResult.rows.length == 0){
        return -1;
    }
    return 0;
}

module.exports.find = find;
module.exports.addUser = addUser;
module.exports.addPermission = addPermission;
module.exports.removePermission = removePermission;
module.exports.deleteUser = deleteUser;
module.exports.login = login;
module.exports.verifyToken = verifyToken;
module.exports.verifyPermission = verifyPermission;