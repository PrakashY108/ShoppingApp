import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import FontSize from '../../themes/fontSize';
import Images from '../../assets/Index';
const CustomInput = ({placeholder, search}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, FontSize.fontsize_16]}
        placeholder={placeholder}
      />
      {search ? (
        <TouchableOpacity>
          <Image style={styles.icon} source={Images.search} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomInput;
