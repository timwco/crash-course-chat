/**
 * GuestController
 *
 * @description :: Server-side logic for managing guests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment = require('moment');

module.exports = {

	create: function (req, res) {

		var date = moment(new Date()).format('MMMM, Do YYYY');

		var params = {
			name  : req.param('name'),
			email  : req.param('email'),
			class : req.param('class'),
			roomID : req.param('roomID'),
			date   : date
		}
		Guest.create(params).exec(function (err, guest) {
			if (err) return res.send(500);
			return res.json(guest);
		});

	}

};
