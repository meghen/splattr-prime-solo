const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req,res) =>{    
    axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=27,53&api_key=${process.env.TMDB_API_KEY}`)
    .then((response) => {
        res.send(response.data)
    }).catch ((error) => {
        console.log('server error', error);
        res.sendStatus(500);
    })
});

router.get('/search/:searchTerm', (req,res) =>{   
    // console.log('in router checking req.params: ', req.params.searchTerm);    
    axios.get(`https://api.themoviedb.org/3/search/movie?with_genres=27,53&api_key=${process.env.TMDB_API_KEY}&query=${req.params.searchTerm}&page=1`)
    .then((response) => {
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