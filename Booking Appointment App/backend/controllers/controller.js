const appointmentModel = require("../models/model");

exports.getData = async (req, res, next) => {
  try {
    let data = await appointmentModel.findAll();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
exports.getSingleData = async (req, res, next) => {
  try {
    let param = req.params.id;
    let data = await appointmentModel.findAll({
      where: {
        _id: param,
      },
    });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
exports.postData = async (req, res, next) => {
  try {
    let body = req.body;
    let obj = await appointmentModel.create(body);

    res.json(obj._id);
  } catch (err) {
    console.log(err);
  }
};

exports.putData = async (req, res, next) => {
  let param = req.params.id;
  try {
    let body = req.body;
    let obj = await appointmentModel.update(
      { ...body },
      {
        where: {
          _id: param,
        },
      }
    );

    res.status(201).json({ Update: "Done" });
  } catch (err) {
    console.log(err, "Err in Update");
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    let param = req.params.id;

    let obj = appointmentModel.destroy({
      where: {
        _id: param,
      },
    });

    res.json(obj);
  } catch (err) {
    console.log(err);
  }
};
