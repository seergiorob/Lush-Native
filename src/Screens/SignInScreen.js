import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import SignInComponent from '../Components/SignIn/SignInComponent'

export default function SignInScreen() {
  return (
    <ScrollView>
        <SignInComponent/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})