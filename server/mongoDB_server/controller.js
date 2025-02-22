const express = require('express');
const { getProducts,
getOneProduct,
postOneProduct,
updateOneProduct,
deleteOneProduct } 
// = require('../database/dbHelpersPostgres.js');
= require('../../database/mongoDB/dbHelpers.js');

//mongo
const controller = {
  getAll: (req, res) => {
    let { id } = req.query;
    getProducts(Number(id))
    .then((data) => res.status(200).send(data))
    .catch((err) =>  res.status(400).send(err))
  },
  getOne: (req, res) => {
    let { id } = req.params;
    console.log('id', id)
    getOneProduct(id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },
  postOne: (req, res) => {
    let { id, property, type, title, price, img } = req.body;
    postOneProduct( id, property, type, title, price, img)
    .then(() => res.status(201).send('Post worked!'))
    .catch((err) => res.status(401).send(err))
  },
  updateOne: (req, res) => {
    let { id  } = req.params;
    let { property, type, title, price, img } = req.body;
    updateOneProduct(id, property, type, title, price, img)
    .then(() => res.status(202).send('Update worked!'))
    .catch((err) => res.status(402).send(err))
  },
  deleteOne: (req, res) => {
    let { id  } = req.params;
    deleteOneProduct(id)
    .then(() => res.status(203).send('Delete worked!'))
    .catch((err) => res.status(403).send(err))
  }
}
//postgres
// const controller = {
//   getAll: (req, res) => {
//     let { id } = req.query;
//     getProducts(id)
//     .then((data) => res.status(200).send(data.rows))
//     .catch((err) =>  res.status(400).send(err))
//   },
//   getOne: (req, res) => {
//     let { id } = req.params;
//     getOneProduct(id)
//     .then((data) => res.status(200).send(data.rows[0]))
//     .catch((err) => res.status(400).send(err))
//   },
//   postOne: (req, res) => {
//     let { id, property, type, title, price, img } = req.body;
//     postOneProduct( id, property, type, title, price, img)
//     .then(() => res.status(201).send('Post worked!'))
//     .catch((err) => res.status(401).send(err))
//   },
//   updateOne: (req, res) => {
//     let { id  } = req.params;
//     let { property, type, title, price, img } = req.body;
//     updateOneProduct(id, property, type, title, price, img)
//     .then(() => res.status(202).send('Update worked!'))
//     .catch((err) => res.status(402).send(err))
//   },
//   deleteOne: (req, res) => {
//     let { id  } = req.params;
//     deleteOneProduct(id)
//     .then(() => res.status(203).send('Delete worked!'))
//     .catch((err) => res.status(403).send(err))
//   }
// }

module.exports = controller;
