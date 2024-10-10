import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButtton from '../components/CustomButton'

export default function ForgetPasswordScreen() {
  return (
    <View style={styles.container}>
      <CustomInput placeholder={"Enter Email or Phone Number"}/>
      <CustomButtton title={"Get OTP"} screen={"H"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:20
  }
})