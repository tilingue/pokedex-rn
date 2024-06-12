import React, {useEffect, useState} from 'react';
import {PokemonCardProps, PokemonDetails} from './pokemon-card.props';
import {Image, StyleSheet, Text, View} from 'react-native';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function PokemonCard({url}: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemonData({
          name: capitalizeFirstLetter(data.name),
          order: data.order,
          image: data.sprites.other['official-artwork'].front_default,
        });
      });
  }, [url]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.image}>
        <Image
          width={90}
          height={90}
          source={{
            uri: pokemonData?.image,
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>{pokemonData?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 20,
  },
});

export default PokemonCard;
