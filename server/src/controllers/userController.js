const userLogic = require("../logic/userLogic");
const db = require('./../dal/DB');


const router = require("express").Router();
const tableName = 'user';

//  http://localhost:8080/user/get
router.get('/get', async (req, res) => {
    let users = await db.getTable(tableName);
    res.send(users);
})

//  http://localhost:8080/user/getById?id=1
router.get('/getById', async (req, res) => {
    let { id } = req.query;
    let user = await db.getByPrimary(tableName, id);
    res.send(user);
})

//  http://localhost:8080/user/post
router.post('/post', async (req, res) => {
    let user = req.body;
    let insertId = await db.insert(tableName, user);
    res.send({ insertId: insertId });
})

//  http://localhost:8080/user/put
router.put('/put', async (req, res) => {
    let user = req.body;
    await db.update(tableName, user);
    res.send('ok');
})

//  http://localhost:8080/user/delete?id=1
router.delete('/delete', async (req, res) => {
    let { id } = req.query;
    await db.deleted(tableName, id);
    res.send('ok');
})

//  http://localhost:8080/user/getNames
router.get('/getNames', async (req, res) => {
    let sql = `select concat(name,' ',password)  as userName from user;`
    let result = await db.query(sql);
    res.send(result);
})

//  http://localhost:8080/user/signIn
router.post('/signIn', async (req, res) => {
    let { email, password } = req.body;
    let existUser = await userLogic.getByEmail(email);
    if (!existUser)
        res.send({ ok: false, message: 'the user not found' });
    else
        if (existUser.password != password)
            res.send({ ok: false, message: 'the password is wrong' });
        else
            res.send({ ok: true, user: existUser });
})

//  http://localhost:8080/user/signUp
router.post('/signUp', async (req, res) => {
    let newUser = req.body;
    let existUser = await userLogic.getByEmail(newUser.email);
    if (existUser)
        res.send({ ok: false, message: 'the user already exist' });
    else
       {
        let insertId = await db.insert(tableName, newUser);
        res.send({ ok: true, id:insertId });

       }
})



module.exports = router;