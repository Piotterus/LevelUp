import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { CheckBox } from 'react-native-elements'
import ErrorModal from '../components/ErrorModal';

export default class MyConsentScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            agree1: false,
            agree2: false,
            agree3: false,
            agree4: false,
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
                    agree1: responseJson.user.agree1,
                    agree2: responseJson.user.agree2,
                    agree3: responseJson.user.agree3,
                    agree4: responseJson.user.agree4,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    toggleAgree(agreeNumber) {
        let agree = this.state.user.agreeNumber;
        this.setState(
            {
                user: {
                    agreeNumber: !agree
                }
            }
        )
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
                    <Text style={styles.knowledgeHeaderText}>MOJE ZGODY</Text>
                    <View style={[styles.shadow, styles.myAccount]}>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={this.state.agree1}
                                onPress={() => this.setState({agree1: !this.state.agree1})}
                            />
                            <Text style={styles.consentText}>Zapoznałem/am się i akceptuję zapisy Regulaminu Konkursu „Gra Szkoleniowa GOOD GAME”. Wyrażenie tej zgody jest dobrowolne, ale jej brak uniemożliwia rejestrację w Konkursie.</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <Text style={styles.consentText}>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z obowiązującymi przepisami prawa w celach komunikacji marketingowej, niezwiązanej z Konkursem następującymi kanałami:</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={this.state.agree2}
                                onPress={() => this.setState({agree2: !this.state.agree2})}
                            />
                            <Text style={styles.consentText}>Telefon</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={this.state.agree3}
                                onPress={() => this.setState({agree3: !this.state.agree3})}
                            />
                            <Text style={styles.consentText}>SMS</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <CheckBox
                                checked={this.state.agree4}
                                onPress={() => this.setState({agree4: !this.state.agree4})}
                            />
                            <Text style={styles.consentText}>Poczta elektroniczna</Text>
                        </View>
                        <View style={styles.consentRow}>
                            <Text style={styles.consentText}>Wyrażenie tych zgód jest dobrowolne tzn. że nie stanowi warunku uczestnictwa w Konkursie. Zaznaczając którąkolwiek ze zgód potwierdza Pan/Pani swoje uprawnienie do reprezentowania firmy. Zgody mogą zostać wycofane w każdym czasie; wycofanie zgody numer 1 będzie jednak oznaczać zakończenie udziału firmy w Konkursie „Gra szkoleniowa GOOD GAME”. Szczegóły znajdziesz w Regulaminie Konkursu.</Text>
                        </View>
                    </View>
                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active={"KNOWLEDGE"}/>
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
