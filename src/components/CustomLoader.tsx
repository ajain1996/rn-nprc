import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../styles';

interface CustomPanelProps {
    loading: boolean;
}

interface CustomLoaderProps {
    loading: boolean;
}

export default function CustomLoader({ loading }: CustomLoaderProps) {
    return (
        loading
            ? <View style={{ ...styles.loaderStyle }}>
                <ActivityIndicator size={50} color={Colors.primary} />
            </View>
            : <></>
    )
}

export const CustomPanel = ({ loading }: CustomPanelProps) => {
    return (
        loading
            ? <View style={{
                justifyContent: 'center',
                height: '100%',
                paddingBottom: 10,
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'absolute',
                top: 0, bottom: 0,
                right: 0, left: 0
            }} /> : <></>
    );
}

const styles = StyleSheet.create({
    loaderStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
