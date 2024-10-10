import {Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
export default function CustomButtton({title,screen}) {
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity onPress={()=>
           navigation.navigate(screen)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>{title}</Text>
                </View>
            </TouchableOpacity >
    </View>
  )
}
