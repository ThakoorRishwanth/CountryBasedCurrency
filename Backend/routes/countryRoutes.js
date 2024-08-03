const express = require('express');
const { getAllCountries, getCountryByCurrency } = require('../controllers/countryController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllCountries);
router.get('/:currencyCode', getCountryByCurrency);

module.exports = router;
