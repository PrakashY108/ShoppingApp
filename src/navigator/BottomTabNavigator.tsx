import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WishlistScreen from '../screens/WishlistScreen';
import {useNavigation} from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const Icon = ({source, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icons} source={source} />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'green'},
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'lightgreen',
        tabBarActiveBackgroundColor: 'green',
        headerTitleStyle: {color: 'white', fontSize: 30},
        tabBarStyle: {backgroundColor: 'lightgreen'},
        headerLeft: () => (
          <Icon
            source={require('../assets/icons/menu-button.png')}
            onPress={navigation.openDrawer}
          />
        ),
        headerRight: () => (
          <Icon
            source={require('../assets/icons/cart.png')}
            onPress={() => navigation.navigate('Cart')}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icons}
              source={require('../assets/icons/home.png')}
            />
          ),
          title: 'Shopping App',
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icons}
              source={require('../assets/icons/wishlist.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icons}
              source={require('../assets/icons/cart.png')}
            />
          ), headerRight: () => (
            <Icon
              source={require('../assets/icons/wishlist.png')}
              onPress={()=>navigation.navigate("Wishlist")}
            />)
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icons}
              source={require('../assets/icons/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icons: {
    height: 30,
    width: 30,
    tintColor: 'white',
    margin: 10,
  },
});
export default BottomTabNavigator;