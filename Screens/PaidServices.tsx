import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>
const PaidServices = ({ navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      {/* <TopBar
        leftIcon={require('../assets/Images/backbtn.png')}
        leftIconPressed={() => {
          navigation.pop()
        }}
        title='Paid Services'
        rightIcon={require('../assets/Images/home.png')}
      /> */}
      <Text>PaidServices</Text>
      {/* <BottomBar navigation={navigation} route={route}/> */}
    </View>
  )
}

export default PaidServices

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})