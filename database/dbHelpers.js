const LalaLime = require('./index.js');


const getProducts = () => {
  return LalaLime.find({property:'bottom'});
}
const getOneProduct = (id) => {
  return LalaLime.findOne({id})
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