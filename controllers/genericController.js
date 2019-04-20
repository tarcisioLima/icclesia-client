const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('site/index'); 
})

router.get('/feed', (req, res) => {   
    res.render('site/feed'); 
})

router.get('/perfil', (req, res) => {   
    res.render('site/profile'); 
})

module.exports = router