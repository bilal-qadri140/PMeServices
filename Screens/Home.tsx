import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopBar from '../Components/TopBar'
// import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
import BottomBar from '../Components/BottomBar'
import { NavigationRouteContext } from '@react-navigation/native'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>

const Home = ({ navigation, route }: NavigationProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>PMeServices</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/Images/home_banner.jpg')}
                    style={styles.img}
                />
            </View>
            <Text style={styles.headingText}>"GROW</Text>
            <Text style={styles.headingText}> TOGETHER</Text>
            <Text style={styles.headingText}> TO BE BETTER"</Text>
            <Text style={styles.desText}>We will teach you to really understand and get work-ready skills for your future career.</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#000'
    },
    mainHeading:{
        alignSelf:'center',
        marginTop:35,
        fontSize: 35,
        fontWeight: '900',
        color: '#54408C',
    },
    imageContainer: {
        // marginLeft:30,
        borderRadius: 50,
        // backgroundColor:'red',
        borderColor: '#fff',
        resizeMode: 'contain',
        width: '80%',
        alignSelf: 'center',
        marginTop: 35,
        marginBottom: 50,
    },
    img: {
        width: 'auto',
        height: 210,
        resizeMode: 'center',
        borderColor: '#54408C',
        borderWidth: 3,
        borderRadius: 25

    },
    headingText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#54408C',
        marginLeft: 40,
    },
    desText:{
        marginTop:40,
        marginLeft:40,
        fontSize:18,
        marginRight:30,
        fontWeight:'bold'

    }
})