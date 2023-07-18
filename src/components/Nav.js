import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NewsContext } from '../API/Context';

export default function Nav() {

    const { darkTheme, setDarkTheme } = useContext(NewsContext);

    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20,
            width: "100%", height: 60, alignItems: 'center', paddingRight: 8,
            backgroundColor: darkTheme ? "#282C35" : '#f7f8f9',
        }}>
            <Text style={{ fontSize: 18, color: darkTheme ? "#fff" : "#000" }}>Movies App</Text>
            <TouchableOpacity onPress={() => { setDarkTheme(!darkTheme) }}>
                <Image
                    source={require('../assets/themt.png')}
                    style={{ width: 30, height: 30, tintColor: darkTheme ? '#8B0000' : "#000" }}
                />
            </TouchableOpacity>
        </View>
    )
}
