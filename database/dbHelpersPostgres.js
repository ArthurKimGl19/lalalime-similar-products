const { Lalalime, sequelize } = require('./indexPostgres.js');
// const { pool, Lalalime } = require('./indexPostgres.js');

//sequelize queries
const dbHelpers = {
  getProducts: () => {
    return sequelize.query("select * from lalalimes where id between 1 and 6900 limit 25")
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

// raw postgresql
// const dbHelpers = {
//   getProducts: () => {
//     // return pool.query("select * from lalalimes where id=1")
//     return pool.query("select * from lalalimes where property='bottom' limit 50", ['bottom', 50])
//   },
//   getOneProduct: (id) => {
//     return pool.query(`select * from lalalimes where id=${id}`, [id])
//   },
//   postOneProduct: (id, property, type, title, price, img) => {
//     return Lalalime.create({
//       id, property, type, title, price, img
//     })
//   },
//   updateOneProduct: (id, property, type, title, price, img) => {
//     return Lalalime.update({ property, type, title, price, img }, {
//       where: {
//         id
//       }
//     })
//   },
//   deleteOneProduct: (id) => {
//     return Lalalime.destroy({
//       where: {
//       id
//     }
//   })
// }
// }

module.exports = dbHelpers;