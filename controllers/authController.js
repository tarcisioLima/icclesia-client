const express = require('express')
const router  = express.Router()
const rp      = require('request-promise-native')
const config  = require('../config')

router.post('/login', (req, res) => {
    rp.post(config.API_URL + 'auth/login', {'content-type': 'application/json'})    
    .then((body) => {
        console.log('deu bom')
        res.send(data); 
    }).catch((err) => {
        console.log('deu ruim')
        res.send(err); 
    })
})

router.post('/logout', (req, res) => {
    //res.render('site/index'); 
})

router.post('/register', (req, res) => {   
    //res.render('site/feed'); 
})

module.exports = router