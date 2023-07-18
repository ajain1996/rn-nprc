import { View, StyleSheet, FlatList, TouchableHighlight, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import MText from '../../components/Text'
import { getAllrecords } from '../../API/api'
import { Size } from '../../constants'
import { Styles } from '../../styles'
import { CustomDrawer } from './CustomDrawer'

export default function HomeScreen({ navigation }: any) {
    const [allrecords, setAllrecords] = useState([])

    useEffect(() => {
        getAllrecords((response: any) => {
            setAllrecords(response?.data)
            console.log("\n\n HomeScreen getAllrecords: ", response)
        })
    }, [])

    const [drawerModal, setDrawerModal] = useState(false);

    const openDrawer = () => {
        setDrawerModal(true)
    }

    return (
        <>
            <StatusBar translucent backgroundColor='#fff' barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight style={{ width: 32, height: 32, padding: 6, ...Styles.centered }}
                        onPress={openDrawer} underlayColor="#eee"
                    >
                        <Image
                            source={require("../../assets/images/menu.png")}
                            style={{ width: 24, height: 24 }}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={allrecords}
                    renderItem={({ item }: any) => {
                        return (
                            <View style={styles.card}>
                                <MText style={styles.name}>Name: {item?.name}</MText>
                                <MText style={styles.name}>Email: {item?.email}</MText>
                                <MText style={styles.name}>Contact Number: {item?.contactNumber}</MText>
                                <View style={styles.cardContent}>
                                    <MText style={styles.address}>Address: {item?.address}</MText>
                                    <MText style={styles.address}>State: {item?.state}</MText>
                                    <MText style={styles.address}>City: {item?.city}</MText>
                                    <MText style={styles.address}>Country: {item?.country}</MText>
                                    <MText style={styles.address}>Category: {item?.category?.name}</MText>
                                    <MText style={styles.address}>Sub Category: {item?.subCategory?.name}</MText>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={(_, indx) => indx.toString()}
                />
            </View>

            <CustomDrawer
                modalVisible={drawerModal}
                callback={() => {
                    setDrawerModal(false);
                }}
                navigation={navigation}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        marginTopTop: 24
    },
    header: {
        width: Size.wWidth * 1.1,
        height: 66,
        elevation: 10,
        shadowColor: "#999",
        backgroundColor: "#fff",
        justifyContent: "center",
        marginLeft: -20,
        paddingLeft: 20,
        paddingTop: 10
    },
    card: {
        borderWidth: 1,
        borderColor: "#eee",
        backgroundColor: "#fff",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8
    },
    cardContent: {
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        padding: 12,
        marginTop: 12,
        borderRadius: 10
    },
    name: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000"
    },
    address: {
        fontSize: 12,
        fontWeight: "400",
        color: "#000"
    }
});