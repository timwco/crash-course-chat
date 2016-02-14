/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (req, res) {
		var params = {
			name  : req.param('class') + '-' + req.param('date'),
			date  : req.param('date'),
			class : req.param('class'),
			desc  : req.param('description')
		}

		Room.create(params).exec(function (err, room) {
			if (err) return res.send(500);
			return res.json(room);
		});

	}

};
