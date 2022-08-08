const userBl = require("../bl/userBl");


userController = (app) => {

    var router = require("express").Router();
    app.use("/user", router);


    router.get('/get', async (req, res) => {
        let users = await userBl.get();
        res.send(users);
    })

    router.post('/post', async (req, res) => {
        let user = req.body;
        let insertId = await userBl.insert(user)
        res.send({ insertId: insertId });
    })





}
module.exports = userController;