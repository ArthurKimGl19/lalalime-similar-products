// const { Pool, Client } = require('pg');
// const connectionString = 'postgres://newuser:pw@localhost:5432/products'

// const pool = new Pool ({
//   host: 'localhost',
//   user: 'newuser',
//   database: 'products',
//   max: 100,
//   idleTimeoutMillis: 3000,
//   connectinTimeOutMillis: 2000,
// })

// // const client = new Client({
// //   connectionString: connectionString,
// // })
// // client.connect()

// // pool.on('connect', () => {
// //   console.log('connected to the postgres database')
// // })

// const Lalalime = `CREATE TABLE IF NOT EXISTS
//       lalalimes(
//         id SERIAL PRIMARY KEY,
//         property VARCHAR(15),
//         type VARCHAR(15),
//         title VARCHAR(90)[],
//         price VARCHAR(70)[],
//         img VARCHAR(1500)[][][]
//       )`

// pool.query(Lalalime)
//   .then((res) => {
//     console.log('Created table!');
//     pool.end();
//   })
//   .catch((err) => {
//     console.log(err);
//     pool.end();
//   })

//   console.log('what is pool', pool)
// module.exports = { pool, Lalalime };;
// sequelize method
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://newuser:pw@localhost:5432/products',{
    logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Lalalime = sequelize.define('lalalime', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  property: {
    type: Sequelize.STRING(15)
  },
  type: {
    type: Sequelize.STRING(15)
  },
  title: {
    type: Sequelize.ARRAY(Sequelize.STRING(90))
  },
  price: {
    type: Sequelize.ARRAY(Sequelize.STRING(70))
  },
  img: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING(1500))))
  }
},
  {
    timestamps: false
}
)

Lalalime.sync({ force: false })
.then(() => {
  console.log('db synced!');
})
.catch((err) => {
  console.log('db sync failed', err)
})

module.exports = { Lalalime, sequelize };