import { FlatList, Image, ImageURISource, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'

// navigation
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
import CoursesDetail from './CoursesDetail'
import { NavigationContainer } from '@react-navigation/native'
import Courses from './Courses'

// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>


const Stack = createNativeStackNavigator()




const PaidCourses = ({ navigation }: NavigationProps) => {
  return (

    // Shopify
    // Amazon
    // Digital marketing
    // Ebay
    // Payment gateway
    <View></View>
    
  )
}

export default PaidCourses

const styles = StyleSheet.create({
  
})