import { Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './style'

export default function LoaderContainer() {
  return (
    <View style={styles.loader}>
        <ActivityIndicator size={"large"} color={"green"}/>
      <Text style={styles.txt}>Loading Please Wait...</Text>
    </View>
  )
}