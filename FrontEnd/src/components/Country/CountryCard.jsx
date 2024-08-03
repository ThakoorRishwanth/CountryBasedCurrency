import React, { useContext } from 'react';
import { Box, Button, Image, Text, useToast } from '@chakra-ui/react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const CountryCard = ({ country, onFavorite }) => {
  const { user, getAuthHeaders } = useContext(AuthContext);
  const toast = useToast();

  const handleFavorite = async () => {
    if (!user) return;
    try {
      await axios.post('https://countrybasedcurrency.onrender.com/api/favorites', {
        country,
      }, getAuthHeaders());
      if (onFavorite) onFavorite(country);
      toast({
        title: 'Added to favorites.',
        description: `${country.name} has been added to your favorites.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error adding favorite', error);
      toast({
        title: 'Error occurred.',
        description: 'Could not add to favorites.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={country.flag} alt={`${country.name} flag`} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl">{country.name}</Text>
        <Text>Capital: {country.capital}</Text>
        <Text>Currency: {country.currency}</Text>
        <Text>Languages: {country.languages}</Text>
        {user && (
          <Button colorScheme="teal" mt="4" onClick={handleFavorite}>
            Add to Favorites
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CountryCard;
