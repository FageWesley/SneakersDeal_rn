import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonsIcons from 'react-native-vector-icons/Ionicons'

export default function Infos() {
  return (
    <View style={styles.container}>
        <IonsIcons name="alert-circle-outline" size={50} color={"black"} style={{alignSelf: "center"}}/>
      <Text style={{fontSize:30, justifyContent:'center'}}>Sorry this page is under maintenance</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    }
})