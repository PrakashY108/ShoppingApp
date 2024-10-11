import { Text, TouchableOpacity, View, StyleSheet,Image} from 'react-native'
import React from 'react'
import CustomButtton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import Images from '../assets/Index'
import Strings from '../shared/constants/Strings'
import NavigationRoutes from '../shared/constants/NavigationRoutes'

export default function SignUpConatiner() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={Images.logo} />
          </View>
      <CustomInput placeholder={Strings.name} />
      <CustomInput placeholder={Strings.email} />
      <CustomInput placeholder={Strings.username} />
      <CustomInput placeholder={Strings.password} />
      <CustomInput placeholder={Strings.confirmPassword} />
      <CustomButtton title={"Sign Up"} screen={NavigationRoutes.main} />
      <View style={styles.forgot}>
        <Text style={styles.txt}>Already User?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(NavigationRoutes.login)}><Text style={[styles.txt, { color: "blue" }]}>Login</Text>
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