import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Icon = ({source, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.icon} source={source} />
    </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'green'},
        headerTitleStyle: {color: 'white', fontSize: 30},
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={navigation.openDrawer}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/cart.png')}
              />
            </TouchableOpacity>
          ),
          headerLeft:()=> (
            <Icon
              source={require('../assets/icons/menu-button.png')}
              onPress={navigation.openDrawer}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Update Profile"
        component={UpdateProfile}
        options={{
          title: 'Update Profile',
          headerStyle: {backgroundColor: 'green'},
          headerTitleStyle: {color: 'white', fontSize: 30},
          headerTitleAlign: 'center',
          headerLeft:()=>  <Icon
          source={require('../assets/icons/menu-button.png')}
          onPress={navigation.openDrawer}
        />
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  icon: {
    height: 35,
    width: 35,
    tintColor: 'white',
    marginHorizontal: 10,
  },
});
