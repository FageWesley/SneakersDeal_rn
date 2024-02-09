import { View, Text } from 'react-native'
import React from 'react'
import {Svg, Path} from 'react-native-svg'

export default function XMark() {
  return (
    <View>
        <Svg width="100" height="100" viewBox="1 0 2700 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff"/>
        </Svg>
    </View>
  )
}