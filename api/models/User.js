/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require("bcrypt");

module.exports = {

  attributes: {
    name: {
      type: "string"
    },
    email:{
      type: "string",
      required: true
    },
    authProvider:{
      type:'string',
      defaultsTo: 'local'
    },
    googleId:{
      type:'string',
      unique: true
    },
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
      if(user.authProvider !== 'local'){
        return cb();
      }
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
              if (err) {
                  console.log(err);
                  cb(err);
              } else {
                  user.password = hash;
                  cb();
              }
          });
      });
  }
};
