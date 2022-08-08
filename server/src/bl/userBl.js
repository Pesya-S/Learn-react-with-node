const generalDB = require("../DAL/generalDB");



const nameTable = 'user';

const get = async () => {
    let rows = await generalDB.getTable(nameTable);
    return rows;
}

const insert = async (user) => {
    let newUser = validation(user);
    let insertId = await generalDB.insert(nameTable, newUser);
    return insertId;
}

const update = async (user) => {
    let newUser = validation(user);
    let result = await generalDB.update(nameTable, newUser)
    return result;
}

const validation = (user) => {
    let newUser = {};
    if (user.firstName && user.firstName.length <= 45)
        newUser.firstName = user.firstName;
    if (user.lastName && user.lastName.length <= 45)
        newUser.lastName = user.lastName;
    return newUser;
}

module.exports = {
    get, insert, update
}


