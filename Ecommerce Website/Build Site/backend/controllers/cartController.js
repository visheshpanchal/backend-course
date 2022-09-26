const sequelize = require("../utils/database");

const Cart = sequelize.models.cart;
exports.postCart = async (req, res, next) => {
  let body = req.body;

  try {
    let data = await Cart.create({ ...body });

    res.json({ status: "successful", data: { id: data.id } });
  } catch (err) {
    console.log(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    let data = await Cart.findAll();

    res.json(data);
  } catch (err) {
    console.log(err);
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
    }
  } else {
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
    }
  } else {
  }
};
