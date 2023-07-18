import { View, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MText from '../../components/Text'
import InputBox from '../../components/InputBox'
import { Countries, Size } from '../../constants';
import Button from '../../components/Button';
import Toast from 'react-native-simple-toast';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';
import { BASE_URL, getAllCategories, getAllSubCategories } from '../../API/api';
import ApplyFormPicker from '../../components/ApplyFormPicker';
import NavigationService from '../../navigation/NavigationService';
import { Image } from 'react-native';
import { CustomDrawer } from '../home/CustomDrawer';
import PaperInput from '../../components/PaperInput';
import { Colors, Styles } from '../../styles';
import { IconButton } from 'react-native-paper';
import SimpleModal from '../../components/SimpleModal';
import { useSelector } from 'react-redux';
import { Icon, Icons } from '../../components/Icon';
import typography from '../../styles/typography';
import CountryModal from '../../components/modal/CountryModal';
import { Row } from '../../components/Wrapper';
import { TextInput } from 'react-native-gesture-handler';

export default function CreateRecord({ navigation }: any) {
    const { userData, login } = useSelector((state: any) => state.User);
    const [countryFlag, setCountryFlag] = useState('🇮🇳');
    const [countryCode, setCountryCode] = useState('+91');
    const [countryModalVisible, setCountryModalVisible] = useState(false)
    const [countryModalVisible2, setCountryModalVisible2] = useState(false)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");

    const [allCategories, setAllCategories] = useState([]);
    const [allSubCategories, setAllSubCategories] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllCategories((response: any) => {
            setAllCategories(response?.data)
            console.log("\n\n CreateRecord getAllCategories: ", response)
        })

        getAllSubCategories((response: any) => {
            setAllSubCategories(response?.data)
            console.log("\n\n CreateRecord getAllSubCategories: ", response)
        })
    }, [])

    const handleSubmit = () => {
        if (!phone) {
            Toast.show("Please enter all fields")
            return;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "email": email,
            "contactNumber": phone,
            "address": address,
            "city": city,
            "state": state,
            "country": country,
            "category": category,
            "subCategory": subCategory
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        setLoading(true)
        fetch(BASE_URL + "/api/data/createrecord", requestOptions)
            .then(response => response.json())
            .then(async (result: any) => {
                console.log(result?.statusCode, typeof result?.statusCode);
                setLoading(false)
                if (result?.statusCode == 200) {
                    Toast.show(result?.message);
                    // navigation.navigate("HomeScreen")
                    setSuccessModal(true);
                    setName("")
                    setEmail("")
                    setPhone("");
                    setAddress("");
                    setState("");
                    setCity("");
                    setCountry("");
                    setCategory("");
                    setSubCategory("");
                }
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const [drawerModal, setDrawerModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const openDrawer = () => {
        setDrawerModal(true)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" />
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
            <View style={{ marginTop: -32 }} />
            <ScrollView style={{ height: Size.wHeight }} keyboardShouldPersistTaps="always">
                <KeyboardAvoidingView style={{ marginTop: 50 }}>
                    <View>
                        <MText style={styles.label}>Name</MText>
                        <InputBox
                            value={name}
                            onChangeText={(val) => {
                                setName(val)
                            }}
                            inputStyle={styles.inputStyle}
                            placeholder='Name'
                            placeholderTextColor={"#999"}
                        />
                    </View>

                    <View>
                        <MText style={styles.label}>Email</MText>
                        <InputBox
                            value={email}
                            onChangeText={(val) => {
                                setEmail(val)
                            }}
                            keyboardType="email-address"
                            inputStyle={styles.inputStyle}
                            placeholder='Email'
                            placeholderTextColor={"#999"}
                        />
                    </View>

                    <MText style={styles.label}>Contact Number</MText>
                    <Row style={styles.mobileInput}>
                        <TouchableOpacity style={styles.countryFlagCodeWrapper}
                            onPress={() => { setCountryModalVisible2(true) }}>
                            <MText style={[styles.countryIcon, { fontSize: Size.l }]}>{countryFlag}</MText>
                            <MText style={styles.countryIcon}>{countryCode}</MText>
                            <Image
                                source={require("../../assets/images/arrow-down.png")}
                                style={{ width: 10, height: 10, ...Styles.aliSelfCenter }}
                            />
                            {/* <Icon type={Icons.Entypo} name="chevron-thin-down" style={Styles.aliSelfCenter} size={typography.FONT_SIZE_16} color={Colors.gray9} /> */}
                        </TouchableOpacity>
                        <TextInput
                            value={phone}
                            keyboardType="number-pad"
                            onChangeText={(val) => {
                                setPhone(val)
                            }}
                            maxLength={10}
                            style={{ marginLeft: 9 }}
                            placeholder='Contact Number'
                            placeholderTextColor={"#999"}
                        />
                    </Row>

                    {/* <View>
                        <MText style={styles.label}>Address</MText>
                        <InputBox
                            value={address}
                            onChangeText={(val) => {
                                setAddress(val)
                            }}
                            inputStyle={styles.inputStyle}
                            placeholder='Address'
                            placeholderTextColor={"#999"}
                        />
                    </View> */}

                    <View>
                        <MText style={styles.label}>City/State</MText>
                        <InputBox
                            value={state}
                            onChangeText={(val) => {
                                setState(val)
                            }}
                            inputStyle={styles.inputStyle}
                            placeholder='State'
                            placeholderTextColor={"#999"}
                        />
                    </View>

                    {/* <View>
                        <MText style={styles.label}>City</MText>
                        <InputBox
                            value={city}
                            onChangeText={(val) => {
                                setCity(val)
                            }}
                            inputStyle={styles.inputStyle}
                            placeholder='City'
                            placeholderTextColor={"#999"}
                        />
                    </View> */}

                    {/*  */}


                    <TouchableOpacity>
                        <MText style={styles.label}>Country</MText>
                        <InputBox
                            value={country}
                            onChangeText={(val) => {
                                setCountry(val)
                            }}
                            inputStyle={styles.inputStyle}
                            placeholder='Country'
                            placeholderTextColor={"#999"}
                            onPress={() => { setCountryModalVisible(true) }}
                        />
                    </TouchableOpacity>

                    <ApplyFormPicker
                        heading="Akal Connect Group"
                        placeholderText="Akal Connect Group"
                        required={true}
                        width={Size.wWidth / 1.2}
                        height={Size.wWidth}
                        onDateSelected={(val: any) => {
                            console.warn(val._id)
                            setCategory(val?._id)
                        }}
                        data={allCategories}
                    />

                    <ApplyFormPicker
                        heading="Akal connect Sub Group"
                        placeholderText="Akal connect Sub Group"
                        required={true}
                        width={Size.wWidth / 1.2}
                        height={Size.wWidth}
                        onDateSelected={(val: any) => {
                            console.warn(val._id)
                            setSubCategory(val?._id)
                        }}
                        data={allSubCategories}
                    />

                    <Button
                        title="Proceed"
                        textStyle={styles.buttonText}
                        style={styles.button}
                        onPress={handleSubmit}
                    />
                    <MText />
                </KeyboardAvoidingView>
            </ScrollView>

            <CustomPanel loading={loading} />
            <CustomLoader loading={loading} />

            <CustomDrawer
                modalVisible={drawerModal}
                callback={() => {
                    setDrawerModal(false);
                }}
                navigation={navigation}
            />

            <SimpleModal
                visible={successModal}
                setVisible={setSuccessModal}
                dismiss
                closeOnSubmit
            >
                <View style={{ alignItems: "center", height: 350, justifyContent: "center" }}>
                    <Image
                        source={require("../../assets/images/third_banner.jpg")}
                        style={{ width: 200, height: 200 }}
                    />

                    <MText style={styles.modalTitle}>Thankyou!</MText>
                    <MText style={styles.modalSubText}>Your Record has been created Successfully</MText>

                    {/* {login && <Button
                        title="Home"
                        textStyle={styles.buttonText}
                        style={styles.button}
                        onPress={() => { navigation.navigate("HomeScreen") }}
                    />}

                    {!login && <Button
                        title="Login"
                        textStyle={styles.buttonText}
                        style={styles.button}
                        onPress={() => { navigation.navigate("LoginScreen") }}
                    />} */}
                </View>
            </SimpleModal>

            <SimpleModal
                visible={countryModalVisible}
                setVisible={setCountryModalVisible}
                dismiss
                closeOnSubmit
            >
                <View style={{ alignItems: "center", height: Size.wWidth, justifyContent: "center" }}>
                    <FlatList
                        data={Countries}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <CountryItem {...item}
                                onPress={(val) => {
                                    setCountry(val)
                                    setCountryModalVisible(false)
                                }}
                                modalType={"name"}
                            />
                        )}
                    />
                </View>
            </SimpleModal>

            <SimpleModal
                visible={countryModalVisible2}
                setVisible={setCountryModalVisible2}
                dismiss
                closeOnSubmit
            >
                <View style={{ alignItems: "center", height: Size.wWidth, justifyContent: "center" }}>
                    <FlatList
                        data={Countries}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <CountryItem {...item}
                                onPress={(val) => {
                                    setCountryCode(val)
                                    setCountryModalVisible2(false)
                                }}
                                modalType={"code"}
                            />
                        )}
                    />
                </View>
            </SimpleModal>
        </View>
    )
}

