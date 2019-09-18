const pg = require('pg');
// var conString = "postgres://newuser:pw@localhost:5432/products";
// var client = new pg.Client(conString);
// client.connect()
// .then(() => console.log('postgres connection worked!'))
// .catch((err) => console.log('postgres connection failed', err));

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://newuser:pw@localhost:5432/products');

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
    type: Sequelize.STRING(90)
  },
  price: {
    type: Sequelize.STRING(70)
  },
  img: {
    type: Sequelize.STRING(1500)
  }
},
  {
    timestamps: false
})

Lalalime.sync({ force: false })
.then(() => {
  console.log('db synced!');
})
.catch((err) => {
  console.log('db sync failed', err)
})

module.exports = Lalalime;