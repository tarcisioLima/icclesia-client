const config  = require('../../config')

function RequestHelper(){
    this.getOptions = function (req, method, json = true){
        return{
            method: method,      
            headers: {
                'User-Agent': req.get('User-Agent'),
            },
            uri: `${config.API_URL}auth/login`,
            body: req.body,
            json: json
        }
    }
}

module.exports = new RequestHelper;