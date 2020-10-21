import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HeaderBurger from '../components/HeaderBurger';

import Icon from 'react-native-vector-icons/Feather';
import HeaderNoLogin from '../components/HeaderNoLogin';
import ErrorModal from '../components/ErrorModal';

export default class Register1Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            modalErrorVisible: false,
            error: '',
        }
    }

    updateValue(text,field) {
        if (field === 'firstname') {
            this.setState({
                firstname: text,
            })
        } else if (field === 'lastname' ){
            this.setState( {
                lastname: text,
            })
        } else if (field === 'phone' ){
            this.setState( {
                phone: text,
            })
        } else if (field === 'email' ){
            this.setState( {
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
                    <Text style={styles.headerText}>Chcesz dołączyć do LEVEL UP?</Text>
                    <Text style={styles.normalText}>Wypełnij poniższy formularz, a za moment otrzymasz mailem swoje dane dostępowe do gry treningowej LEVEL UP.</Text>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.stepText}>Krok 1/3</Text>
                    <Text style={styles.stepText}>Dane uczestnika</Text>
                    <TextInput
                        placeholder="IMIĘ"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        onChangeText = {(text) => this.updateValue(text,'firstname')}
                    />
                    <TextInput
                        placeholder="NAZWISKO"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        onChangeText = {(text) => this.updateValue(text,'lastname')}
                    />
                    <TextInput
                        placeholder="TELEFON"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        onChangeText = {(text) => this.updateValue(text,'phone')}
                    />
                    <TextInput
                        placeholder="EMAIL"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        onChangeText = {(text) => this.updateValue(text,'email')}
                    />
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <View style={{flex: 1}}>
                            <Icon name="chevron-left" size={50} color="#2592E6" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register2", {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        phone: this.state.phone,
                        email: this.state.email
                    })} style={styles.nextButton}>
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
