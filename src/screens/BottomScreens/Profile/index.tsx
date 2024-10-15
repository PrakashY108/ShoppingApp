import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationRoutes from '../../../shared/constants/NavigationRoutes'
import Images from '../../../assets/Index'
import styles from './style'
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