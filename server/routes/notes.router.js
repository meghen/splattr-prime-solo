const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req,res) =>{
    console.log('in Notes GET checking req.body', req.body.notes);
    
    let queryString = `SELECT "notes" FROM "user-review" WHERE "user_id" = $1 AND "movie_id" =$2;`
    pool.query(queryString, [req.body.notes.userId, req.body.notes.movieId]).then((results) => {
            console.log('in notes GET: ', results.rows); 
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    console.log('in notes POST', req.body.notes);
    let queryString = `INSERT INTO "user-review" ("user_id", "movie_id", "notes", "rating")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryString, [req.body.notes.userId, req.body.notes.movieId, req.body.notes.movieNotes, req.body.notes.rating]).then((results) => {
        // if successful, we'll respond with Created
            res.sendStatus(201);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;