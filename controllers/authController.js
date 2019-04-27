const express = require('express')
const router  = express.Router()
const rp      = require('request-promise-native')
const options = require('./helpers/request')

router.post('/login', (req, res) => {
    
    console.log(options.getOptions(req, 'POST'))
    rp(options.getOptions(req, 'POST')).then((body) => {      
        if(body.sucess){
            res.send(body);
        }else{
            res.status(401);
            res.send(body);
        }        
        
    }).catch((err) => {
        res.status(500);
        res.send(err)
    });
    
})

router.post('/logout', (req, res) => {
    //res.render('site/index'); 
})

router.post('/register', (req, res) => {   
    //res.render('site/feed'); 
})

module.exports = router