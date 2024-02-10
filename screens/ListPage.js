import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E5E5',
        alignItems:'center',
        justifyContent:'center',
    }
})