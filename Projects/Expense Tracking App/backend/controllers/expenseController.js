const sequelize = require("../utils/database");

const Expense = sequelize.models.expense;
const jwt = require("jsonwebtoken");

const SECRETE_KEY =
  "gO950trcsHUegzks2eSOt9mQirgix2sgYV1pCMefNLq8S1nzVO4m61eLjI5QIN3V";

exports.getExpenses = async (req, res, next) => {
  try {
    let token = req.headers.token;
    if (token) {
      let decryptedToken = jwt.decode(JSON.parse(token), SECRETE_KEY);
      let data = await Expense.findAll({
        where: { userId: decryptedToken.userId },
      });
      res.json(data);
    } else {
      res.status(404).json({ status: "error", message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getSingleExpense = async (req, res, next) => {
  let id = req.params.id;
  try {
    let data = await Expense.findAll({
      where: {
        _id: id,
      },
    });
    res.status(200).json(data);
  } catch (err) {}
};

exports.postExpenses = async (req, res, next) => {
  let token = req.headers.token;

  if (token) {
    try {
      let decryptedToken = jwt.decode(JSON.parse(token), SECRETE_KEY);
      let body = req.body;
      let data = await Expense.create({
        ...body,
        userId: decryptedToken.userId,
      });
      res.status(201).json(data._id);
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(404).json({ status: "error", message: "User Not Found" });
  }
};

exports.updateExpense = async (req, res, next) => {
  try {
    let body = req.body;
    let id = req.params.id;
    let data = await Expense.update(
      { ...body },
      {
        where: {
          _id: id,
        },
      }
    );

    res.status(201).json({ Update: "Done" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExpense = async (req, res, next) => {
  try {
    let id = req.params.id;

    let data = await Expense.destroy({ where: { _id: id } });

    res.status(200).json({});
  } catch (err) {
    console.log(err);
  }
};
