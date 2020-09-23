import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';

export default class MyAccountScreen extends React.Component {

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
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
                                <Text style={styles.userDataText}>MAREK</Text>
                                <Text style={styles.userDataText}>WRÓBLEWSKI</Text>
                                <Text style={styles.userDataText}>XXX XXX XXX</Text>
                                <Text style={styles.userDataText}>NAZWA@DOMENY.PL</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <Text style={styles.headerText}>Serwis</Text>
                        <View style={styles.userDataView}>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>NAZWA</Text>
                                <Text style={styles.userInfoText}>PROFIL DZIAŁALNOŚCI</Text>
                                <Text style={styles.userInfoText}>ADRES</Text>
                                <Text style={styles.userInfoText}>KOD POCZTOWY</Text>
                                <Text style={styles.userInfoText}>MIEJSCOWOŚĆ</Text>
                            </View>
                            <View style={{width: 10}}>
                            </View>
                            <View style={styles.userData}>
                                <Text style={styles.userDataText}>NAZWA</Text>
                                <Text style={styles.userDataText}>PROFIL DZIAŁALNOŚCI</Text>
                                <Text style={styles.userDataText}>ADRES</Text>
                                <Text style={styles.userDataText}>KOD POCZTOWY</Text>
                                <Text style={styles.userDataText}>MIEJSCOWOŚĆ</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <Text style={styles.headerText}>Przedstawiciel handlowy</Text>
                        <Text style={styles.headerText}>GoodYear</Text>
                        <View style={styles.userDataView}>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>IMIĘ I NAZWISKO</Text>
                            </View>
                            <View style={{width: 10}}>
                            </View>
                            <View style={styles.userData}>
                                <Text style={styles.userDataText}>IMIĘ I NAZWISKO</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyConsent')} style={[styles.buttonBase, styles.buttonConsent, styles.shadow]}>
                            <Text style={styles.buttonText}>MOJE ZGODY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer navigation={this.props.navigation}/>
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
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6
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
