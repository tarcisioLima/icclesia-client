const express  = require('express')
const router   = express.Router()
const vsession = require('./helpers/validSession')

router.get('/', (req, res) => {    
    res.render('site/index', {msgs: req.flash('msgs') }); 
})

router.get('/feed', vsession, (req, res) => {  
    res.render('site/feed'); 
})

router.get('/perfil', vsession, (req, res) => {
    res.render('site/profile');
})

module.exports = router