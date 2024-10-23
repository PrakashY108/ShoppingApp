import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/BottomScreens/Home';
import {useNavigation} from '@react-navigation/native';
import CartScreen from '../screens/BottomScreens/Cart';
import ProfileScreen from '../screens/BottomScreens/Profile';
import WishlistScreen from '../screens/BottomScreens/Wishlist';
import Images from '../assets/Index';
import NavigationRoutes from '../shared/constants/NavigationRoutes';
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const Icon = ({source, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{height: 26, width: 26, margin: 20}}
          source={source}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor:Colors.lightblue},
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: Colors.grey,
        headerTitleStyle: {color:Colors.black, fontSize: 30},
        tabBarStyle: {
          backgroundColor: 'white',
          height: 65,
          borderRadius: 200,
          bottom: 5,
          position: 'absolute',
          marginHorizontal: 10,
        },
        headerLeft: () => (
          <Icon source={Images.menu} onPress={navigation.openDrawer} />
        ),
        headerRight: () => (
          <Icon
            source={Images.cart}
            onPress={() => navigation.navigate(NavigationRoutes.cart)}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
        },
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
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: () => (
            <Image style={styles.icons} source={Images.heart} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => <Image style={styles.icons} source={Images.cart} />,
          headerRight: () => (
            <Icon
              source={Images.heart}
              onPress={() => navigation.navigate(NavigationRoutes.wishList)}
            />
          ),
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
    margin: 20,
  },
});
export default BottomTabNavigator;
