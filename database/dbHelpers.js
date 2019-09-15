const LalaLime = require('./index.js');

const getProducts = () => {
  return LalaLime.find({property:'bottom'});
}
const getOneProduct = (productId) => {
  return LalaLime.find({productId});
}
const postOneProduct = (property, type, title, price, img) => {
  return LalaLime.create({
    property, type, title, price, img
  })
}
const updateOneProduct = (productId, property, type, title, price, img) => {
  return LalaLime.findByIdAndUpdate(
    productId, {
        property, type, title, price, img
    }
  )
}
const deleteOneProduct = (productId) => {
  return LalaLime.findByIdAndDelete({productId})
}
module.exports = 
{ getProducts,
  getOneProduct,
  postOneProduct,
  updateOneProduct,
  deleteOneProduct
};