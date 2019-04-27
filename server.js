const express    = require('express')
const path       = require('path')
const nunjucks   = require('nunjucks')
const bodyparser = require('body-parser')
const session    = require('express-session')
const config     = require('./config')

const app = express()

/* Controllers */
const genericController = require('./controllers/genericController')
const authController = require('./controllers/authController')

/* Session */
app.use(session({
    name: 'sid',
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: config.SESS_HOUR,
        sameSite: false,
        secure: !config.isDev,      
        httpOnly: true
    }
}))

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
app.use('/auth', authController)

/* Starting server */
app.listen(config.PORT, _ => console.log('O servidor inicializou na porta ' + config.PORT ))