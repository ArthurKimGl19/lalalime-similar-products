const express = require('express');
const controller = require('./controller.js');
const router = express.Router();


router
  .route('/similar_products/getAll/:id')
  .get(controller.getAll)

router
  .route('/similar_products/byId/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)
router  
  .route('/similar_products/post')
    .post(controller.postOne)

module.exports = router;
