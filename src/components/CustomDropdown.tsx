import React from 'react'

import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { Size } from '../constants';
import { Colors, Styles } from '../styles';
import { w } from '../utils';

interface InputListProp {
    label: string,
    value: string,
}

interface DropdownProp {
    value?: string;
    onChange?: (text: string) => void;
    placeholder?: string;
    width?: number;
    height?: number;
    data?: any;
    dropdownStyle?: ViewStyle | TextStyle;
    error?: string;
}

export default function CustomDropdownComponent({
    value,
    placeholder,
    data,
    width,
    height,
    onChange,
    dropdownStyle,
    error,
}: DropdownProp) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [dropdownData, setDropdownData] = React.useState(value);

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Dropdown
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={dropdownData}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setDropdownData(item.value);
                    setIsFocus(false);
                    onChange(item.value.toString())
                }}
                renderItem={renderItem}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                style={[styles.dropdown, dropdownStyle]}
            />

            {error && <Text style={styles.errorMsg}>{error} !</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: Size.s12,
        color: Colors.red,
        marginTop: 1,
        marginLeft: -8
    },
    container: {
        paddingVertical: Size.s,
        color: Colors.black,
        // marginBottom: Size.xs,
    },
    dropdown: {
        height: w(12),
        paddingHorizontal: Size.s,
        borderWidth: 2,
        borderColor: Colors.gray3,
        borderRadius: Size.s12,
        color: Colors.black,
        width: Size.wWidth / 1.12,
        alignSelf: "center",
    },
    icon: {
        marginRight: Size.vs,
        width: Size.ml
    },
    placeholderStyle: {
        fontSize: Size.s14,
        color: Colors.subText,
        fontWeight: "500",
    },
    selectedTextStyle: {
        fontSize: Size.s14,
        color: Colors.black,
        fontWeight: "500",
    },
    iconStyle: {
        width: Size.xl,
        height: Size.xl,
    },
    inputSearchStyle: {
        height: Size.vl,
        fontSize: w(3.4),
    },
    item: {
        padding: Size.m,
        ...Styles.row_space
    },
    textItem: {
        fontSize: w(3.4),
        color: Colors.black,
        height: Size.l
    },
})