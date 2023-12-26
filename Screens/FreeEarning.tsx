import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList> 

const FreeEarning = ({navigation}:NavigationProps) => {
  return (
    <View style={styles.container}>
      {/* <TopBar
        leftIcon={require('../assets/Images/backbtn.png')}
        title='Free Earning'
        leftIconPressed={()=>{
          navigation.pop()
        }}
        rightIcon={require('../assets/Images/earning.png')}
      /> */}
      <Text>FreeEarning</Text>
      {/* <BottomBar navigation={navigation} route={route}/> */}
    </View>
  )
}

export default FreeEarning

const styles = StyleSheet.create({
  container: {
    flex: 1
},
})