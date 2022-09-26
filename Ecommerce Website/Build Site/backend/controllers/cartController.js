const cartModel = require("../models/cart");

exports.postCart = async (req, res, next) => {
  let body = req.body;

  try {
    let data = await cartModel.create({ ...body });

    res.json({ status: "successful", data: { id: data.id } });
  } catch (err) {
    console.log(err);
  }
};
