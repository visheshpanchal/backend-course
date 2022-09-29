const sequelize = require("../utils/database");

const User = sequelize.models.user;
exports.addUser = async (req, res, next) => {
  let body = req.body;

  if (body) {
    try {
      let Object = await User.create({ ...body });

      res.status(201).json({ Object });
    } catch (err) {
      if (err.errors[0].message) {
        console.log(err.errors[0].message);
        res
          .status(400)
          .json({ status: "error", message: `${err.errors[0].message}` });
      } else {
        console.log(err.errors);
      }
    }
  } else {
    res.json({ Status: "error" });
  }
};
