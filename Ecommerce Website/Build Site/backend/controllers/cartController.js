const sequelize = require("../utils/database");

// Model
const Cart = sequelize.models.cart;
const Product = sequelize.models.product;

// Controllers
exports.postCart = async (req, res, next) => {
  let body = req.body;

  if (body) {
    try {
      let data = await Cart.create({ ...body });

      res.json({ status: "successful", data: { id: data.id } });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error", message: "Internal Server Error." });
    }
  } else {
    res.status(400).json({ status: "Error", message: "Body is not included." });
  }
};

exports.getCart = async (req, res, next) => {
  try {
    let data = await Cart.findAll({ include: { model: Product } });

    let array = [];
    data.forEach((dt) => {
      let values = dt.product.dataValues;
      let quantity = dt.quantity;
      let response = {};
      response["quantity"] = quantity;
      response["product"] = { ...values };
      array.push(response);
    });
    console.log(array);
    res.json(array);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "Error", message: "Internal Server Error." });
  }
};

exports.putCart = async (req, res, next) => {
  if (req.params.id) {
    try {
      let body = req.body;
      let data = await Cart.update(
        { ...body },
        { where: { productId: req.params.id } }
      );

      res.status(204).json({ status: "successful", id: data.id });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error", message: "Internal Server Error." });
    }
  } else {
    res.status(400).json({ status: "Error", message: "Need update object ID" });
  }
};

exports.deleteItem = async (req, res, next) => {
  let num = req.params.id;
  if (num) {
    try {
      let data = await Cart.findOne({
        where: {
          productId: num,
        },
      });
      data.destroy();
      res.status(200).json({ status: "Successfully Deleted" });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error", message: "Internal Server Error." });
    }
  } else {
    res
      .status(400)
      .json({ status: "Error", message: "Delete object ID is not included" });
  }
};