interface CountryItemProps {
    flag?: string;
    name: string;
    dial_code: string;
    modalType: string;
    onPress: (val: string) => void;
}

const CountryItem = ({ flag, name, dial_code, modalType, onPress }: CountryItemProps) => {

    const countryItemPress = () => {
        if (modalType === "code") {
            onPress(dial_code)
        } else if (modalType === "name") {
            onPress(name)
        }
    }

    return (
        <View style={{ height: 50, width: "100%" }}>
            <TouchableOpacity onPress={countryItemPress}>
                <View style={styles.countryStyle}>
                    <Row style={Styles.container}>
                        <MText style={styles.countryFlagStyle}>{flag}</MText>
                        <MText marginHorizontal={Size.m} style={styles.countryNameStyle}>{name}</MText>
                    </Row>
                    <MText style={styles.countryNameStyle}>{dial_code}</MText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header: {
        width: Size.wWidth * 1.1,
        height: 54,
        elevation: 10,
        shadowColor: "#999",
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingLeft: 36,
    },
    layout: {
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        padding: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        marginTop: 5,
    },
    inputStyle: {
        width: Size.wWidth / 1.1,
        backgroundColor: "#F6F6F6",
        borderWidth: 0,
        fontWeight: "400",
        fontSize: 14,
        marginTop: -5
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
    },
    button: {
        width: Size.wWidth / 1.1,
        marginTop: 6,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "500",
        color: "#000",
        marginTop: 20
    },
    modalSubText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        marginBottom: 10
    },
    countryFlagCodeWrapper: {
        flexDirection: "row"
    },
    countryIcon: {
        alignSelf: "center",
        fontSize: 12,
        color: "#000",
        marginRight: Size.vs,
    },
    countryStyle: {
        borderBottomColor: Colors.gray4,
        borderBottomWidth: Size._xs / Size.s,
        paddingVertical: Size.xs,
        // paddingHorizontal: Size.l,
        ...Styles.row_space,
        width: Size.wWidth
    },
    countryFlagStyle: {
        fontSize: Size.l,
    },
    countryNameStyle: {
        fontSize: Size.s14,
        color: Colors.gray7,
        marginRight: 60
    },
    mobileInput: {
        width: Size.wWidth / 1.1,
        backgroundColor: "#F6F6F6",
        borderWidth: 0,
        fontWeight: "400",
        fontSize: 14,
        marginTop: 4,
        borderRadius: Size.s12,
        paddingLeft: 10
    }
})