const sequelize = require("../utils/database");

const User = sequelize.models.user;
exports.addUser = async (req, res, next) => {
  let body = req.body;

  if (body) {
    try {
      let Object = await User.create({ ...body });

      res.status(201).json({ Object });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json({ Status: "error" });
  }
};
