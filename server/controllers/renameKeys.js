module.exports.renameKeys = function (obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
};
