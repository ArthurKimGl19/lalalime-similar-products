const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('ec2-13-56-224-101.us-west-1.compute.amazonaws.com', { useNewUrlParser: true, poolSize: 15 })
.then(() => console.log('db connected'))
.catch((err) => console.log('db not connected'))

const Products = new Schema({
  property: String,
  type: String,
  title: [String],
  price: [String],
  img: [[[String]]]
})

const Lalalime = mongoose.model('LalaLime', Products )

module.exports = Lalalime;

// Lalalime.find({id: 1}, (err, data) => {
//   if (err){
//     console.log('error', err)
//   } else {
//     console.log('data', data)
//   }
// })