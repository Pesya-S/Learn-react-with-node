const db = require('./../dal/DB');


    const router = require("express").Router();    
    const tableName = 'recipe';

    //  http://localhost:8080/recipe/get
    router.get('/get', async (req, res) => {
        let recipes = await db.getTable(tableName);
        res.send(recipes);
    })

    //  http://localhost:8080/recipe/getById?id=1
    router.get('/getById', async (req, res) => {
        let {id}=req.query;
        let recipe = await db.getByPrimary(tableName,id);
        res.send(recipe);
    })

    //  http://localhost:8080/recipe/post
    router.post('/post', async (req, res) => {
        let recipe = req.body;
        let insertId = await db.insert(tableName, recipe);
        res.send({ insertId: insertId });
    })

    //  http://localhost:8080/recipe/put
    router.put('/put', async (req, res) => {
        let recipe = req.body;
        await db.update(tableName, recipe);
        res.send('ok');
    })

    //  http://localhost:8080/recipe/delete?id=1
    router.delete('/delete', async (req, res) => {
        let { id } = req.query;
        await db.deleted(tableName, id);
        res.send('ok');
    })



module.exports = router;