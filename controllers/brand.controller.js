const Brand = require("../models/Brand.model");
module.exports.brandController = {
  addBrand: async (req, res) => {
    try {
      const { name, photo, description } = req.body;
      Brands.create({
        name,
        photo,
        description,
      });
      res.json("бранд добавлен")
    } catch (error) {
      res.json(error);
    }
  },
};
