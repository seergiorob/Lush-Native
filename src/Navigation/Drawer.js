import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator()

    return (
    
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home} />
            {/* <Drawer.Screen name='Shop' component={ShopStackNavigation} /> */}
            {/* <Drawer.Screen name='Cart' component={Cart} /> */}
            {/* <Drawer.Screen name='Blog' component={Blog} /> */}
        </Drawer.Navigator>
)
}

export default DrawerNavigator