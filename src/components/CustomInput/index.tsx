import { View, TextInput } from 'react-native';
import React from 'react';
import styles from './style';
const CustomInput = ({placeholder}) => {
  return (
    <View>
     <TextInput 
     style={styles.input}
     placeholder={placeholder} />
    </View>
  )
}

export default CustomInput;
