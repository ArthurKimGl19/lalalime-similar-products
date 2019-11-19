const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://52.53.213.195:27017/products', { useNewUrlParser: true, poolSize: 15 })
// mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
.then(() => console.log('db connected'))
.catch((err) => console.log('db not connected'))

const Products = new Schema({
  property: String,
  type: String,
  title: [String],
  price: [String],
  img: [[[String]]]
})
Products.index({ id: 1 });
const Lalalime = mongoose.model('LalaLime', Products )

module.exports = Lalalime;

// Lalalime.find({id: 1}, (err, data) => {
//   if (err){
//     console.log('error', err)
//   } else {
//     console.log('data', data)
//   }
// })