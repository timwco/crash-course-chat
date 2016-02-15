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

     verify: function (req, res) {

     },

		 google: function(req, res, next){
			 passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
		 },

		 googleCallback: function(req, res, next){
       passport.authenticate('google', function (err, user, info) {
        res.redirect('/#/admin?' + user.email);
      })(req, res, next);
		 }
}
