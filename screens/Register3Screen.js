import React from 'react';

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HeaderBurger from '../components/HeaderBurger';
import Icon from 'react-native-vector-icons/Feather';
import { CheckBox } from 'react-native-elements'

export default class Register3Screen extends React.Component {

    render() {
        return(
            <ScrollView contentContainerStyle={styles.backgroundContent} style={styles.background}>
                <HeaderBurger/>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>Chcesz dołączyć do LEVEL UP?</Text>
                    <Text style={styles.normalText}>Wypełnij poniższy formularz, a za moment otrzymasz mailem swoje dane dostępowe do gry treningowej LEVEL UP.</Text>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.stepText}>Krok 3/3</Text>
                    <Text style={styles.stepText}>Przedstawiciel handlowy GoodYear</Text>
                    <TextInput
                        placeholder="IMIĘ I NAZWISKO"
                        placeholderTextColor="#FFFFFF33"
                        textAlign='center'
                        style={styles.textInput}
                        //onChangeText = {(text) => this.updateValue(text,'login')}
                    />
                    <View style={{height: 20}}>
                    </View>
                    <Text style={styles.stepText}>Zgody</Text>
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
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <View style={{flex: 1}}>
                            <Icon name="chevron-left" size={50} color="#2592E6" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton}>
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
