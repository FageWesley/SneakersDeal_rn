import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductPage({item}) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})