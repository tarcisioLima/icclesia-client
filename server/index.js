const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const session    = require('express-session')
const mongodb    = require('mongodb')
var MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser')
const authController = require('./controllers/authController')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Database Connection 
const store = new MongoDBStore({
  uri: `${process.env.DBCONNECTION}/${process.env.DBNAME}`,
  collection: 'sessions'
});

app.use(session({
  name: 'sid',
  secret: process.env.SECRET || 'AveMaria',
  store: store, 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * process.env.SESS_LIFETIME || 2 }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }))

app.use('/auth', authController)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
