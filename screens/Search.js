import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View>
      <TextInput placeholder='test'></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
    }
})