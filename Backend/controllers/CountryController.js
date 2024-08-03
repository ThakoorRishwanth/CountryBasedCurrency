// controllers/countryController.js
const axios = require('axios');

const getCountryByCurrency = async (req, res) => {
  const { currency } = req.params;

  try {
    const { data } = await axios.get(`https://restcountries.com/v3.1/currency/${currency}`);
    const countries = data.map((country) => ({
      name: country.name.common,
      currency: currency,
      capital: country.capital ? country.capital[0] : 'N/A',
      languages: Object.values(country.languages || {}),
      flag: country.flags ? country.flags[0] : 'N/A',
    }));

    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country details' });
  }
};

module.exports = { getCountryByCurrency };
