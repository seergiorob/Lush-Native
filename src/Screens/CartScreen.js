import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../redux/actions/cartActions'

export default function CartScreen() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)
    
  return (
    <View style={styles.cartWrapper}>
        {cart.map((item) => {
            return (
            <>
            <Text style={styles.textList}>{item.plant.name}</Text>

            <Button
            onPress={() => dispatch(cartActions.updateCart(item.plant._id, true))}
            title="+"

            ></Button>
            <Button
            onPress={() => dispatch(cartActions.updateCart(item.plant._id, false))}
            title="-"

            ></Button>
            <Button
            title={'Delete'}
            onPress={() => dispatch(cartActions.removeFromCart(item.plant._id))}
            ></Button>
            </>
            )})}
            <Text style={styles.textList}>Total: {total}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textList: {
        fontSize: 25,
        color: 'black',
    },
    cartWrapper: {
        backgroundColor: 'whitesmoke',
        minHeight: '100%',
    }
})