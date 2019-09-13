const LalaLime = require('./index.js');

const getProducts = () => {
  return LalaLime.find({property:'bottom'});
}
const getOneProduct = (_id) => {
  return LalaLime.find({_id});
}
const postOneProduct = (property, type, title, price, img) => {
  return LalaLime.create({
    property, type, title, price, img
  })
}
const updateOneProduct = (_id, property, type, title, price, img) => {
  return LalaLime.findByIdAndUpdate(
    _id, {
        property, type, title, price, img
    }
  )
}
const deleteOneProduct = (_id) => {
  return LalaLime.findByIdAndDelete({_id})
}
module.exports = 
{ getProducts,
  getOneProduct,
  postOneProduct,
  updateOneProduct,
  deleteOneProduct
};