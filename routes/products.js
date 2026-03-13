const express = require('express');
const router = express.Router();
const path = require('path');

// Product Listing Page Route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/products.html'));
});

// Product Details Page Route
router.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/product-details.html'));
});

module.exports = router;
