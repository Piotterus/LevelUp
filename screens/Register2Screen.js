import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HeaderBurger from '../components/HeaderBurger';
import Icon from 'react-native-vector-icons/Feather';

export default class Register2Screen extends React.Component {

    render() {
        return(
            <ScrollView contentContainerStyle={styles.backgroundContent} style={styles.background}>
                <HeaderBurger/>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>Chcesz dołączyć do LEVEL UP?</Text>
                    <Text style={styles.normalText}>Wypełnij poniższy formularz, a za moment otrzymasz mailem swoje dane dostępowe do gry treningowej LEVEL UP.</Text>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.stepText}>Krok 2/3</Text>
                    <Text style={styles.stepText}>Serwis</Text>
                    <TextInput
                        placeholder="NAZWA"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                    <TextInput
                        placeholder="PROFIL DZIAŁALNOŚCI"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                    <TextInput
                        placeholder="ADRES"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                    <TextInput
                        placeholder="KOD POCZTOWY"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                    <TextInput
                        placeholder="MIEJSCOWOŚĆ"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <View style={{flex: 1}}>
                            <Icon name="chevron-left" size={50} color="#2592E6" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register3')} style={styles.nextButton}>
                        <Text style={{color: '#FFFFFF', fontSize: 16}}>DALEJ >>></Text>
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
        marginTop: 50,
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
    }
})