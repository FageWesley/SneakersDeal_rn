import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
 } from 'react-native'
import React from 'react'


export default function TopBar() {
  return (
    <View style={styles.top}>
      <Image source={require('../assets/images/Logo.png')} style={styles.logo}></Image>
      <Text style={styles.title}>SneakersDeal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 90,
    position: 'fixed',
    top: 0,
    paddingBottom: 10,
    marginBottom: 42,
    backgroundColor: '#212529',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logo:{
    width: 30,
    height: 30,
    marginLeft: 10,
    
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    
  }
})
