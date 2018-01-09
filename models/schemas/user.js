const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    hash: String,
    name: String,
    isAdmin: Boolean,
    address: String,
    classYear: Number,
    orders: [{
      items: [{
        itemId: String,
        quantity: Number,
        price: Number
      }],
      purchaseDate: Date,
      deliveredDate: Date,
      isPaid: Boolean
    }]
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
