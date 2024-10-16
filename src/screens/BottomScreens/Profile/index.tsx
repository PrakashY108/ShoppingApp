import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../../assets/Index';
import styles from './style';
const ProfileScreen = () => {
  
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.profileimg} source={Images.user} />
        <Text style={styles.txt}>Username</Text>
      </View>
      <View>
        
      </View>
    </>
  );
};
export default ProfileScreen;
