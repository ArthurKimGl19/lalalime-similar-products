const express = require('express');
const { getProducts,
getOneProduct,
postOneProduct,
updateOneProduct,
deleteOneProduct } = require('../database/dbHelpers.js');

const controller = {
  getAll: (req, res) => {
    getProducts()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },
  getOne: (req, res) => {
    let { _id } = req.params;
    getOneProduct(_id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err))
  },
  postOne: (req, res) => {
    let { property, type, title, price, img } = req.body;
    postOneProduct( property, type, title, price, img)
    .then(() => res.status(201).send('Post worked!'))
    .catch((err) => res.status(401).send(err))
  },
  updateOne: (req, res) => {
    let { _id } = req.params;
    let { property, type, title, price, img } = req.body;
    updateOneProduct(_id, property, type, title, price, img)
    .then(() => res.status(202).send('Update worked!'))
    .catch((err) => res.status(402).send(err))
  },
  deleteOne: (req, res) => {
    let { _id } = req.params;
    deleteOneProduct(_id)
    .then(() => res.status(203).send('Delete worked!'))
    .catch((err) => res.status(403).send(err))
  }
}

module.exports = controller;