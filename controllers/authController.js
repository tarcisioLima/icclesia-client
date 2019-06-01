const express = require('express')
const router  = express.Router()
const rp      = require('request-promise-native')
const options = require('./helpers/request')

router.post('/login', (req, res) => {
    rp(options.getOptions(req, 'POST')).then((body) => {
        if(body.msg === "Logado") {
            req.session.user = body
            req.session.save()
            res.redirect('/feed')
        }else {
            console.log('deu ruim: ', body)
            req.flash('msgs', [body.msg])
            res.redirect('/')            
        }        
    }).catch((err) => {      
        req.flash('msgs', [err])
        res.redirect('/')     
    });
})

router.post('/register', (req, res) => {   
    //res.render('site/feed'); 
})

module.exports = router