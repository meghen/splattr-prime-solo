const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req,res) =>{
    
});

router.post('/', (req, res) => {
    console.log('in notes POST', req.body.notes);
    
});

module.exports = router;