/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

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

	single: function (req, res) {
		Room
			.findOne({ roomID: req.param('id') })
			.exec(function(err, room) {
				room.desc = md.render(room.desc);
	    	return res.json(room);
	  	});

		// console.log(room);
		// room.desc = room.desc + ' is coffee Mug';
		// return res.json(room);
	}

};
