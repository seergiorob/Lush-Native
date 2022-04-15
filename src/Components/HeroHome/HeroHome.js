import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native'
import React from 'react'


export default function HeroHome( {navigation} ) {

  return (
    <View style={styles.heroHome}>
        <ImageBackground 
        source={require('../../../assets/img/hero.jpg')}
        resizeMode="cover"
        style={styles.image}
        >
        <Text style={styles.textHome}> Lush. </Text>
        <Text style={styles.textHome2}> Satisfying the human need to be connected to nature. </Text>
        

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    heroHome: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
    },
    image: {
        marginTop: -50,
        flex: 1,
        width: '100%',
        height: 600,
        justifyContent: 'center',
    },
    textHome: {
        fontSize: 40,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    },
    textHome2: {
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        padding: 14,
    }

})