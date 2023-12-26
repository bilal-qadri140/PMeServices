import { FlatList, Image, ImageURISource, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'

// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>

// data items type
type ItemData = {
  id: string;
  title: string;
  description: string;
  price: number;
  imgURL: ImageURISource
};

// data 
const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Amazon',
    description: '',
    price: 12,
    imgURL: require('../assets/Images/amazon.png')
  },
  {
    id: '2',
    title: 'Shopify',
    description: '',
    price: 15,
    imgURL: require('../assets/Images/shopify.png')
  },
  {
    id: '3',
    title: 'Ebay',
    description: '',
    price: 12,
    imgURL: require('../assets/Images/ebay.jpg')
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: '',
    price: 15,
    imgURL: require('../assets/Images/digital.jpg')
  },
  {
    id: '5',
    title: 'Payment Gateway',
    description: '',
    price: 10,
    imgURL: require('../assets/Images/payment.jpg')
  },
];


const PaidCourses = ({ navigation }: NavigationProps) => {
  return (

    // Shopify
    // Amazon
    // Digital marketing
    // Ebay
    // Payment gateway

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.list}>
              <Image style={styles.img} source={item.imgURL} />
              <Text>{item.title}</Text>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default PaidCourses

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:10,
backgroundColor:'#ed4'
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
})