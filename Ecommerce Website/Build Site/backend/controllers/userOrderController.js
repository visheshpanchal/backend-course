const sequelize = require("../utils/database");

const User = sequelize.models.user;
const Cart = sequelize.models.cart;
const Order = sequelize.models.order;
const Product = sequelize.models.product;

exports.addUserOrder = async (req, res, next) => {
  let body = req.body;
  let user = await User.create({ name: body.username, email: body.email });
  let cart = await Cart.findAll();
  cart.forEach(async (prod) => {
    let values = prod.dataValues;
    // let user = await User.findOne({ where: { id: user } });
    let product = await Product.findOne({ where: { id: values.productId } });
    await Order.create({
      userId: user.id,
      productId: product.id,
      quantity: values.quantity,
    });
    console.log(values);
  });
  res.json({ id: user.id });
};
