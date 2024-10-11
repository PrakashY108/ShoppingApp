import { StyleSheet,View,Image,Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import Images from '../assets/Index'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../themes/ResponsiveDimensions'
import { useNavigation } from '@react-navigation/native'
import NavigationRoutes from '../shared/constants/NavigationRoutes'

export default function SplashScreen() {
  const navigation= useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate(NavigationRoutes.login)
    }, 3000);
  },[])
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Images.logo}/>
      <ActivityIndicator size={"large"} color={"green"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:SCREEN_HEIGHT,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white"
  },
  img:{
    height:300,
    width:300,
    resizeMode:"contain",
    marginBottom:40
  },

})