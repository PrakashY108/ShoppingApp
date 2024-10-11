import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButtton from '../components/CustomButton'
import Strings from '../shared/constants/Strings'

export default function ForgetPasswordScreen() {
  return (
    <View style={styles.container}>
      <CustomInput placeholder={Strings.emailorphone}/>
      <CustomButtton title={Strings.getotp} screen={"H"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:20
  }
})