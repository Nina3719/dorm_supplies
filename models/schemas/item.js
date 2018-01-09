const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema(
  {
    name: String,
    price: Number,
    decription: String,
    quantity: Number,
    picture: String
  }
);

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
