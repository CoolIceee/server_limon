const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: { type: String, required: true }, //название товара
  itemName: { type: String, required: true }, //тип товара
  brand: { type: mongoose.Schema.Types.ObjectId, required: true }, //id бренда товара
  people: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }], //люди закинувшие товар в корзину
  gender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gender",
    required: true,
  }, //гендерный признак
  GenderCommodity: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "GenderCommodity",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "GenderCommodity",
  }, //тип продукта
  photo: [{ type: String }], //фотографии не менее трех
  dimensions: [{ type: String }], //размеры
  description: { type: String }, //описание
  price: { type: Number, required: true }, //цена
  discountPrice: { type: Number }, //скидочная цена
  quantity: { type: Number }, //количество товара
});

const Product = mongoose.model('Product', productSchema)
module.exports = Product
