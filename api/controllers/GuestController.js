/**
 * GuestController
 *
 * @description :: Server-side logic for managing guests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (req, res) {
		var params = {
			name  : req.param('name'),
			email  : req.param('email'),
			class : req.param('class'),
			date  : new Date().toISOString().substring(0, 10)
		}

		Guest.create(params).exec(function (err, guest) {
			if (err) return res.send(500);
			return res.json(guest);
		});

	}

};
