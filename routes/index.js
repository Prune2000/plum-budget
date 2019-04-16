const express = require('express');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = (passport) => {
    
    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash : true 
    }));

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash : true 
    }));

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    /* GET Dashboard Page */
    router.get('/dashboard', isAuthenticated, (req, res) => {
        res.send({ user: req.user });
    });
   
    return router;
}