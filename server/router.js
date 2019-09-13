const express = require('express');
const controller = require('./controller.js');
const router = express.Router();


router
  .route('/similar_products/getAll')
  .get(controller.getAll)

router
  .route('/similar_products/byId/:_id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)
router  
  .route('/similar_products/post')
    .post(controller.postOne)

module.exports = router;