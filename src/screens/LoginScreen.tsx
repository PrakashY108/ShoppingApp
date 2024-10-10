import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButtton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

export default function LoginContainer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/appLogo.png")} />
      <Text style={styles.heading}>Welcome Back!</Text>
      <CustomInput placeholder={"Enter Username"} />
      <CustomInput placeholder={"Enter Password"} />
      <View style={styles.forgot}>
        <Text style={styles.txt}>Forgot Password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}><Text style={[styles.txt, { color: "blue" }]}>Reset password</Text>
        </TouchableOpacity>
      </View>
      <CustomButtton title={"Login "} screen={"DrawerNavigation"} />
      <View style={styles.forgot}>
        <Text style={styles.txt}>Don't have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}><Text style={[styles.txt, { color: "blue" }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',

  }, logo: {
    height: 150,
    width: 150,
    marginBottom: 50,
  },

  forgot: {
    flexDirection: "row",
    gap: 7
  },
  txt: {
    color: "black",
    fontSize: 13
  },
  heading: {
    fontSize: 35,
    color: "green",
    padding: 10
  }

})