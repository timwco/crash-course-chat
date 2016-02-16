/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var MarkdownIt  = require('markdown-it'),
    md          = new MarkdownIt(),
    json2csv    = require('json2csv'),
    fs          = require('fs');

module.exports = {

	create: function (req, res) {

		Room.count(function (error, total) {
			var params = {
				roomID : total + 1,
				name   : req.param('class') + '-' + req.param('date'),
				date   : req.param('date'),
				class  : req.param('class'),
				desc   : req.param('description')
			}

			Room.create(params).exec(function (err, room) {
				if (err) return res.send(500);
				return res.json(room);
			});
		});

	},

  export: function (req, res) {

    Guest
      .find({ roomID: req.param('id')} )
      .exec(function(err, guestList) {
        var fields = ['name', 'date', 'class', 'email'];
        console.log(guestList);
        json2csv({ data: guestList, fields: fields }, function(err, csv) {
          if (err) console.log(err);
          var filename = req.param('id') + "-export.csv";
          res.attachment(filename);
          res.end(csv, 'UTF-8');
        });
	  	});
  },

  all: function (req, res) {
    Room.find().exec(function(err, rooms) {
    	return res.json(rooms);
  	});
  },

	single: function (req, res) {
		Room
			.findOne({ roomID: req.param('id') })
			.exec(function(err, room) {
        if (room !== undefined) {
          room.desc = md.render(room.desc);
          return res.json(room);
        } else {
          return res.json({ noRoom: true });
        }
	  	});
	}

};
