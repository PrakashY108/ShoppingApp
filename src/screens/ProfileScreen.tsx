import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationRoutes from '../shared/constants/NavigationRoutes'
import Images from '../assets/Index'

const ProfileScreen = () => {
  const Card = ({ title }) => {
    return (<View style={styles.box}>
      <TouchableOpacity><Text style={{ fontSize: 30, paddingHorizontal: "10%", color: "black" }}>{title}</Text></TouchableOpacity>
    </View>)
  }
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.profileimg} source={Images.user} />
        <Text style={styles.txt}>Username</Text>
      </View>
      <View>
        <Card title={"Orders"} />
        <Card title={"History"} />
        <Card title={"Privacy Policies"} />
        <Card title={"Settings"} />
      </View>
    </>
  )
}

export default ProfileScreen
const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: "95%",
    height: 200,
    padding: 5,
    alignItems: "center",
  },
  profileimg: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderColor: "black",
    borderWidth: 2
  },
  txt: {
    fontSize: 40,
    color: "green"
  },
  box: {
    height: 50,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "2%",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

  }
});