const express = require('express');
const { getCountryByCurrency } = require('../controllers/CountryController');


const router = express.Router();

router.get('/:currency', getCountryByCurrency);

module.exports = router;
