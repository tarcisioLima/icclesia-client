const config  = require('../../config')

function RequestHelper(){
    this.getOptions = function (endpoint, req, method, json = true, auth = null){
        //console.log('auth: ', auth)
        console.log('req: ', req.body)
        return {
            method: method,      
            headers: {
                'User-Agent': req.get('User-Agent'),
                'Authorization': auth,    
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            uri: `${config.API_URL}${endpoint}`,
            body: req.body,
            json: json
        }
    }   
}


module.exports = new RequestHelper;