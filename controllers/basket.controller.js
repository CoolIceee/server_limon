const Basket = require("../models/Basket.model");
module.exports.basketController = {
  addProductBasket: async (req, res) => {
    try {
      await Basket.create({
        user: req.user.id,
        product: req.params.id,
      });
      res.json("add");
    } catch (error) {
      res.json(error);
    }
  },
  getProductBasket: async (req, res) => {
    try {
     const data =  await Basket.find({
        user: req.user.id,
      });

      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteProductBasket: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.user.id, {
        $pull: { people: req.params.id },
      });

      res.json("удалено");
    } catch (error) {
      res.json(error);
    }
  },
};
