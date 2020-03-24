const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req,res)=>{    
    let queryString = `INSERT INTO "movie_list" ("list_id", "movie_id") VALUES ($1,$2)`;
    pool.query(queryString, [req.body.data.list, req.body.data.movie]).then((results) => {        
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
router.get('/outer', (req,res)=>{
    let queryString = `SELECT "list_title","user_lists"."id" FROM "user_lists"
    JOIN "movie_list" ON "movie_list"."list_id" = "user_lists"."id"
    GROUP BY "list_title", "user_lists"."id";`
    pool.query(queryString).then((results) => {
        console.log('what is results.rows here? ', results.rows);
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
router.delete('/:listId', (req,res)=>{
    let queryString = `DELETE FROM "user_lists" WHERE "id" = $1;`;
    pool.query(queryString, [req.params.listId]).then((results) => {        
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
router.put('/:listId', (req,res)=>{
    let queryString = `UPDATE "user_lists" SET "list_title"='$1' WHERE "id" = $2;`;
    pool.query(queryString, [req.body,req.params.listId]).then((results) => {        
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
module.exports = router;