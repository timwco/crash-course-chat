var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
GithubStrategy = require('passport-github').Strategy,
GoogleStrategy = require('passport-google-oauth20').Strategy,
bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    var user = {
      name: profile.displayName,
      email: profile.emails[0].value,
      authProvider: 'Google',
      googleId: profile.id
    }
    User.findOrCreate(user, function (err, user) {
      return cb(err, user);
    });
  }
));

module.exports = {};
