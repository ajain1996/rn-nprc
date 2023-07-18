import { StyleSheet } from "react-native";

import Colors from "./Colors";
import Styles from "./Styles";
import { Size } from "../constants";


export const dropdownStyles = StyleSheet.create({
    container: {
        padding: Size.s,
        color: Colors.black,
        // marginBottom: Size.xs,
    },
    dropdown: {
        height: Size.vl + Size.vs + 1,
        paddingHorizontal: Size.s,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
        color: Colors.subText,
        width: Size.wWidth / 1.12,
        alignSelf: "center",
        borderRadius: Size.s12,
    },
    icon: {
        marginRight: Size.vs,
        width: Size.ml
    },
    placeholderStyle: {
        fontSize: Size.s12,
        color: Colors.subText,
        // fontWeight: '700',
    },
    selectedTextStyle: {
        fontSize: Size.s12,
        color: Colors.black
    },
    iconStyle: {
        width: Size.xl,
        height: Size.xl,
    },
    inputSearchStyle: {
        height: Size.vl,
        fontSize: Size.s14,
    },
    item: {
        padding: Size.m,
        ...Styles.row_space
    },
    textItem: {
        fontSize: Size.s12,
        color: Colors.black,
        height: Size.l
    },
});