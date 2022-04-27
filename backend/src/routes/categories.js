const express = require('express');
const router = express.Router();
const {categories, category} = require('../controllers/categoriesController');

//Routes
router
    .get('/categories', categories)
    .get('/category/:id', category)

module.exports = router;