import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HeaderBurger from '../components/HeaderBurger';

import Icon from 'react-native-vector-icons/Feather';

export default class RemindPasswordScreen extends React.Component {

    render() {
        return(
            <ScrollView contentContainerStyle={styles.backgroundContent} style={styles.background}>
                <HeaderBurger/>
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
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={styles.nextButton}>
                        <Text style={{color: '#FFFFFF', fontSize: 16}}>WYŚLIJ</Text>
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
        marginTop: 100,
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
    }
})
