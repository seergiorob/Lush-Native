import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function HeroBlog() {
  return (
    <View style={styles.heroBlog}>
        <ImageBackground 
        source={require('../../../assets/img/heroBlog.jpg')}
        resizeMode="cover"
        style={styles.imageBlogs}
        >
        <Text style={styles.textBlog}> Blog </Text>
        

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    heroBlog: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
    },
    imageBlogs: {
        marginTop: -50,
        width: '100%',
        height: 600,
        justifyContent: 'center',
    },
    textBlog: {
        fontSize: 40,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    }
})