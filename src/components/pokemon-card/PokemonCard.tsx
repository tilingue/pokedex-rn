import React, {useEffect, useState} from 'react';
import {PokemonCardProps, PokemonDetails} from './pokemon-card.props';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {types} from './pokemon.types';

const IMAGE_SIZE = 160;

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function PokemonCard({url}: PokemonCardProps) {
  const navigation = useNavigation();

  const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemonData({
          name: capitalizeFirstLetter(data.name),
          order: data.order,
          image: data.sprites.other['official-artwork'].front_default,
          types: data.types.map((type: any) => type.type.name),
        });
      });
  }, [url]);

  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigation.navigate('Details', {...pokemonData, url})}
      activeOpacity={0.8}
      style={styles.cardContainer}>
      <View style={styles.cardInnerContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            source={{
              uri: pokemonData?.image,
            }}
          />
          <View style={styles.cardImageDecoration} />
        </View>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.heading}>{pokemonData?.name}</Text>
          </View>
          <View style={styles.iconsContainer}>
            {pokemonData?.types.map((type: string) => {
              const iconSettings = types[type];
              return (
                <View
                  key={`${pokemonData?.name}_${type}`}
                  style={[styles.icon, {backgroundColor: iconSettings.color}]}>
                  <FontAwesomeIcon color="#ffffff" icon={iconSettings.icon} />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
  },
  cardInnerContainer: {
    marginHorizontal: 16,
  },
  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImageDecoration: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: IMAGE_SIZE / 2,
    backgroundColor: '#343C63',
    zIndex: -1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#343C63',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  iconsContainer: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 10,
  },
});

export default PokemonCard;
