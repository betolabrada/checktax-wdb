const database = require('../services/Database');
const uuid = require('uuid');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const selectQuery = 'SELECT id FROM users WHERE LOWER(username) = :username';
    const verifyCredentialsQuery = 'SELECT id FROM users WHERE LOWER(username) = :username AND password = :password';
const selectSectionPermission = 'SELECT permissions.id "permissionID", permissions_section.id "sectionID" FROM permissions INNER JOIN permissions_section ON permissions.idPermissionSection = permissions_section.id WHERE (PERMISSIONS.permission = :permission AND permissions_section.section = :section)';
const selectUserPermission = 'SELECT * FROM user_permissions WHERE userID = :userID AND permissionID = :permissionID';
const selectSection = 'SELECT id FROM permissions_section WHERE section = LOWER(:section)'
const selectSections = 'SELECT * FROM permissions_section';

const insertUserQuery = 'INSERT INTO users(id, username, password, registered, last_login) VALUES(:id, LOWER(:username), :password, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)';
const grantPermissionQuery = 'INSERT INTO user_permissions (id, userID, permissionID) VALUES(:id, :userID, :permissionID)';
const deleteUserQuery = 'DELETE FROM users WHERE id = :id';
const deleteUserPermissions = 'DELETE FROM user_permissions WHERE userID = :userID';
const deletePermission = 'DELETE FROM user_permissions WHERE userID = :userID AND permissionID = :permissionID';
const updateLogIn = 'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = :id';
const updatePassword = 'UPDATE users SET password = :password WHERE id = :id';
const insertSectionQuery = 'INSERT INTO permissions_section(id, section) VALUES(:id, LOWER(:section))';
const insertPermissionQuery = 'INSERT INTO permissions(id, permission, idPermissionSection) VALUES(:id, LOWER(:permission), :idPermissionSection)';

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
        return 'already granted !';
    }else{
        let newPermissionBinds = {
            id: uuid.v4(),
            userID: userIDRedusult[0].ID,
            permissionID: permission_section_result.rows[0].permissionID
        }
        const permissionGranted = await database.queryExecutor(grantPermissionQuery, newPermissionBinds);
        return 'granted successfully !';
    }
}

async function removePermission(user){
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
        return 'removed successfully !';
    }else{
        return 'got no modifications !';
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
    try {
        if(user.username == '' || user.password == ''){
            return {
                msg: 'Invalid username or password!'
            }
        }
        let userBinds = {
            username: user.username
        }
        let userIDRedusult = await find(userBinds);
        console.log('userresult', userIDRedusult);
        if(userIDRedusult.length > 0){
            let credentialBinds = {
                username: user.username,
                password: crypto.createHash('sha256').update(user.password).digest('hex')
            }
            console.log('credentialbinds', credentialBinds);
            const authenticationResult = await database.queryExecutor(verifyCredentialsQuery, credentialBinds);
            console.log('auth result', authenticationResult);
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
    } catch (e) {
        console.log('error', e);
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

async function insertPermission(permission){
    let permissionBinds = {
        permission: permission.name,
        section: permission.section
    }
    const checkPermission = await database.queryExecutor(selectSectionPermission, permissionBinds);
    if(checkPermission.rows.length > 0){
        return {msg: 'Permission already exists !'};
    }
    let sectionBinds = {
        section: permission.section
    }
    const idSectionResult = await database.queryExecutor(selectSection, sectionBinds);
    if(idSectionResult.rows.length == 0){
        return {msg: 'Section does not exists !'};
    }
    let newPermissionBinds = {
        id: uuid.v4(),
        permission: permission.name,
        idPermissionSection: idSectionResult.rows[0].ID
    }
    await database.queryExecutor(insertPermissionQuery, newPermissionBinds);
    return {msg: 'Permission inserted successfully !'};
}

async function insertSection(section){
    let sectionBinds = {
        section: section.name
    }
    const checkSection = await database.queryExecutor(selectSection, sectionBinds);
    if(checkSection.rows.length > 0){
        return {msg: 'Section already exists !'}
    }
    let newSectionBinds = {
        section: section.name,
        id: uuid.v4()
    }
    await database.queryExecutor(insertSectionQuery, newSectionBinds);
    return {msg: 'Section inserted successfully !'}
}

async function getSections(context){
    let query = selectSections;
    let binds = {};

    if (context.id) {
        binds.id = context.id;
        query += '\nWHERE id = :id';
    }

    const result = await database.queryExecutor(query, binds);

    return result.rows;
}

module.exports.find = find;
module.exports.addUser = addUser;
module.exports.addPermission = addPermission;
module.exports.removePermission = removePermission;
module.exports.deleteUser = deleteUser;
module.exports.login = login;
module.exports.verifyToken = verifyToken;
module.exports.verifyPermission = verifyPermission;
module.exports.insertPermission = insertPermission;
module.exports.insertSection = insertSection;
module.exports.getSections = getSections;
