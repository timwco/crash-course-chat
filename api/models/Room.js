/**
 * Room.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: "string",
      required: true
    },
    class:{
      type: "string",
      required: true
    },
    roomID: {
      type: "integer",
      required: true
    },
    desc: {
      type: "text"
    },
    date: {
      type: "date",
      required: true
    },
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  }

};
