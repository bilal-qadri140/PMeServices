import { Image, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

// topbar props 
type TopBarProps = {
    leftIcon: ImageURISource,
    rightIcon?: ImageURISource,
    leftIconPressed: () => void
    title: string,
}
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../src/App'
// import props
type NavigationProps = NativeStackScreenProps<RootStackParamList>
const TopBar = ({ leftIcon, rightIcon, title,leftIconPressed }: TopBarProps, { navigation }: NavigationProps) => {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={styles.btn}
                activeOpacity={1}
                onPress={leftIconPressed}
            > 
                <Image
                    source={leftIcon}
                    style={styles.leftImg}
                />
            </TouchableOpacity> */}
            <Text style={styles.title}>{title}</Text>
            {/* <TouchableOpacity style={styles.btn} activeOpacity={1} >
                <Image
                    source={rightIcon}
                    style={styles.rightImg}
                />
            </TouchableOpacity> */}
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(8),
        width: responsiveWidth(100),
        backgroundColor: '#54408C',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    btn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftImg: {
        height: 35,
        width: 45,
    },
    rightImg: {
        height: 25,
        width: 25,
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 24,

    }
})