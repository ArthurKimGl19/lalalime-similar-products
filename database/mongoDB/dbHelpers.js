const Lalalime = require('./index.js');

let getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}
const getProducts = (id) => {
  if (id>= 1 && id <= 1434){
    let floor = Math.floor(id * 6999);
    return Lalalime.find( {id: { $gte: floor}} ).limit(10)
  }
}
const getOneProduct = (id) => {
  return Lalalime.findOne({id})
}
const postOneProduct = (id, property, type, title, price, img) => {
  return Lalalime.create({
    id, property, type, title, price, img
  })
}
const updateOneProduct = (id, property, type, title, price, img) => {
  return Lalalime.findOneAndUpdate(
    id, {
        property, type, title, price, img
    }
  )
}
const deleteOneProduct = (id) => {
  return Lalalime.findOneAndDelete({id})
}
module.exports = 
{ getProducts,
  getOneProduct,
  postOneProduct,
  updateOneProduct,
  deleteOneProduct
};