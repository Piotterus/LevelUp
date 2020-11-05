import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import Icon from 'react-native-vector-icons/Feather';
import HeaderNoLogin from '../components/HeaderNoLogin';
import ErrorModal from '../components/ErrorModal';

export default class RemindPasswordScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            modalErrorVisible: false,
            error: '',
        }
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }


    remindPassword() {
        const queryString = this.objToQueryString({
            key: this.props.keyApp,
        });

        let body = {
            email: this.state.email,
        }

        let url = `https://levelup.verbum.com.pl/api/user/remind?${queryString}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.error.code === 0) {
                    let error = {
                        code: "Przypomnij hasło",
                        message: "Dane dostępowe zostały wysłane na Twój adres mailowy."
                    };
                    this.setState({
                        error: error,
                    }, () => this.setModalErrorVisible(true))

                    //this.props.navigation.navigate('Login');
                } else {
                    this.setState({
                        error: responseJson.error,
                    }, () => this.setModalErrorVisible(true))
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateValue(text,field) {
        if (field === 'email') {
            this.setState({
                email: text,
            })
        }
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    }

    render() {
        return(
            <ScrollView contentContainerStyle={[styles.backgroundContent, {flexGrow: 1}]} style={styles.background}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderNoLogin/>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>Nie pamiętasz hasła? To nie problem.</Text>
                    <Text style={styles.normalText}>Wpisz poniżej swój adres poczty elektronicznej podany podczas rejestracji i kliknij przycisk „Wyślij”. Otrzymasz wiadomość e-mail z przypomnieniem danych do logowania.</Text>
                </View>
                <View style={styles.emailView}>
                    <TextInput
                        placeholder="ADRES E-MAIL"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        onChangeText = {(text) => this.updateValue(text,'email')}
                    />
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.remindPassword()} style={styles.nextButton}>
                        <Text style={{color: '#FFFFFF', fontSize: 16}}>WYŚLIJ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={[styles.goToLoginButton]}>
                        <Text style={styles.goToLoginText}>WRÓĆ DO LOGOWANIA</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0A3251',
    },
    backgroundContent: {
        alignItems: 'center'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    textView: {
        width: '90%',
        alignItems: 'center',
        marginTop: 40,
    },
    registerView: {
        marginTop: 32,
        alignItems: 'center'
    },
    stepText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textInput: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        //width: 200,
        width: Dimensions.get("window").width * 0.8,
        height: 40,
        color: '#ffffff',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 40,
    },
    backButton: {
        backgroundColor: '#FFFFFF',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#2592E6',
        width: 241,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailView: {
        marginTop: 50,
    },
    goToLoginButton: {
        backgroundColor: '#F1F9FF',
        borderColor: '#0E395A',
        borderWidth: 1,
        width: 241,
        height: 50,
        opacity: 0.8,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 287,
    },
    goToLoginText: {
        color: '#0A3251',
        fontSize: 16,
    },
})
