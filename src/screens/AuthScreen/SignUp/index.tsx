import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../assets/Index';
import Strings from '../../../shared/constants/Strings';
import NavigationRoutes from '../../../shared/constants/NavigationRoutes';
import Globalstyles from '../../../themes/GLobalStyles';
import styles from './style';
import FontSize from '../../../themes/fontSize';
export default function SignUpConatiner() {
  const navigation = useNavigation();
  return (
    <View
      style={[
        Globalstyles.container,
        styles.container,
        Globalstyles.padding_20,
        Globalstyles.backgroundColor_white,
      ]}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={Images.logo} />
      </View>
      <CustomInput search={false} placeholder={Strings.name} />
      <CustomInput search={false} placeholder={Strings.email} />
      <CustomInput search={false} placeholder={Strings.username} />
      <CustomInput search={false} placeholder={Strings.password} />
      <CustomInput search={false} placeholder={Strings.confirmPassword} />
      <CustomButton title={'Sign Up'} screen={NavigationRoutes.main} />
      <View style={[Globalstyles.rowCenter, styles.forgot]}>
        <Text style={[Globalstyles.fontColor_black, FontSize.fontsize_16]}>
          {Strings.alreadyuser}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.login)}>
          <Text style={[FontSize.fontsize_18,{color:"blue"}]}>
            {Strings.login}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
