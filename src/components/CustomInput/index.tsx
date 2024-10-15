import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import Globalstyles from '../../themes/GLobalStyles';
import FontSize from '../../themes/fontSize';
const CustomInput = ({placeholder}) => {
  return (
    <View>
      <TextInput
        style={[
          Globalstyles.margin_10,
          styles.input,
          Globalstyles.padding_10,
          FontSize.fontsize_16,
        ]}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;
