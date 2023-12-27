import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ImageURISource } from 'react-native'
import React from 'react'
import CoursesDetail from './CoursesDetail';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import OurServices from './OurServices';
import { RootStackParamList } from '../src/App';

// responsive dimensions 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

type NavigationProps = NativeStackScreenProps<RootStackParamList>

// data items type
type ItemData = {
    id: string;
    title: string;
    description: string;
    price: number;
    imgURL: ImageURISource;
    types: {
        id: string;
    }
};

import { CourseData } from './Constants/CoursesData';

// data 
export const DATA: ItemData[] = [
    {
        id: '1',
        title: 'Amazon',
        description: 'Unlock the secrets of successful selling on Amazon with our comprehensive course, guiding you through proven strategies for product selection.',
        price: 11.9,
        imgURL: require('../assets/Images/amazon.png'),
        types: {
            id: ''
        }
    },
    {
        id: '2',
        title: 'Shopify',
        description: 'Master the art of e-commerce on Shopify with our expert-led course, empower entrepreneurs in building and scaling their online stores.',
        price: 14.5,
        imgURL: require('../assets/Images/shopify.png'),
        types: {
            id: ''
        }
    },
    {
        id: '3',
        title: 'Ebay',
        description: 'Elevate your eBay selling game with our dynamic course, equipping you with essential skills in product listing optimization.',
        price: 12.6,
        imgURL: require('../assets/Images/ebay.jpg'),
        types: {
            id: ''
        }
    },
    {
        id: '4',
        title: 'Digital Marketing',
        description: 'Transform your digital presence with our comprehensive digital marketing course, offering hands-on expertise in SEO. ',
        price: 14.9,
        imgURL: require('../assets/Images/digital.jpg'),
        types: {
            id: ''
        }
    },
    {
        id: '5',
        title: 'Payment Gateway',
        description: 'Navigate the world of seamless transactions with our payment gateway course, providing in-depth insights into secure online payment processing.',
        price: 9.9,
        imgURL: require('../assets/Images/payment.jpg'),
        types: {
            id: ''
        }
    },
    {
        id: '6',
        title: 'Daraz E-Commerce',
        description: 'Embark on a Daraz e-commerce journey with our specialized course, offering insights into product listing optimization Daraz platform.',
        price: 9.9,
        imgURL: require('../assets/Images/daraz.png'),
        types: {
            id: ''
        }
    },
];

const Courses = ({ navigation }: NavigationProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Our Paid Courses</Text>
            </View>
            <FlatList
                data={CourseData}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.flatList}>
                            <TouchableOpacity
                                style={styles.list}
                                activeOpacity={0.7}
                                onPress={() => {
                                    // navigation.navigate('CoursesDetail', { id: index })
                                }}  
                            >
                                <Image style={styles.img} source={item.imgURL} />
                                <View style={styles.desContainer}>
                                    <Text style={styles.titleText}>{item.name}</Text>
                                    {/* <Text style={styles.descText}>{item.description}</Text> */}

                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceText}>{'$' + (item.price)}</Text>
                                        <TouchableOpacity
                                            style={styles.btn}
                                            activeOpacity={0.6}
                                            onPress={() => {
                                                navigation.navigate('CoursesDetail', { id: 3 })
                                            }}>
                                            <Text style={styles.btnText}>Explore More...</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default Courses

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headingContainer: {
        backgroundColor: '#54408C',
        width: '100%'
    },
    headingText: {
        fontWeight: '900',
        fontSize: responsiveFontSize(3.5),
        textAlign: 'center',
        color: '#fff',
        marginVertical: 14
    },
    flatList: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    list: {
        height: responsiveHeight(35),
        width: '90%',
        marginBottom: responsiveHeight(4),
        backgroundColor: '#fff',
        flex: 1,
        borderRadius:16,
        borderWidth:1.5,
        borderColor:'#696969'
    },
    img: {
        width: '100%',
        height: '60%',
        borderColor: '#54408C',
        flex: 1,
        alignSelf: 'center',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
    },
    desContainer: {
        // flex: 1,
        // marginLeft: 10,
    },
    titleText: {
        fontSize: responsiveFontSize(3),
        fontWeight: '700',
        color: '#54408C',
        paddingBottom: 6,
        marginTop:12,
        marginLeft:20,
    },
    descText: {
        marginRight: 8,
        fontWeight: '400',
        fontSize: responsiveFontSize(2),
        color: '#2f4f4f',
    },
    priceText: {
        fontSize: 24,
        fontWeight: '800',
        color: 'green'
    },
    priceContainer: {
        flexDirection: 'row',
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:10,
        marginHorizontal:20,
        marginBottom:10,
    },
    btn: {
        backgroundColor: '#54408C',
        paddingHorizontal: 40,
        paddingVertical: 4,
        borderRadius: 12,
        alignItems:'center',
        justifyContent:'center'
        // marginRight:20,
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '800',
        textAlign:'center'
    }
})