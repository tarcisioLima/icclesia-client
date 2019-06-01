const express  = require('express')
const router   = express.Router()
const vSession = require('./helpers/validSession')

router.get('/', (req, res) => {    
    res.render('site/index', {msgs: req.flash('msgs') }); 
})

router.get('/feed', (req, res) => {  
    if(req.session && req.session.user) {
        console.log('######### SESSAO ############')
        console.log(req.session.user)
    }
    res.render('site/feed'); 
})

router.get('/perfil', (req, res) => {   
    res.render('site/profile'); 
})

module.exports = router