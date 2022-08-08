const db = require("../dal/DB");



const tableName = 'user';


const getByEmail = async (email) => {
    let query = `select * from user where email='${email}'`;
    let result = await db.query(query);
    if (result && result[0])
        return result[0]
    else return null;
}

const get = async () => {
    let rows = await db.getTable(tableName);
    return rows;
}

const insert = async (user) => {
    let newUser = validation(user);
    let insertId = await db.insert(tableName, newUser);
    return insertId;
}

const update = async (user) => {
    let newUser = validation(user);
    let result = await db.update(tableName, newUser)
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
    get, insert, update, validation
    ,getByEmail
}


