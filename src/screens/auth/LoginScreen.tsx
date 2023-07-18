import { View, StyleSheet, StatusBar, TouchableHighlight, Image } from 'react-native'
import React, { useState } from 'react'
import MText from '../../components/Text'
import InputBox from '../../components/InputBox'
import { Size } from '../../constants';
import Button from '../../components/Button';
import { Colors, Styles } from '../../styles';
import Toast from 'react-native-simple-toast';
import Auth from '../../constants/Auth';
import { useDispatch } from 'react-redux';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';
import { BASE_URL } from '../../API/api';
import { setUser } from '../../redux/reducer/user';

export default function LoginScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        if (!userId && !password) {
            Toast.show("Please enter all fields")
            return;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userId": userId,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        setLoading(true)
        fetch(BASE_URL + "/api/auth/login", requestOptions)
            .then(response => response.json())
            .then(async (result: any) => {
                console.log(result);
                setLoading(false)
                if (result?.statusCode === 200) {
                    Toast.show('User Register Successfully!');
                    await Auth.setLocalStorageData(
                        'account', result?.data
                    ).then(() => {
                        dispatch(setUser(result?.data));
                        navigation.navigate('HomeScreen');
                    }).catch((e) => {
                        Toast.show("Oops! Something went wrong")
                    })
                } else {
                    Toast.show(result?.message);
                }
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableHighlight style={{ width: 20, height: 20 }}
                    onPress={() => { navigation.goBack() }} underlayColor="#eee"
                >
                    <Image
                        source={require("../../assets/images/arrow-back.png")}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="contain"
                    />
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />
                <View style={styles.layout}>
                    <MText style={styles.heading}>Login</MText>

                    <View>
                        <MText style={styles.label}>User Id</MText>
                        <InputBox
                            value={userId}
                            onChangeText={(val) => {
                                setUserId(val)
                            }}
                            inputStyle={styles.inputStyle}
                            placeholder='User Id'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={styles.label}>Password</MText>
                        <InputBox
                            value={password}
                            onChangeText={(val) => {
                                setPassword(val)
                            }}
                            inputStyle={styles.inputStyle}
                            secureTextEntry={true}
                            placeholder='Password'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <Button
                        title="Proceed"
                        textStyle={styles.buttonText}
                        style={styles.button}
                        onPress={handleLogin}
                    />
                </View>
                <CustomPanel loading={loading} />
                <CustomLoader loading={loading} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    header: {
        width: Size.wWidth * 1.1,
        height: 54,
        elevation: 10,
        shadowColor: "#999",
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingLeft: 16,
    },
    layout: {
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000",
        textAlign: "center",
        marginBottom: 20
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginTop: 5,
    },
    inputStyle: {
        width: Size.wWidth / 1.2,
        backgroundColor: "#F6F6F6",
        borderWidth: 0,
        fontWeight: "500",
        fontSize: 14,
        marginTop: -5
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
    },
    button: {
        width: Size.wWidth / 1.2,
        marginTop: 6,
    },
})