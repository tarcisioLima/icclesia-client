const express = require('express')
const router  = express.Router()
const rp      = require('request-promise-native')
const options = require('../helpers/request')

router.post('/login', (req, res) => {
    rp(options.getOptions('auth/login', req, 'POST')).then((body) => {      
        if(body.success) {
            req.session.user = body.data
            req.session.save()
            res.status(200).send({...body.data, expiration: req.session.cookie.expires})
        }else {
            res.status(200).send({msg: body.msg, status: false})            
        }
    }).catch((err) => {      
        res.status(500).send('Houve um erro na API :(')
    });
})

router.post('/register', (req, res) => {   
    rp(options.getOptions('auth/register', req, 'POST')).then((body) => {      
        res.status(200).send({status: true})
    }).catch((err) => {        
        res.status(200).send(err.error)
    });
})

router.post('/logout', (req, res) => {      
    req.session.destroy()
    res.clearCookie('sid')   
});

router.get('/clear', (req, res) => {    
    req.session.destroy()
    res.clearCookie('sid')
    res.status(200).send('LIMPO')
})


module.exports = router