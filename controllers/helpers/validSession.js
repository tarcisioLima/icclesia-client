
/* Middleware to ever verify if session exists */
let isLogged = function(req, res, next) {
	if(req.session && req.session.user) {
        next()
    }else{
        req.session.destroy()
		return res.redirect('/')
    }
}

module.exports = isLogged