const express    = require('express')
const path       = require('path')
const nunjucks   = require('nunjucks')
const bodyparser = require('body-parser')

/* Controllers */
const genericController = require('./controllers/genericController')

const app = express()

nunjucks.configure('views', {express: app})

/* Template engine setup */
app.set('view engine', 'njk') 
app.set('views', path.join(__dirname, 'views'))

app.use(bodyparser.urlencoded({
    extended: true
}))

/* public path */
app.use(express.static(path.join(__dirname, 'public')));

/* Routes */
app.use('/', genericController)

/* Starting server */
app.listen(3000, () => {
    console.log('O servidor inicializou na porta 3000');
})