import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpComponent from '../Components/SignUp/SignUpComponent'

export default function SignUpScreen() {
  return (
    <View style={styles.signUpWrapper}>
        <SignUpComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
  signUpWrapper: {
    width: '100%',
  }
})