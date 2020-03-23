const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req,res)=>{    
    let queryString = `INSERT INTO "movie_list" ("list_id", "movie_id") VALUES ($1,$2)`;
    pool.query(queryString, [req.body.data.list, req.body.data.movie]).then((results) => {
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;