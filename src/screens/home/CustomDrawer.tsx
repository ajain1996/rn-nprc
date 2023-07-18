import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Size } from '../../constants';
import { Row } from '../../components/Wrapper';
import { Colors } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '../../constants/Auth';
import { removeUser } from '../../redux/reducer/user';

export const CustomDrawer = ({ modalVisible, callback, navigation }: any) => {
    const dispatch = useDispatch();
    const { userData, login } = useSelector((state: any) => state.User);

    const handleLogout = () => {
        AsyncStorage.clear()
        Auth.logout().then(() => {
            dispatch(removeUser([]));
        });
        navigation.replace('LoginScreen');
    };

    const returnUserName = (userData: any) => {
        if (userData?.user !== undefined) {
            return userData?.user
        } else {
            return ""
        }
    }

    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={callback}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => {
                        callback();
                    }}
                    underlayColor="transparent">
                    <View style={styles.modalView}>
                        <View
                            style={{
                                width: Size.wWidth / 1.4,
                                marginTop: -40,
                                paddingBottom: 10,
                                backgroundColor: "#eee"
                            }}>
                            <View style={styles.userContent}>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={styles.userName}>
                                        {returnUserName(userData)}
                                    </Text>
                                </View>
                            </View>
                            {/* <View style={{ marginTop: -20, marginBottom: 25, marginLeft: 20 }}>
                <TouchableHighlight style={styles.loginBtn} onPress={handleLogout}>
                  <Text style={styles.loginText}>Logout</Text>
                </TouchableHighlight>
              </View> */}
                        </View>

                        <View style={{ height: 10 }} />
                        <ScrollView style={{ marginLeft: -25 }} showsVerticalScrollIndicator={false}>
                            {login && <DrawerButton
                                title="Home"
                                image={require('../../assets/images/home.png')}
                                onPress={() => {
                                    navigation.replace('HomeScreen');
                                }}
                            />}

                            {login
                                ? <DrawerButton
                                    title="Logout"
                                    image={require('../../assets/images/profile.png')}
                                    onPress={handleLogout}
                                />
                                : <DrawerButton
                                    title="Login"
                                    image={require('../../assets/images/profile.png')}
                                    onPress={() => {
                                        navigation.navigate('LoginScreen');
                                    }}
                                />}
                        </ScrollView>
                    </View>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

export const DrawerButton = ({ title, image, onPress }: any) => {
    return (
        <TouchableHighlight
            style={[styles.button]}
            underlayColor="#eee"
            onPress={onPress}>
            <Row>
                <Image
                    source={image}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }}
                />
                <Text style={styles.textStyle}>{title}</Text>
            </Row>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: Size.width,
        height: Size.height,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: Size.width / 1.4,
        height: Size.height + 80,
        marginTop: 80,
        borderWidth: 0.5,
        borderColor: 'lightgray'
    },
    button: {
        padding: 18,
        width: Size.width / 1.4,
        backgroundColor: '#fff',
        marginTop: 2,
        borderRadius: 5,
    },
    textStyle: {
        color: '#000',
        fontWeight: '400',
        marginLeft: 12,
        fontSize: 13,
        marginTop: -2,
        textAlign: "center"
    },
    loginText: {
        color: '#000',
        fontWeight: '400',
        fontSize: 13,
        marginTop: -2,
        textAlign: "center"
    },
    userContent: {
        paddingHorizontal: 13,
        paddingVertical: 30,
        alignItems: "center",
        paddingBottom: 30,
        flexDirection: "row",
    },
    loginBtn: {
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 100,
        width: Size.width / 1.7,
        marginTop: 6,
        elevation: 9,
        shadowColor: "#259D71"
    },
    itemImg: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginTop: 20,
    },
    userName: {
        color: Colors.white,
        fontSize: 18, fontWeight: "500",
        marginTop: 8
    },
    userEmail: {
        color: Colors.white,
        fontSize: 15, fontWeight: "400",
        // marginTop: 8
    },
});
