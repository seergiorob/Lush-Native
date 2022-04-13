import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import HeroHome from '../Components/HeroHome/HeroHome'
import Carousel from '../Components/Carousel/Carousel'
import HomeBlogComponent from '../Components/HomeBlog/HomeBlogComponent'

export default function Home( { navigation } ) {
  return (
    <ScrollView style={styles.homeWrapper}>
        <HeroHome navigation={navigation}/>
        <Carousel/>
        <HomeBlogComponent/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    homeWrapper: {
        backgroundColor: 'white',
    }
})