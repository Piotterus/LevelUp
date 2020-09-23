import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { CheckBox } from 'react-native-elements'

export default class MyConsentScreen extends React.Component {

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>MOJE ZGODY</Text>
                    <View style={[styles.shadow, styles.myAccount]}>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={true}
                            />
                            <Text style={styles.consentText}>Zapoznałem/am się i akceptuję zapisy Regulaminu Konkursu „Gra Szkoleniowa GOOD GAME”. Wyrażenie tej zgody jest dobrowolne, ale jej brak uniemożliwia rejestrację w Konkursie.</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <Text style={styles.consentText}>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z obowiązującymi przepisami prawa w celach komunikacji marketingowej, niezwiązanej z Konkursem następującymi kanałami:</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={true}
                            />
                            <Text style={styles.consentText}>Telefon</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={true}
                            />
                            <Text style={styles.consentText}>SMS</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={false}
                            />
                            <Text style={styles.consentText}>Poczta elektroniczna</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <Text style={styles.consentText}>Wyrażenie tych zgód jest dobrowolne tzn. że nie stanowi warunku uczestnictwa w Konkursie. Zaznaczając którąkolwiek ze zgód potwierdza Pan/Pani swoje uprawnienie do reprezentowania firmy. Zgody mogą zostać wycofane w każdym czasie; wycofanie zgody numer 1 będzie jednak oznaczać zakończenie udziału firmy w Konkursie „Gra szkoleniowa GOOD GAME”. Szczegóły znajdziesz w Regulaminie Konkursu.</Text>
                        </View>
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
    },
    consentText: {
        color: '#0A3251',
        fontSize: 12,
        flex: 1,
    },
    consentRow: {
        flexDirection: 'row',
        //width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingLeft: 20
    }
})
