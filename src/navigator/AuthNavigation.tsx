import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {backgroundColor: 'green'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 30},
        animation: 'ios',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login Screen'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
  
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{title: 'Forget Password'}}
      />
      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icons: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
});
