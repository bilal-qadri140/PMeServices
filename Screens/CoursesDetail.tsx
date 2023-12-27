import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>

import { DATA } from './Courses'
// import { useRoute } from '@react-navigation/native'

const CoursesDetail = ({navigation,route}:NavigationProps) => {
  const id = route.params
  console.log(id);
  console.log(DATA[0].types);
  
  return (
    <View>
      <Text> Course Detaial Screen {} </Text>
    </View>
  )
}

export default CoursesDetail

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})