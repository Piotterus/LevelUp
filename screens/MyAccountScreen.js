import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import ErrorModal from '../components/ErrorModal';

export default class MyAccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            firm: '',
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

    componentDidMount() {

        const queryString = this.objToQueryString({
            key: this.props.keyApp,
            token: this.props.token,
        });

        let url = `https://levelup.verbum.com.pl/api/user/userData/?${queryString}`;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    user: responseJson.user,
                    firm: responseJson.firm,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    }

    render() {
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <Text style={styles.knowledgeHeaderText}>MOJE KONTO</Text>
                    <View style={[styles.shadow, styles.myAccount]}>
                        <Text style={styles.headerText}>Dane Uczestnika</Text>
                        <View style={styles.userDataView}>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>IMIĘ</Text>
                                <Text style={styles.userInfoText}>NAZWISKO</Text>
                                <Text style={styles.userInfoText}>TELEFON</Text>
                                <Text style={styles.userInfoText}>E-MAIL</Text>
                            </View>
                            <View style={{width: 10}}>
                            </View>
                            <View style={styles.userData}>
                                <Text style={styles.userDataText}>{this.state.user.firstname}</Text>
                                <Text style={styles.userDataText}>{this.state.user.lastname}</Text>
                                <Text style={styles.userDataText}>{this.state.user.phone}</Text>
                                <Text style={styles.userDataText}>{this.state.user.email}</Text>
                            </View>
                        </View>
                        <View style={styles.line}/>
                        <Text style={styles.headerText}>Firma</Text>
                        <View style={styles.userDataView}>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>NIP</Text>
                            </View>
                            <View style={{width: 10}}>
                            </View>
                            <View style={styles.userData}>
                                <Text style={styles.userDataText}>{this.state.user.nip}</Text>
                            </View>
                        </View>
                        <View style={styles.line}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyConsent')} style={[styles.buttonBase, styles.shadow, styles.buttonConsent]}>
                            <Text style={styles.buttonText}>MOJE ZGODY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    knowledgeMain: {
        marginTop: -5,
        alignItems: 'center',
        width: '100%',
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        paddingBottom: 26,
        marginBottom: -5,
        zIndex: 3
    },
    knowledgeHeaderText: {
        fontSize: 13,
        color: '#0E395A',
        marginTop: 12,
        marginBottom: 20,
    },
    myAccount: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
        alignItems: 'center'
    },
    shadow: {
        shadowColor: '#00000029',//'#00000080',
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    buttonBase: {
        width: '100%',
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',

    },
    line: {
        height: 1,
        backgroundColor: '#0E395A',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    headerText: {
        color: '#0A3251',
        fontSize: 20,
        fontWeight: 'bold',
    },
    userDataView: {
        flexDirection: 'row',

    },
    userInfo: {
        alignItems: 'flex-end',
        flex: 1
    },
    userData: {
        alignItems: 'flex-start',
        flex: 1
    },
    userInfoText: {
        fontSize: 13,
        color: '#0A3251',
        marginTop: 5,
        marginBottom: 5,
    },
    userDataText: {
        fontSize: 13,
        color: '#0A3251',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    buttonConsent: {
        backgroundColor: '#2592E6',
        borderRadius: 25,
        height: 34,
        width: 305,
        marginBottom: 15,
        marginTop: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
