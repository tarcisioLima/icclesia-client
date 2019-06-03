const config  = require('../../config')

function RequestHelper(){
    this.getOptions = function (endpoint, req, method, json = true){
        return{
            method: method,      
            headers: {
                'User-Agent': req.get('User-Agent'),
            },
            uri: `${config.API_URL}${endpoint}`,
            body: req.body,
            json: json
        }
    }
}

module.exports = new RequestHelper;