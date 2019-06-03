const express = require('express')
const router  = express.Router()
const rp      = require('request-promise-native')
const options = require('./helpers/request')

router.post('/login', (req, res) => {    
    rp(options.getOptions('auth/login', req, 'POST')).then((body) => {
        if(body.msg === "Logado") {
            req.session.user = body.data
            req.session.save()
            res.status(200).send({status: true})
        }else {   
            res.status(200).send({msg: body.msg, status: false})            
        }        
    }).catch((err) => {      
        res.status(500).send('Houve um erro na API :(')
    });
})

router.post('/register', (req, res) => {   
    rp(options.getOptions('auth/register', req, 'POST')).then((body) => {
        console.log('resposta: ', body)
        res.status(200).send({status: true})
    }).catch((err) => {   
        console.log('caiu no erro: ', err.error )   
        res.status(200).send(err.error)
    });
})

module.exports = router