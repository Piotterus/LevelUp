import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

const BLUE = "#428AF8"
const LIGHT_GRAY = "#D3D3D3"

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isFocusedName: false,
            isFocusedAge: false,
            error: '',
        }
    }


    /*handleLogin() {
        let url = "https://piotr2.scementowani.pl/apiPiotr";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                method: "login",
                name: this.state.login,
                password: this.state.password,
            }),
        })
            .then(response => response.json())
            .then(responseJson => {

                if (responseJson.error == "0") {
                    global.myID = responseJson.id
                    this.props.navigation.navigate('Main', {},
                        {
                            type: "Navigate",
                            routeName: "Login",
                            params: {myID: responseJson.id},
                            actions: {
                                params: {myID: responseJson.id}
                            }
                        }
                    );
                } else {

                    this.setState({
                        error: responseJson.message,
                    })
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleRegister() {
        let url = "https://piotr2.scementowani.pl/apiPiotr";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                method: "addParent",
                name: this.state.login,
                password: this.state.password,
            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.error == "0") {
                    global.myID = responseJson.id
                    this.props.navigation.navigate('Main', {},
                        {
                            type: "Navigate",
                            routeName: "Login",
                            params: {myID: responseJson.id}
                        }
                    );
                } else {
                    this.setState({
                        error: "Rejestracja nieudana"
                    })
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    updateValue(text,field) {
        if (field == 'login') {
            this.setState({
                login: text,
            })
        } else if (field == 'password' ){
            this.setState( {
                password: text,
            })
        }
    }

    render() {
        return(
            <View style={styles.view}>
                <ScrollView style={styles.scrollView}>
                    <ImageBackground source={require('../images/levelup_start_v2.png')} resizeMode='contain' style={styles.imageBackground}>
                        <View style={styles.insideView}>
                            <TextInput
                                placeholder="LOGIN"
                                placeholderTextColor="#FFFFFF33"
                                textAlign='center'
                                style={styles.textInput}
                                onChangeText = {(text) => this.updateValue(text,'login')}
                            />
                            <TextInput
                                placeholder="HASŁO"
                                placeholderTextColor="#FFFFFF33"
                                textAlign='center'
                                style={styles.textInput}
                                secureTextEntry={true}
                                onChangeText = {(text) => this.updateValue(text,'password')}
                            />
                            <View style={styles.remindMeView}>
                                <Text style={styles.remindMeText}>Nie pamiętasz hasła?</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.remindMeText}>Zapamiętaj mnie</Text>
                                    <Switch/>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.props.login()} style={styles.loginButton}>
                                <Text style={styles.loginText}>ZALOGUJ SIĘ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.signinButton}>
                                <Text style={styles.signinText}>DOŁĄCZ DO GRY </Text>
                                <Image width="23" height="23" source={require('../icons/add.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get("window").width, //for full screen
        //height: Dimensions.get("window").height, //for full screen
        //width: '100%',
        alignItems: 'center',
    },
    view: {
        flex: 1,
    },
    insideView: {
        alignItems: 'center',
        paddingTop: 200,
        width: Dimensions.get("window").width * 0.8,

        //justifyContent: 'center',
        //height: Dimensions.get("window").height, //for full screen
    },
    remindMeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    remindMeText: {
        color: '#ffffff',
        fontSize: 13,

    },
    container: {
        flex: 1,
        //marginTop: 20,
    },
    scrollView: {
        backgroundColor: 'white',
    },
    text: {
        fontSize: 25,
        color: '#ffffff',
    },
    textInput: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        //width: 200,
        width: Dimensions.get("window").width * 0.8,
        height: 40,
        color: '#ffffff',
    },
    loginButton: {
        backgroundColor: '#2592E6',
        width: '100%',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        marginTop: 55,
        borderRadius: 25,
        shadowColor: '#000000',//'#00000080',
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 5
    },
    loginText: {
        color: '#ffffff',
        fontSize: 16,

    },
    signinButton: {
        marginTop: 290,
        backgroundColor: '#F1F9FF',
        borderColor: '#0E395A',
        borderWidth: 1,
        width: '100%',
        height: 50,
        opacity: 0.8,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 27,
    },
    signinText: {
        color: '#0A3251',
        fontSize: 16,
    },
    signinImage: {
        height: 23.38,
        width: 23.38,
    }
});


