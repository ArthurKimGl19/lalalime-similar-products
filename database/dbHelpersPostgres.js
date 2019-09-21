// const { Lalalime, sequelize } = require('./indexPostgres.js');
const pool  = require('./indexPostgres.js');
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// sequelize queries
// const dbHelpers = {
//   getProducts: () => {
//     //generate random id range from 1 to 1434    
//     let random = getRandomArbitrary(1, 1434)
//     let floor = Math.floor(random * 6999);
//     return sequelize.query(`select * from lalalimes where id between ${floor} and ${floor+10} limit 10`)
//     // return sequelize.query(`select * from lalalimes where id between 9000000 and 9006999 limit 10``)
//   },
//   getOneProduct: (id) => {
//     return Lalalime.findAll({
//       where: {
//         id
//       }
//      })
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

// raw postgresql
const dbHelpers = {
  getProducts: () => {
    let random = getRandomArbitrary(1, 1434)
    let floor = Math.floor(random * 6999);

    return pool.query(`select * from lalalimes where id between ${floor} and ${floor+6999} limit 10`);
  },
  getOneProduct: (id) => {
    return pool.query(`select * from lalalimes where id=${id}`, [id])
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