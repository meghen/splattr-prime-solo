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
    let queryString = `SELECT "list_title" FROM "user_lists"
    JOIN "movie_list" ON "movie_list"."list_id" = "user_lists"."id"
    GROUP BY "list_title";`
    pool.query(queryString).then((results) => {
        console.log('what is results.rows here? ', results.rows);
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;