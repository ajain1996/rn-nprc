import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function SplashScreen({ navigation }: any) {

    setTimeout(() => {
        navigation.replace("CreateRecord")
    }, 2000);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 180, height: 180, tintColor: "#000" }}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
})