const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
.then(() => console.log('db connected'))
.catch((err) => console.log('db not connected'))

const Products = new Schema({
  id: Number,
  property: String,
  type: String,
  title: [String],
  price: [String],
  img: [[[String]]]
})

const Lalalime = mongoose.model('LalaLime', Products )

module.exports = Lalalime;
