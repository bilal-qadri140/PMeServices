import { FlatList, Image, ImageURISource, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
    description: 'Unlock the secrets of successful selling on Amazon with our comprehensive course, guiding you through proven strategies for product selection.',
    price: 11.9,
    imgURL: require('../assets/Images/amazon.png')
  },
  {
    id: '2',
    title: 'Shopify',
    description: 'Master the art of e-commerce on Shopify with our expert-led course, empower entrepreneurs in building and scaling their online stores.',
    price: 14.5,
    imgURL: require('../assets/Images/shopify.png')
  },
  {
    id: '3',
    title: 'Ebay',
    description: 'Elevate your eBay selling game with our dynamic course, equipping you with essential skills in product listing optimization.',
    price: 12.6,
    imgURL: require('../assets/Images/ebay.jpg')
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'Transform your digital presence with our comprehensive digital marketing course, offering hands-on expertise in SEO. ',
    price: 14.9,
    imgURL: require('../assets/Images/digital.jpg')
  },
  {
    id: '5',
    title: 'Payment Gateway',
    description: 'Navigate the world of seamless transactions with our payment gateway course, providing in-depth insights into secure online payment processing.',
    price: 9.9,
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
        renderItem={({ item }) => {
          return (
            <View style={styles.list}>
              <Image style={styles.img} source={item.imgURL} />
              <View style={styles.desContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descText}>{item.description}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{'$' + (item.price)}</Text>
                  <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                    <Text style={styles.btnText}>Buy now</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    marginBottom: 30,
    backgroundColor: '#fff',
    // paddingRight: 8,

  },
  img: {
    width: 140,
    height: 160,
    // resizeMode: 'cover',
  },
  desContainer: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 6,
    // backgroundColor:'#ff4'
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#54408C',
    paddingBottom: 8,
  },
  descText: {
    marginRight: 8,
    lineHeight: 15,
    fontWeight: '400',
    fontSize: 16,
    color: '#2f4f4f',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'green'
  },
  priceContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    right: 0,
    width: 240,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#54408C',
    position: 'absolute',
    right: 20,
    paddingHorizontal: 40,
    paddingVertical: 2,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800'
  }
})