import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>
const OurProducts = ({navigation}:NavigationProps) => {
  return (
    <View style={styles.container}>
      
      <Text>OurProducts</Text>
      
    </View>
  )
}

export default OurProducts

const styles = StyleSheet.create({
  container: {
    flex: 1
},
})