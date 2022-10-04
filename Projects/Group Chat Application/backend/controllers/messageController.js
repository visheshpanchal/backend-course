const sequelize = require("../utils/database");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const SALT = 10;
const SECRET_KEY = process.env.SECRET_KEY;

// Model
const User = sequelize.models.user;
const Message = sequelize.models.message;

exports.storeMessage = async (req, res, next) => {
  let token = req.headers.token;
  let body = req.body;
  if (token !== "" && body.message) {
    jwt.verify(token, SECRET_KEY, async function (err, decryptToken) {
      if (err) {
        /*
            err = {
              name: 'JsonWebTokenError',
              message: 'jwt malformed'
            }

          */
        console.log(err);
      }
      try {
        let message = await Message.create({
          userId: decryptToken.userId,
          message: body.message,
        });

        res.status(201).json({
          status: "success",
          data: { user: decryptToken.name, message: message.id },
        });
      } catch (error) {
        res.status(500).json({ status: "error", message: "Server Error" });
      }
    });
  } else {
    res.status(404).json({ status: "error", message: "User Not Found." });
  }
};

exports.getAllMessages = async (req, res, next) => {
  let token = req.headers.token;
  let body = req.body;
  if (token !== "") {
    jwt.verify(token, SECRET_KEY, async function (err, decryptToken) {
      if (err) {
        /*
            err = {
              name: 'JsonWebTokenError',
              message: 'jwt malformed'
            }

          */
        console.log(err);
      }
      try {
        let message = await Message.findAll({
          where: { userId: decryptToken.userId },
        });

        res.status(201).json({
          status: "success",
          data: { user: decryptToken.name, message: message },
        });
      } catch (error) {
        res.status(500).json({ status: "error", message: "Server Error" });
      }
    });
  } else {
    res.status(404).json({ status: "error", message: "User Not Found." });
  }
};
