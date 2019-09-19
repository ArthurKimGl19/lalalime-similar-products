const { Lalalime, sequelize } = require('./indexPostgres.js');

const dbHelpers = {
  getProducts: () => {
    // return Lalalime.findAll({ 
    //   // where: {
    //   //   property: 'bottom'
    //   // }, { 
    //     limit: 25 
    //   // }
    // })
    return sequelize.query("select * from lalalimes where property='bottom' limit 100")
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