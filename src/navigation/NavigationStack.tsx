import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import PokemonDetails from '../screens/pokemon-details/PokemonDetails';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Home} />
      <Stack.Screen name="Details" component={PokemonDetails} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
