import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../../components/CustomInput'
import CustomButtton from '../../../components/CustomButton'
import Strings from '../../../shared/constants/Strings'
import Globalstyles from '../../../themes/GLobalStyles'
import styles from './style'

export default function ForgetPassword() {
  return (
    <View style={[Globalstyles.margin_20, styles.container]}>
      <CustomInput placeholder={Strings.emailorphone}/>
      <CustomButtton title={Strings.getotp} screen={"H"}/>
    </View>
  )
}