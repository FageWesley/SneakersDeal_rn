import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomBar from './components/BottomBar'
import TopBar from './components/TopBar'


export default function App() {
  return (
    <View style={styles.container}>
    <TopBar ></TopBar>
      <BottomBar></BottomBar>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: '#fff',
  }
})