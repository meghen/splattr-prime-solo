const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req,res) =>{
    console.log('got GET from client');
    
    axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=27,53&api_key=${process.env.TMDB_API_KEY}`)
    .then((response) => {
        console.log('API response', response);
        res.send(response.data)
    }).catch ((error) => {
        console.log('server error', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;