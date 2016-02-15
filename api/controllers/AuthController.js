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
       res.json({ authed: true });
     },

     logout: function(req, res) {
       req.logout();
       res.redirect('/#/admin');
     },

		 google: function(req, res, next){
			 passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
		 },

		 googleCallback: function(req, res, next){
       passport.authenticate('google', function (err, user, info) {

       if (err) return res.redirect('/#/admin?c=1');

        req.logIn(user, function(err) {
          if (err) return res.redirect('/#/admin?c=1');
        });

        return res.redirect('/#/admin');

      })(req, res, next);
		 }
}
