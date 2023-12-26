import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>
const BottomBar = ( {navigation} : NavigationProps) => {
    return (
        <View style={styles.buttomTab}>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                navigation.navigate('Home');
            }}>
                <Image
                    source={require('../assets/Images/home2.png')}
                    style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                navigation.navigate('FreeEarning')
            }}>
                <Image
                    source={require('../assets/Images/earning.png')}
                    style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                navigation.navigate('PaidCourses')
            }}>
                <Image
                    source={require('../assets/Images/courses.png')}
                    style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                navigation.navigate('OurProducts');
            }}>
                <Image
                    source={require('../assets/Images/product.png')}
                    style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                navigation.navigate('OurServices');
            }}>
                <Image
                    source={require('../assets/Images/services.png')}
                    style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    buttomTab: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
    }
})