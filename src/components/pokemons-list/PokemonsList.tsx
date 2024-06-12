import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {Pokemon, PokemonsApiResults} from './pokemons-list.props';
import PokemonCard from '../pokemon-card/PokemonCard';

const POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon';

/**
 * Function to trigger request to PokeAPI
 * @param url
 * @param callback
 */
const fetchPokemons = (url: string, callback: Function) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(data);
    });
};

function PokemonsList(): React.JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPokemons(POKEMONS_URL, (data: PokemonsApiResults) => {
      setPokemons(data.results);
      setNextPage(data.next);
      setLoading(false);
    });
  }, []);

  const getNextPokemons = () => {
    if (loading) {
      return;
    }
    if (nextPage) {
      setLoading(true);
      fetchPokemons(nextPage, (data: PokemonsApiResults) => {
        setPokemons(currentPokemons => [...currentPokemons, ...data.results]);
        setNextPage(data.next);
        setLoading(false);
      });
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={pokemons}
      keyExtractor={item => item.name}
      renderItem={({item}) => <PokemonCard url={item.url} />}
      onEndReached={getNextPokemons}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default PokemonsList;
