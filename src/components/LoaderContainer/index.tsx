import {Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './style';
import Globalstyles from '../../themes/GLobalStyles';
import FontSize from '../../themes/fontSize';
import Strings from '../../shared/constants/Strings';

export default function LoaderContainer() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={'green'} />
      <Text style={[Globalstyles.fontColor_green, FontSize.fontsize_22]}>
        {Strings.loader}
      </Text>
    </View>
  );
}
