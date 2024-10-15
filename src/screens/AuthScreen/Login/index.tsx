import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButtton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import NavigationRoutes from '../../../shared/constants/NavigationRoutes';
import styles from './style';
import Strings from '../../../shared/constants/Strings';
import Images from '../../../assets/Index';
import Globalstyles from '../../../themes/GLobalStyles';
import FontSize from '../../../themes/fontSize';
import Colors from '../../../themes/Colors';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View
      style={[
        Globalstyles.container,
        styles.container,
        Globalstyles.backgroundColor_white,
        Globalstyles.paddingVertical_10,
      ]}>
      <Image style={styles.logo} source={Images.logo} />
      <Text style={[Globalstyles.marginVertical_20, FontSize.fontsize_30]}>
        {Strings.greet}
      </Text>
      <CustomInput placeholder={Strings.username} />
      <CustomInput placeholder={Strings.password} />
      <View style={[Globalstyles.rowCenter, styles.forgot]}>
        <Text style={[FontSize.fontsize_14]}>{Strings.donthaveaccount}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.forgetPassword)}>
          <Text style={[styles.link]}>{Strings.resetpassword}</Text>
        </TouchableOpacity>
      </View>
      <CustomButtton
        title={'Login '}
        screen={NavigationRoutes.DrawerNavigation}
      />
      <View style={[Globalstyles.rowCenter, styles.forgot]}>
        <Text style={FontSize.fontsize_14}>{Strings.forgetpassword}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.signUp)}>
          <Text style={[styles.link]}>{Strings.signup}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
