module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
    } else{
      console.log(req.sessionID);
      console.log(req.redis);
      return res.json({ authed: false });
    }
};
