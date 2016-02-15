/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var passport = require('passport');

 module.exports = {

     _config: {
         actions: false,
         shortcuts: false,
         rest: false
     },

     login: function(req, res) {

         passport.authenticate('local', function(err, user, info) {
             if ((err) || (!user)) {
                 return res.send({
                     message: info.message,
                     user: user
                 });
             }
             req.logIn(user, function(err) {
                 if (err) res.send(err);
                 return res.send({
                     message: info.message,
                     user: user
                 });
             });

         })(req, res);
     },

     logout: function(req, res) {
         req.logout();
         res.redirect('/');
     },

		 google: function(req, res, next){
			 passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
		 },

		 googleCallback: function(req, res, next){
       passport.authenticate(
         'google',
         {
           successRedirect: '/#/admin?yay',
           failureRedirect: '/#/admin?boo'
         }
       )(req, res, next);
		 }
}
