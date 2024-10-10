import { View, Text,Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View>
      <Image source={require("../assets/appLogo.png")}/>
    </View>
  )
}

export default SplashScreen;
