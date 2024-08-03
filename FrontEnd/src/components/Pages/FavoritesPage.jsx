import React, { useState, useEffect, useContext } from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import axios from 'axios';
import CountryCard from '../Country/CountryCard';
import { AuthContext } from '../../context/AuthContext';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const { user, getAuthHeaders } = useContext(AuthContext);

  const fetchFavorites = async () => {
    if (!user) return;
    try {
      const { data } = await axios.get('https://countrybasedcurrency.onrender.com/api/favorites', getAuthHeaders());
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  return (
    <Flex direction="column" align="center" p={4} flex="1">
      <SimpleGrid columns={[1, 2, 3]} spacing={4} width="full">
        {favorites.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default FavoritesPage;
