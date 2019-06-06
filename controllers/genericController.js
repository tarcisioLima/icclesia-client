const express  = require('express')
const router   = express.Router()
const vsession = require('./helpers/validSession')
const options  = require('./helpers/request')
const rp       = require('request-promise-native')

router.get('/', (req, res) => {    
    (req.session && req.session.user) ? res.redirect('/feed') : res.render('site/index', {msgs: req.flash('msgs') }); 
})

router.get('/feed', vsession, (req, res) => {
    rp(options.getOptions('user/feed', req, 'GET', true, req.session.user.token)).then((body) => {
        console.log('body', body)
    }).catch((err) => {
        console.log('err: ', err._header)
    })
    
    res.render('site/feed', {userdata: JSON.stringify(req.session.user)}); 
})

router.get('/perfil', vsession, (req, res) => {
    res.render('site/profile', {userdata: req.session.user});
})

module.exports = router