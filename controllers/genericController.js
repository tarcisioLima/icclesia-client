const express  = require('express')
const router   = express.Router()
const vsession = require('./helpers/validSession')
const options  = require('./helpers/request')
const rp       = require('request-promise-native')

router.get('/', (req, res) => {    
    (req.session && req.session.user) ? res.redirect('/feed') : res.render('site/index', {msgs: req.flash('msgs') }); 
})

router.get('/feed', vsession, (req, res) => {
    res.render('site/feed', {userdata: JSON.stringify(req.session.user), token: req.session.user.token}); 
})

router.get('/perfil', vsession, (req, res) => {
    res.render('site/profile', {userdata: req.session.user, token: req.session.user.token});
})

module.exports = router