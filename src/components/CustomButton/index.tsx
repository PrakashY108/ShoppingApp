import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Globalstyles from '../../themes/GLobalStyles';
import FontSize from '../../themes/fontSize';
export default function CustomButtton({title, screen}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View
          style={[
            Globalstyles.marginHorizontal_30,
            Globalstyles.backgroundColor_green,
            styles.btn,
          ]}>
          <Text
            style={[
              Globalstyles.fontColor_white,
              styles.btnText,
              FontSize.fontsize_30,
            ]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
