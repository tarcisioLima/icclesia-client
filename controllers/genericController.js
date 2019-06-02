const express  = require('express')
const router   = express.Router()
const vsession = require('./helpers/validSession')

router.get('/', (req, res) => {    
    (req.session && req.session.user) ? res.redirect('/feed') : res.render('site/index', {msgs: req.flash('msgs') }); 
})

router.get('/feed', vsession, (req, res) => {  
    res.render('site/feed', {userdata: JSON.stringify(req.session.user)}); 
})

router.get('/perfil', vsession, (req, res) => {
    res.render('site/profile', {userdata: req.session.user});
})

module.exports = router