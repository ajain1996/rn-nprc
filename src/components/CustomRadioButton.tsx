import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Styles } from '../styles';
import { Size } from '../constants';


interface RadioButtonProps {
    selectedVal?: string;
    title?: string;
    onPress?: (text: string) => void;
}

export default function CustomRadioButton({
    selectedVal,
    title,
    onPress
}: RadioButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <View style={styles.checkbox}>
                {selectedVal === title
                    ? <View style={styles.check} />
                    : <></>}
            </View>

            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Styles.rowView,
        marginVertical: 3
    },
    checkbox: {
        width: Size.l, height: Size.l,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.black,
        ...Styles.centered,
        marginRight: 8
    },
    check: {
        width: Size.s, height: Size.s,
        borderRadius: 100,
        backgroundColor: Colors.black,
    },
    title: {
        fontSize: Size.s14,
        color: Colors.black,
    }
})