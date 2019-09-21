const { Pool, Client } = require('pg');
// const connectionString = 'postgres://newuser:pw@localhost:5432/products'

const pool = new Pool ({
  user: 'newuser',
  host: 'localhost',
  database: 'products',
  password: 'pw',
  max: 15,
  idleTimeoutMillis: 3000,
  connectinTimeOutMillis: 2000,
})

// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()

// pool.on('connect', () => {
//   console.log('connected to the postgres database')
// })
// const Ids = `CREATE TABLE IF NOT EXISTS 
//       ids(
//         id SERIAL PRIMARY KEY,
//         products VARCHAR(25)
//       )`

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
  // pool.query(Ids)
  // .then((res) => {
  //   console.log('Created table Id');
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
  // pool.end();
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