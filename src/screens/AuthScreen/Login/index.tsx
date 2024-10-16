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

export default function Login() {
  const navigation = useNavigation();

  return (
    <View
      style={[
        Globalstyles.container,
        styles.container,
        Globalstyles.backgroundColor_white,
      ]}>
      <View style={styles.header}>
        <Text style={[styles.headertitle, Globalstyles.fontColor_white]}>
          {Strings.login}
        </Text>
      </View>
      <Image style={styles.logo} source={Images.logo} />
      <Text style={[Globalstyles.marginVertical_20, FontSize.fontsize_30]}>
        {Strings.greet}
      </Text>
      <CustomInput search={false} placeholder={Strings.username} />
      <CustomInput search={false} placeholder={Strings.password} />
      <View style={[Globalstyles.rowCenter, styles.forgot]}>
        <TouchableOpacity 
          onPress={() => navigation.navigate(NavigationRoutes.forgetPassword)}>
          <Text style={[styles.link]}>{Strings.forgetpassword}</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical:15}}>

      <CustomButtton
        title={Strings.login}
        screen={NavigationRoutes.DrawerNavigation}
      />
      </View>
      <View style={[Globalstyles.rowCenter,{gap:10}]}>
        <Text style={FontSize.fontsize_14}>{Strings.donthaveaccount}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.signUp)}>
          <Text style={[styles.link]}>{Strings.signup}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
