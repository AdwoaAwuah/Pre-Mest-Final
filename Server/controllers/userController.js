const User = require("../models/user");
// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { firstName, lastName, email, password, isLoggedIn } = req.body;
    // ADD VALIDATION
    User.findOne({ email: email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, there is already a user with the email: ${email}`,
        });
      }
      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        isLoggedIn: isLoggedIn,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie("connect.sid"); // clean up!
      return res.json({ msg: "logging you out" });
    } else {
      return res.json({ msg: "no user to log out!" });
    }
  },
  auth: function (req, res, next) {
    next();
  },
  authenticate: (req, res) => {
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  },
};
