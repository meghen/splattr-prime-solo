const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req,res)=>{
    let queryString = `INSERT INTO "movie_list" ("list_id", "movie_id") VALUES ($1,$2)`;
    pool.query(queryString, [req.body])
})

module.exports = router;
