const { Pool } = require('pg');

const pool = new Pool ({
  user: 'ubuntu',
  host: 'ec2-18-221-125-251.us-east-2.compute.amazonaws.com',
  database: 'products',
  password: 'pw',
  port: 5432,
  max: 15,
  idleTimeoutMillis: 3000,
  connectionTimeOutMillis: 2000,
})

const Lalalime = `CREATE TABLE IF NOT EXISTS
      lalalimes(
        id SERIAL PRIMARY KEY,
        property VARCHAR(15),
        type VARCHAR(15),
        title VARCHAR(90)[],
        price VARCHAR(70)[],
        img VARCHAR(1500)[][][]
      )`

pool.query(Lalalime)
  .then((res) => {
    console.log('Created table Lalalime!');
  })
  .catch((err) => {
    console.log(err);
  })
  module.exports = pool;


// sequelize method
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://newuser:pw@localhost:5432/products',{
//     logging: false,
//     max: 15,
//     min: 0
//     // acquire: 30000,
//     // idle: 10000
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// const ProductId = sequelize.define('id', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   }
// })

// const Lalalime = sequelize.define('lalalime', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   property: {
//     type: Sequelize.STRING(15)
//   },
//   type: {
//     type: Sequelize.STRING(15)
//   },
//   title: {
//     type: Sequelize.ARRAY(Sequelize.STRING(90))
//   },
//   price: {
//     type: Sequelize.ARRAY(Sequelize.STRING(70))
//   },
//   img: {
//     type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING(1500))))
//   }
// },
//   {
//     timestamps: false
// }
// )

// Lalalime.sync({ force: false })
// .then(() => {
//   console.log('db synced!');
// })
// .catch((err) => {
//   console.log('db sync failed', err)
// })

// module.exports = { Lalalime, sequelize };
