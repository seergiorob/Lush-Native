import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import plantActions from '../../redux/actions/plantActions'
import cartActions from '../../redux/actions/cartActions'
import { useNavigation } from "@react-navigation/native"

const PlantsCards = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch()
    const allPlants = useSelector(state => state.plantReducer.allPlants)
    const cart = useSelector(state => state. cartReducer.cart)

    useEffect(() => {
        dispatch(plantActions.fetchPlants())
    }, [])

    
    console.log(cart)

  return (
    <View style={styles.wrapper}>

        <View className="wrapperMediumSize">
        {allPlants.map((item) => {
          return (
            <View style={styles.cardWrapper}>
              <Image 
              style={styles.imgCard} 
              source={{uri:`https://lush-plants.herokuapp.com/img/plants/${item.images}`}}
              />
              <View style="cardTextContent">
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>Price: $ {item.price}</Text>

                <Button style={styles.btnCardC} 
              title={'MORE INFORMATION'} 
              onPress={()=> navigation.navigate('Details', {id:item._id
                    })}></Button>

                <Button
                title={'Add to Cart'}
                onPress={() => dispatch(cartActions.addToCart(item))}
                >

                </Button>
                
                {/* <Button variant="text">
                  <LinkRouter style="linkCard" to={`/Details/${item._id}`}>DETAILS</LinkRouter>
                </Button> */}

                {/* <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon /></Button> */}
              </View>
            </View>
           ) 
         })} 
      </View>

    </View>
  )
}

export default PlantsCards

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'whitesmoke',
    },
    cardWrapper: {
        margin: 20,
        width: 370,
        height: 450,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    imgCard: {
        width: 370,
        height: 270,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    cardPrice: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },



})