function RequestHelper(){
    this.getOptions = function (endpoint, req, method, json = true, auth = null){
        return {
            method: method,      
            headers: {
                'User-Agent': req.get('User-Agent'),
                'Authorization': auth,    
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            uri: `${process.env.DEV_API_URL}${endpoint}`,
            body: req.body,
            json: json
        }
    }   
}


module.exports = new RequestHelper;