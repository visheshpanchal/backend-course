const sequelize = require("../utils/database");

const Product = sequelize.models.product;
const LIMIT_PAR_PAGE = 2;
exports.getAllProduct = (req, res, next) => {
  let currentPage = req.query.page;
  if (currentPage) {
    Product.count()
      .then((c) => {
        res.set({
          PAGINATION_COUNT: c,
          "Access-Control-Expose-Headers": "PAGINATION_COUNT",
        });
        Product.findAll({
          offset: (currentPage - 1) * LIMIT_PAR_PAGE,
          limit: LIMIT_PAR_PAGE,
        })
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .json({ status: "Error", message: "Internal Server Error." });
          });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ status: "Error", message: "Internal Server Error." });
      });
  } else {
    Product.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ status: "Error", message: "Internal Server Error." });
      });
  }
};
