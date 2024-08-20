const { getuser } = require("../auth");

const authentication = async (req, res, next) => {
  const token = req.cookies.uid;
  if (!token) {
    return res.redirect("/signin");
  }

  const user = await getuser(token);
  if (!user) {
    req.user=user
    return res.redirect("/signin");
  }
   
  req.user = user;
  next();
};


module.exports = authentication;
