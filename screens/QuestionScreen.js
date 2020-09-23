import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';

export default class QuestionScreen extends React.Component {

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>PYTANIA</Text>
                    <View style={[styles.shadow, styles.questionView]}>
                        <Text style={styles.questionHeaderText}>PYTANIE 2<Text style={{fontSize: 19}}>/4</Text></Text>
                        <Text style={styles.questionText}>Co wpływa na właściwy dobór opon?</Text>
                        <Text style={styles.questionHint}>Odpowiedź wielokrotnego wyboru</Text>
                        <View style={[styles.shadow, styles.answerView]}>
                            <CheckBox
                                checkedIcon={<Icon name="check-circle" size={30} color="#00377F" />}
                                uncheckedIcon={<Icon name="circle" size={30} color="#00377F" />}
                                checked={false}
                            />
                            <Text style={styles.answerText}>To łatwość, z jaką opona toczy się po nawierzchni</Text>
                        </View>
                        <View style={[styles.shadow, styles.answerView]}>
                            <CheckBox
                                checkedIcon={<Icon name="check-circle" size={30} color="#00377F" />}
                                uncheckedIcon={<Icon name="circle" size={30} color="#00377F" />}
                                checked={true}
                            />
                            <Text style={styles.answerText}>To łatwość, z jaką opona trzyma się nawierzchni</Text>
                        </View>
                        <View style={[styles.shadow, styles.answerView]}>
                            <CheckBox
                                checkedIcon={<Icon name="check-circle" size={30} color="#00377F" />}
                                uncheckedIcon={<Icon name="circle" size={30} color="#00377F" />}
                                checked={true}
                            />
                            <Text style={styles.answerText}>To zachowanie opony podczas hamowania</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TestSummary')} style={[styles.buttonBase, styles.buttonConsent, styles.shadow]}>
                            <Text style={styles.buttonText}>DALEJ</Text>
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
    questionView: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
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
    headerText: {
        color: '#0A3251',
        fontSize: 20,
        fontWeight: 'bold',
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
    questionHeaderText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0A3251'
    },
    questionText: {
        fontSize: 18,
        color: '#0A3251'
    },
    questionHint: {
        fontSize: 13,
        color: '#0A3251',
        marginBottom: 20,
    },
    answerView: {
        width: '100%',
        borderRadius: 9,
        zIndex: 1,
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 5,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    answerText: {
        flex: 1,
        fontSize: 16,
        color: '#0A3251'
    }
})
