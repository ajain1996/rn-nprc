import { StyleSheet } from "react-native";
import { Size } from "../constants";
import { Colors, Styles } from "../styles";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    appContainer: {
        flex: 1,
        paddingHorizontal: Size.xl,
        paddingBottom: Size.m,
    },
    row: {
        ...Styles.rowView,
    },
    spaceBetweenRow: {
        ...Styles.row_space,
    },
    spaceAround: {
        ...Styles.spaceAround,
    },
    text: {
        fontSize: Size.s14,
        color: Colors.text,
    },
    btn: {
        width: Size.xl,
        height: Size.xl,
        borderRadius: Size.l,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapRow: {
        flexWrap: 'wrap',
    },
})