const express = require('express');
const ProductController = require('./services');

const router = express.Router();

router.get('/', ProductController.listall)
      .post('/', ProductController.create)
      .get('/:key/:value', ProductController.find, ProductController.show)
      .put('/:uid', ProductController.update)
      .delete('/:key/:value', ProductController.find, ProductController.deleted)

module.exports = router;