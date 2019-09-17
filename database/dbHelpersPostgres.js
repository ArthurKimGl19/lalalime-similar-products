const Lalalime = require('./indexPostgres.js');

const dbHelpers = {
  getProducts: () => {
    return Lalalime.findAll()
  },
  getOneProduct: (id) => {
    return Lalalime.find({ id })
  },
  postOneProduct: (property, type, title, price, img) => {
    return Lalalime.create({
      property, type, title, price, img
    })
  },
  updateOneProduct: (productId, property, type, title, price, img) => {
    return Lalalime.update({ property, type, title, price, img }, {
      where: {
        productId
      }
    })
  },
  deleteOneProduct: (productId) => {
    where: {
      productId
    }
  }
}

module.exports = dbHelpers;