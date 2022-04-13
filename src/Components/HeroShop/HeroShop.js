import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function HeroShop() {
  return (
    <View style={styles.HeroShop}>
        <ImageBackground 
        source={require('../../../assets/img/heroShop.jpg')}
        resizeMode="cover"
        style={styles.imageShop}
        >
        <Text style={styles.textShop}> Shop </Text>
        

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    heroShop: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
    },
    imageShop: {
        marginTop: -50,
        width: '100%',
        height: 600,
        justifyContent: 'center',
    },
    textShop: {
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