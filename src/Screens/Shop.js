import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HeroShop from '../Components/HeroShop/HeroShop'
import PlantsCards from '../Components/ShopPlantCards/PlantsCards'

export default function Shop() {
  return (
    <ScrollView style={styles.shopWrapper}>
      <HeroShop/>
      <PlantsCards/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  shopWrapper: {
    width: '100%'
  },
})