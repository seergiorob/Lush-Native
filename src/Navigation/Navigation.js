import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Shop from '../Screens/Shop';
import Blog from '../Screens/Blog';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import Details from '../Screens/Details';


import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileStackNavigator = createNativeStackNavigator();

function ProfileStack() {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen
            name="ProfileScreen"
            component={SignInScreen}
            options={{
                headerShown: false,
            }}
            />
            <ProfileStackNavigator.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
                headerShown: false,
            }}
            />
        </ProfileStackNavigator.Navigator>
    )
}


const ShopStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <ShopStackNavigator.Navigator>
            <ShopStackNavigator.Screen
            name="ShopScreen"
            component={Shop}
            options={{
                headerShown: false,
            }}
            />
            <ShopStackNavigator.Screen
            name="Details"
            component={Details}
            />

        </ShopStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#083900',
            // tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'whitesmoke',
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                borderRadius: 25,
                height: 90,
            }
        }}
        
        >
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="home" size={30} color="black" /> ),
                headerShown: false,
            }}
            />
            
            <Tab.Screen name="Shop" component={MyStack} 
            options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="shopping-cart" size={30} color="black" /> ),
                headerShown: false, 
            }}
            />
            
            <Tab.Screen name="Blog" component={Blog} 
            options={{
                tabBarIcon: ({color, size}) => (<FontAwesome name="file-text" size={30} color="black" /> ),
                headerShown: false, 
            }}
            />
            <Tab.Screen name="Profile" component={ProfileStack} 
            options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="account-circle" size={30} color="black" /> ),
                headerShown: false, 
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}