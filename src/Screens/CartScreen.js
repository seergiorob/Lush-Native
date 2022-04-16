import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../redux/actions/cartActions'

export default function CartScreen() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)
    
  return (
    <ScrollView style={styles.cartWrapper}>
        {cart.map((item) => {
            return (
            <View key={item.plant._id}>
            <Image
            style={styles.imageCart}
            source={{uri:`https://lush-plants.herokuapp.com/img/plants/${item.plant.images}`}}
            />
            <Text style={styles.textList}>{item.plant.name}</Text>
                <View style={styles.groupButtons}>
                    <Button
                    onPress={() => dispatch(cartActions.updateCart(item.plant._id, false))}
                    title="-"
                    ></Button>
                    <Button
                    title={'Delete'}
                    onPress={() => dispatch(cartActions.removeFromCart(item.plant._id))}
                    ></Button>
                    <Button
                    onPress={() => dispatch(cartActions.updateCart(item.plant._id, true))}
                    title="+"
                    ></Button>
                </View>
            </View>
            )})}
            <View style={styles.groupButtons}>
                <Button
                onPress={() => dispatch(cartActions.clearCart())}
                title="Clear Cart"
                ></Button>
                <Button
                title="Checkout"
                ></Button>
            </View>
            <Text style={styles.textList}>Total: {total}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textList: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    cartWrapper: {
        backgroundColor: 'whitesmoke',
        minHeight: '100%',
    },
    imageCart: {
        width: '100%',
        height: 150,
    },
    groupButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
})