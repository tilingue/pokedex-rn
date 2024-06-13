import React from 'react';
import {Text, View} from 'react-native';

function PokemonDetails({route}) {
  const {name} = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default PokemonDetails;
