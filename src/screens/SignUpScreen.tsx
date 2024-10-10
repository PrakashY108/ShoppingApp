import { Text, TouchableOpacity, View, StyleSheet,Image} from 'react-native'
import React from 'react'
import CustomButtton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'

export default function SignUpConatiner() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../assets/appLogo.png")} />
          </View>
      <CustomInput placeholder={"Name"} />
      <CustomInput placeholder={"Email"} />
      <CustomInput placeholder={"Username"} />
      <CustomInput placeholder={"Password"} />
      <CustomInput placeholder={" Custom Password"} />
      <CustomButtton title={"Sign Up"} screen={"Main"} />
      <View style={styles.forgot}>
        <Text style={styles.txt}>Already User?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={[styles.txt, { color: "blue" }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignContent: "center",
    backgroundColor:"white",
    alignItems: 'center'
  },
  forgot: {
    flexDirection: "row",
    gap: 7
  },
  txt: {
    color: "black",
    fontSize: 13
  },
  logo:{
    height:150,
    width:150,
  },
  logocontainer:{
    height:180,
    width:180,
    borderRadius:90
  }
})