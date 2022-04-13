import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HeroBlog from '../Components/HeroBlog/HeroBlog'
import BlogsComponent from '../Components/Blog/BlogsComponents'

export default function Blog() {
  return (
    <ScrollView style={styles.container}>
        <HeroBlog/>
        <BlogsComponent/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
    },
})