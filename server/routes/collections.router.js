const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//inner gets the movies inside the lists
router.post('/', (req,res)=>{        
    let queryString = `INSERT INTO "movie_list" ("list_id", "movie_id") VALUES ($1,$2)`;
    pool.query(queryString, [req.body.data.listId, req.body.data.movieId]).then((results) => {        
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

///outer gets names of lists created per user
//creates a new list
router.post('/outer', (req,res)=>{      
    let queryString = `INSERT INTO "user_lists" ("list_title", "user_id") VALUES ($1, $2);`;
    pool.query(queryString, [req.body.newListTitle, req.session.passport.user]).then((results) => {        
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
//shows all lists created by user
router.get('/outer', (req,res)=>{    
    let queryString = `SELECT "list_title","user_lists"."id" FROM "user_lists"
    LEFT JOIN "movie_list" ON "movie_list"."list_id" = "user_lists"."id"
    JOIN "user" ON "user"."id" = "user_lists"."user_id"
    WHERE "user"."id" = $1
    GROUP BY "list_title", "user_lists"."id";`
    pool.query(queryString, [req.session.passport.user]).then((results) => {
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
//removes list title and movies in list
router.delete('/outer/:listId', (req,res)=>{
    let queryString = `DELETE FROM "user_lists" WHERE "id" = $1 AND "user_lists"."user_id" = $2;`;
    pool.query(queryString, [req.params.listId, req.session.passport.user]).then((results) => {        
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
//updates the list title
router.put('/outer', (req,res)=>{    
    let queryString = `UPDATE "user_lists" SET "list_title"=$1 WHERE "id" = $2 AND "user_id" = $3;`;
    pool.query(queryString, [req.body.data.title,req.body.data.movieId,req.session.passport.user]).then((results) => {        
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
module.exports = router;