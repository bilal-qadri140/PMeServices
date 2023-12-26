import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Icons
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome6'

// Bottom Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Screen for navigation
import Home from '../Screens/Home';
import NewArival from '../Screens/NewArival';
import PaidCourses from '../Screens/PaidCourses';
import PaidServices from '../Screens/PaidServices';
import FreeEarning from '../Screens/FreeEarning';
import OurServices from '../Screens/OurServices';
import OurProducts from '../Screens/OurProducts';

export type RootStackParamList = {
  Home: undefined,
  NewArival: undefined,
  PaidCourses: undefined,
  PaidServices: undefined,
  FreeEarning: undefined,
  OurServices: undefined,
  OurProducts: undefined,
}

const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          height: 60,
          backgroundColor: '#54408C',
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 26,
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
        },
        tabBarLabelStyle:{
          fontWeight:'800',
          fontSize:14
        },
        headerTitleAlign:'center',
        tabBarActiveBackgroundColor:'#fff',
        tabBarInactiveBackgroundColor:'#54408C',
        tabBarInactiveTintColor:'#fff',
        tabBarActiveTintColor:'#54408C'
      }}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' size={size} color={color} />
          ),
          tabBarLabel:'Home',
          headerShown:false
        }} />
        <Tab.Screen name='PaidCourses' component={PaidCourses} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='code' size={size} color={color} />
          ),
          tabBarLabel:'Courses',
          headerTitle:'Courses'
        }}/>
        <Tab.Screen name='FreeEarning' component={FreeEarning} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon2 name='sack-dollar' size={size} color={color} />
          ),
          tabBarLabel:'Earning',
          headerTitle:'Free Earning'
        }}/>
        <Tab.Screen name='OurServices' component={OurServices} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='briefcase' size={size} color={color} />
          ),
          tabBarLabel:'Services',
          headerTitle:'Our Servises'
        }}/>
        <Tab.Screen name='OurProducts' component={OurProducts} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='tag' size={size} color={color} />
          ),
          tabBarLabel:'Products',
          headerTitle:'Our Products'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App

const styles = StyleSheet.create({})