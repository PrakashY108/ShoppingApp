import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
