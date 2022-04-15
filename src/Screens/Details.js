import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import plantActions from '../redux/actions/plantActions'

export default function Details(props) {

    const {id} = props.route.params
    console.log(id)

    const dispatch = useDispatch()
    const plant = useSelector(state => state.plantReducer.plant)

    useEffect(()=> { 
        dispatch(plantActions.fetchPlant(id))
        dispatch(plantActions.fetchPlants())
      },[])

      console.log(plant)

  return (
    <View>
        <Image
        style={styles.imgCardDetail}
        source={{uri:`https://lush-plants.herokuapp.com/img/plants/${plant.images}`}}
        />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantDesc}>{plant.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imgCardDetail: {
        width: '100%',
        height: 270,
        
    },
    plantName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    plantDesc: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
        padding: 10,
        fontStyle: 'italic',
    },
})