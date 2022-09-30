const sequelize = require("../utils/database");
const bcrypt = require("bcrypt");
const User = sequelize.models.user;

// GENERAL CONFIG
const SALT_ROUND = 10;

exports.singUpUser = (req, res, next) => {
  let body = req.body;
  let name = body.name;
  let email = body.email;
  let password = body.password;
  // Validation Not Completed Yet
  if (body) {
    bcrypt.hash(password, SALT_ROUND, async (err, result) => {
      if (err) {
        res.status(500).json({});
      }
      try {
        let _Object = await User.create({
          name: name,
          email: email,
          password: result,
        });
        res
          .status(201)
          .json({ status: "success", message: { id: _Object.id } });
      } catch (err) {
        if (err.errors[0].message) {
          res
            .status(400)
            .json({ status: "error", message: `${err.errors[0].message}` });
        } else {
          res.status(400).json({ status: "error", message: `${err}` });
        }
      }
    });
  } else {
    res.json({ Status: "error" });
  }
};

exports.loginUser = async (req, res, next) => {
  let body = req.body;
  let plainPassword = body.password;
  // Validation Not Completed Yet
  console.log(body);
  if (body) {
    try {
      let _Object = await User.findOne({
        where: {
          email: body.email,
        },
      });

      if (_Object) {
        bcrypt.compare(plainPassword, _Object.password, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({});
          }
          if (result) {
            res
              .status(200) // 200 Successful Request
              .json({ status: "success", user: { name: _Object.name } });
          } else {
            res
              .status(401) // Error for password not match
              .json({ status: "error", message: "Password not matching" });
          }
        });
      } else {
        // 404 error for record not found
        res.status(404).json({ status: "error", message: "User Not Found." });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
  }
};
