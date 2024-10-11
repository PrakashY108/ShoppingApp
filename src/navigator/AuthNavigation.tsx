import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import {Image, StyleSheet} from 'react-native';

import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {backgroundColor: 'green'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 30},
        animation: 'ios',
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown:false}}
      />
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
