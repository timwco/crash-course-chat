module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
    } else{
      console.log(req.session);
      return res.json({ authed: false });
    }
};
