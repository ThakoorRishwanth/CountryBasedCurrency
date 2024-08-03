const axios = require('axios');

// Controller to fetch all countries
const getAllCountries = async (req, res) => {
  try {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');
    res.json(data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : 'N/A',
      currency: Object.keys(country.currencies || {}).join(', '),
      languages: Object.values(country.languages || {}).join(', '),
      flag: country.flags.svg
    })));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries', error });
  }
};

// Controller to fetch countries by currency code
const getCountryByCurrency = async (req, res) => {
  const { currencyCode } = req.params;
  try {
    const { data } = await axios.get(`https://restcountries.com/v3.1/currency/${currencyCode}`);
    res.json(data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : 'N/A',
      currency: Object.keys(country.currencies || {}).join(', '),
      languages: Object.values(country.languages || {}).join(', '),
      flag: country.flags.svg
    })));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries', error });
  }
};

module.exports = { getAllCountries, getCountryByCurrency };
