const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  symbol: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  below: {
    type: Number
  },
  above: {
    type: Number
  }
});

module.exports = Stock = mongoose.model('stock', StockSchema);
