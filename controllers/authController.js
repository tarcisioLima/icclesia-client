const express = require('express')
const router  = express.Router()
const rp      = require('request-promise-native')
const options = require('./helpers/request')

router.post('/login', (req, res) => {
    rp(options.getOptions(req, 'POST')).then((body) => {
        if(body.msg === "Logado") {
            console.log('deu bom: ', body)
            res.status(200).redirect('/');
        }else {
            console.log('deu ruim: ', body)
            res.status(200).redirect('/')
            //res.send(body)
        }        
    }).catch((err) => {
        console.log('deu ruim: ', err)
        res.status(400).redirect('/')
        //res.status(500)
        //res.send(err)
    });    
})

router.post('/register', (req, res) => {   
    //res.render('site/feed'); 
})

module.exports = router