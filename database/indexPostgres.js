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

const Products = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  property: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  price: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  img: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING)))
  }
},
  {
    timestamps: false
})

Products.sync({ force: false })
.then(() => {
  console.log('db synced!');
})
.catch((err) => {
  console.log('db sync failed', err)
})