const LalaLime = require('./index.js');


const getProducts = () => {
  return LalaLime.find({property:'bottom'});
}
const getOneProduct = (id) => {
  return LalaLime.findOne({id})
}
const postOneProduct = (id, property, type, title, price, img) => {
  return LalaLime.create({
    id, property, type, title, price, img
  })
}
const updateOneProduct = (id, property, type, title, price, img) => {
  return LalaLime.findOneAndUpdate(
    id, {
        property, type, title, price, img
    }
  )
}
const deleteOneProduct = (id) => {
  return LalaLime.findOneAndDelete({id})
}
module.exports = 
{ getProducts,
  getOneProduct,
  postOneProduct,
  updateOneProduct,
  deleteOneProduct
};