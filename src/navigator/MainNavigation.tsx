 import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';
import ProductDetails from '../screens/BottomScreens/ProductDetails';


const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='AuthNavigation'>
        <Stack.Screen name='AuthNavigator' component={AuthNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{  headerStyle: {backgroundColor: 'green'},
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'white', fontSize: 30},headerTintColor:"white"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
