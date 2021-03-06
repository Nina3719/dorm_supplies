const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: String,
    price: Number,
    decription: String,
    quantity: Number,
    picture: String
  }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
