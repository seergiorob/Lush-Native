import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import SignInComponent from '../Components/SignIn/SignInComponent'

export default function SignInScreen() {
  return (
    <ScrollView style={styles.signInWrapper}>
        <SignInComponent/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  signInWrapper: {
    width: '100%'
  },
})