const express    = require('express')
const path       = require('path')
const nunjucks   = require('nunjucks')
const bodyparser = require('body-parser')
const session    = require('express-session')
const mongodb    = require('mongodb')
const flash      = require('connect-flash')
var MongoDBStore = require('connect-mongodb-session')(session);
const config     = require('./config')
const app = express()

/* Controllers */
const genericController = require('./controllers/genericController')
const authController = require('./controllers/authController')

/* Database Connection */
const store = new MongoDBStore({
    uri: `${config.DBCONNECTION}/${config.DBNAME}`,
    collection: 'sessions'
});

/* Session */
app.use(session({
    name: 'sid',
    store: store,
    secret: config.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: config.SESS_HOUR       
    }
}))

app.use(flash())

// Catch some errors
store.on('error', function(error) {
    console.log('save error: ', error);
});

nunjucks.configure('views', {express: app})

/* Template engine setup */
app.set('view engine', 'njk')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyparser.urlencoded({
    extended: true
}))

/* public path */
app.use(express.static(path.join(__dirname, 'public')));

app.use('/logout', (req, res) => {
	req.session.destroy()
	res.redirect('/')
})

/* Routes */
app.use('/', genericController)
app.use('/auth', authController)

// catch 404 and forward to error handler
app.use(function(req, res, next) {   
    return res.status(404).render('errors/404'); 
});

/* Starting server */
app.listen(config.PORT, _ => console.log('O servidor inicializou na porta ' + config.PORT ))