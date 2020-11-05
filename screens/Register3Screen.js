import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HeaderBurger from '../components/HeaderBurger';
import Icon from 'react-native-vector-icons/Feather';
import HeaderNoLogin from '../components/HeaderNoLogin';
import { CheckBox } from 'react-native-elements'
import ErrorModal from '../components/ErrorModal';

export default class Register3Screen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: this.props.route.params.firstname,
            lastname: this.props.route.params.lastname,
            phone: this.props.route.params.phone,
            email: this.props.route.params.email,
            firmName: this.props.route.params.firmName,
            firmAddressStreet: this.props.route.params.firmAddressStreet,
            firmAddressPostal: this.props.route.params.firmAddressPostal,
            firmAddressCity: this.props.route.params.firmAddressCity,
            agree1: false,
            agree2: false,
            agree3: false,
            agree4: false,
            error: '',
        }
        console.log(this.state)
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    registerUser() {
        const queryString = this.objToQueryString({
            key: this.props.keyApp,
        });
        let agree1;
        let agree2;
        let agree3;
        let agree4;
        if (this.state.agree1) {
            agree1 = 1;
        } else {
            agree1 = 0;
        }
        if (this.state.agree2) {
            agree2 = 1;
        } else {
            agree2 = 0;
        }
        if (this.state.agree3) {
            agree3 = 1;
        } else {
            agree3 = 0;
        }
        if (this.state.agree4) {
            agree4 = 1;
        } else {
            agree4 = 0;
        }

        let body = {
            lang: "pl",
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            firmName: this.state.firmName,
            firmAdress: this.state.firmAddressStreet,
            firmCity: this.state.firmAddressCity,
            agree1: agree1,
            agree2: agree2,
            agree3: agree3,
            agree4: agree4,
            modalErrorVisible: false,
            error: '',
        }

        let url = `https://levelup.verbum.com.pl/api/user/userRegister?${queryString}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(responseJson => {
                let title = 'Dziękujemy za rejestracje';
                let message = 'Na Twój adres e-mail wysłaliśmy dane dostępowe.';
                this.props.navigation.navigate('Login', {message: message, title: title});
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
            <ScrollView contentContainerStyle={[styles.backgroundContent, {flexGrow: 1}]} style={styles.background}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderNoLogin/>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>Chcesz dołączyć do LEVEL UP?</Text>
                    <Text style={styles.normalText}>Wypełnij poniższy formularz, a za moment otrzymasz mailem swoje dane dostępowe do gry treningowej LEVEL UP.</Text>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.stepText}>Krok 3/3</Text>
                    <Text style={styles.stepText}>Zgody</Text>
                    <View style={styles.consentRow}>
                        <CheckBox
                            checked={this.state.agree1}
                            onPress={() => this.setState({agree1: !this.state.agree1})}
                            />
                        <Text style={styles.consentText}>Zapoznałem/am się i akceptuję zapisy Regulaminu Konkursu „Gra Szkoleniowa GOOD GAME”. Wyrażenie tej zgody jest dobrowolne, ale jej brak uniemożliwia rejestrację w Konkursie.</Text>
                    </View>
                    {/*<View style={styles.consentRow}>
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
                    </View>*/}
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <View style={{flex: 1}}>
                            <Icon name="chevron-left" size={50} color="#2592E6" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.registerUser()} style={styles.nextButton}>
                        <Text style={{color: '#FFFFFF', fontSize: 16}}>ZAREJESTRUJ SIĘ</Text>
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
        //backgroundColor: 'yellow',
    },
    registerView: {
        marginTop: 32,
        alignItems: 'center',
        width: '100%',
        //backgroundColor: 'green',
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
        marginBottom: 40,
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
    consentText: {
        color: '#FFFFFF',
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
