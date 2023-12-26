import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
    return (
        <View></View>
        // <Home/>
        // <NavigationContainer >
        //     <Stack.Navigator>
        //         {/* <Stack.Screen
        //             name='Home'
        //             component={Home}
        //             options={{headerShown:true}}>
        //         </Stack.Screen> */}
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})