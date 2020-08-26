import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';

export default class EnterQuestionsScreen extends React.Component {

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>PYTANIA</Text>
                    <View style={[styles.shadow, styles.questionMain]}>
                        <View style={styles.questionOne}>
                            <Text style={{color: '#0A3251', fontSize: 18, fontWeight: 'bold'}}>Nazwa pierwszej wiedzy</Text>
                            <TouchableOpacity style={[styles.buttonBase, {backgroundColor: '#E20000', marginTop: 15}, styles.shadow]}>
                                <Text style={{color: '#FFFFFF', fontSize: 13}}>PYTANIE 1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.questionOne}>
                            <Text style={{color: '#0A3251', fontSize: 18, fontWeight: 'bold'}}>Nazwa drugiej wiedzy</Text>
                            <TouchableOpacity style={[styles.buttonBase, {borderColor: '#2592E6', borderWidth: 1, marginTop: 15}]}>
                                <Text style={{color: '#2592E6', fontSize: 13}}>PYTANIE 2</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.questionOne}>
                            <Text style={{color: '#0A3251', fontSize: 18, fontWeight: 'bold'}}>Nazwa trzeciej wiedzy</Text>
                            <TouchableOpacity style={[styles.buttonBase, {borderColor: '#2592E6', borderWidth: 1, marginTop: 15}]}>
                                <Text style={{color: '#2592E6', fontSize: 13}}>PYTANIE 3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.questionOne, {marginTop: 60}]}>
                            <TouchableOpacity style={[styles.buttonBase, {borderColor: '#2592E6', borderWidth: 1, marginTop: 15}]}>
                                <Text style={{color: '#2592E6', fontSize: 13}}>ROZWIĄŻ TEST</Text>
                            </TouchableOpacity>
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
    questionMain: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        paddingTop: 20
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
    knowledgeDesc: {
        flex: 1,
        paddingLeft: 26,
        paddingRight: 26,
    },
    knowledgeDescText: {
        color: '#0E395A'
    },
    buttonBase: {
        width: '100%',
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',

    },
    questionOne: {
        width: '100%',
        paddingLeft: 26,
        paddingRight: 26,
        marginBottom: 30
    }
})
