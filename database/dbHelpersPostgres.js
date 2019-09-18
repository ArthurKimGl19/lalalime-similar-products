const Lalalime = require('./indexPostgres.js');

const dbHelpers = {
  getProducts: () => {
    return Lalalime.findAll()
  },
  getOneProduct: (id) => {
    return Lalalime.findAll({
      where: {
        id
      }
     })
  },
  postOneProduct: (id, property, type, title, price, img) => {
    return Lalalime.create({
      id, property, type, title, price, img
    })
  },
  updateOneProduct: (id, property, type, title, price, img) => {
    return Lalalime.update({ property, type, title, price, img }, {
      where: {
        id
      }
    })
  },
  deleteOneProduct: (id) => {
    return Lalalime.destroy({
      where: {
      id
    }
  })
}
}

module.exports = dbHelpers;