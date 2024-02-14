import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import slides from '../slides'
import CarouselCard from './CarouselCard'


export default function MainCarousel() {
  return (
    <View>
        <Carousel
            containerCustomStyle={{overflow:'visible' }}
            data={slides}
            renderItem={({item}) => <CarouselCard item={item}/>}            
            firstItem={1}
            inactiveSlideScale={0.75} //size of the inactive slides
            inactibeslideOpacity={0.77} //opacity of the inactive slides
            sliderWidth={400} //actuall slide width
            itemWidth={260} //Card width
            slideStyle={{display:'flex',alignItems:'center'}}
        />
    </View>
  )
}

const styles = StyleSheet.create({})