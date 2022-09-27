const sequelize = require("../utils/database");

const User = sequelize.models.user;
const Cart = sequelize.models.cart;
const Order = sequelize.models.order;
const OrderItem = sequelize.models.orderitems;
const Product = sequelize.models.product;

exports.addUserOrder = async (req, res, next) => {
  let body = req.body;
  if (body) {
    try {
      let user = await User.create({ name: body.username, email: body.email });
      let cart = await Cart.findAll();
      let order = await Order.create({ userId: user.id });

      cart.forEach(async (prod) => {
        let values = prod.dataValues;
        // let user = await User.findOne({ where: { id: user } });
        let product = await Product.findOne({
          where: { id: values.productId },
        });
        await OrderItem.create({
          orderId: order.id,
          productId: product.id,
          quantity: values.quantity,
        });
        console.log(values);
      });
      res.json({ id: user.id });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error", message: "Internal Server Error." });
    }
  } else {
    res
      .status(400)
      .json({ status: "Error", message: "User details are not included." });
  }
};

exports.pastOrder = async (req, res, next) => {
  try {
    const allOrder = await User.findAll({
      include: { model: Order, include: { model: Product } },
    });
    allOrder.forEach((order) => {
      order.dataValues.orders.forEach((prod) => {
        console.log(prod);
      });
    });
    res.json(allOrder);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "Error", message: "Internal Server Error." });
  }
};
