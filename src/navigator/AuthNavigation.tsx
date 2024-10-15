import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet} from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/AuthScreen/Login';
import SignUpConatiner from '../screens/AuthScreen/SignUp';
import ForgetPassword from '../screens/AuthScreen/ForgetPassword';
import HomeScreen from '../screens/BottomScreens/Home';

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
        component={Login}
        options={{title: 'Login Screen'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpConatiner}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
  
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
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
