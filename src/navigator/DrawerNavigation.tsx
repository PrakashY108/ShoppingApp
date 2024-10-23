import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import {useNavigation} from '@react-navigation/native';
import Colors from '../themes/Colors';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: Colors.lightblue},
        headerTitleStyle: {color: 'white', fontSize: 30},
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
