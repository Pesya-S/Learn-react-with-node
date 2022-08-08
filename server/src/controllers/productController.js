const db = require('./../dal/DB');


    const router = require("express").Router();    
    const tableName = 'product';

    //  http://localhost:8080/product/get
    router.get('/get', async (req, res) => {
        let products = await db.getTable(tableName);
        res.send(products);
    })

        //  http://localhost:8080/product/get
        router.get('/getByUser', async (req, res) => {
            let {userId}=req.query;
            let products = await db.getTable(tableName);
            products=products.filter(x=>x.userId==userId);
            res.send(products);
        })

    //  http://localhost:8080/product/getById?id=1
    router.get('/getById', async (req, res) => {
        let {id}=req.query;
        let product = await db.getByPrimary(tableName,id);
        res.send(product);
    })

    //  http://localhost:8080/product/post
    router.post('/post', async (req, res) => {
        let product = req.body;
        let insertId = await db.insert(tableName, product);
        res.send({ insertId: insertId });
    })

    //  http://localhost:8080/product/put
    router.put('/put', async (req, res) => {
        let product = req.body;
        await db.update(tableName, product);
        res.send('ok');
    })

    //  http://localhost:8080/product/delete?id=1
    router.delete('/delete', async (req, res) => {
        let { id } = req.query;
        await db.deleted(tableName, id);
        res.send('ok');
    })



module.exports = router;