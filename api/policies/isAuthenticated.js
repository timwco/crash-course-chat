module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
    } else{
      console.log(req.session);
      console.log(req.passport);
      return res.json({ authed: false });
    }
};
