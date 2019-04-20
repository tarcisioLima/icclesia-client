
//Default 2 hours
const SESS_HOUR = 1000 * 60 * 60 * process.env.SESS_LIFETIME || 2
const SECRET = process.env.SECRET || 'AveMaria'

let PORT, API_URL, ISDEV

if((process.env.ENV).toUpperCase() == 'DEVELOPMENT'){
    PORT = process.env.DEV_PORT
    API_URL = process.env.DEV_API_URL
    ISDEV = true;
}else if((process.env.ENV).toUpperCase() == 'PRODUCTION'){
    PORT = process.env.PROD_PORT
    API_URL = process.env.PROD_API_URL
    ISDEV = false;
}else{
    ISDEV = false;
    throw new Error('Atributo ENV em .env incorreto ou não encontrado.')
}

const config = { SESS_HOUR, PORT, SECRET, API_URL, ISDEV }

module.exports = config;