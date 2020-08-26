import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';

export default class EnterKnowledgeScreen extends React.Component {

    render() {
        return(
            <ScrollView style={{backgroundColor: '#FFFFFF'}}>
                <HeaderBurger navigation={this.props.navigation}/>
                <View style={styles.knowledgeView}>
                    <View style={styles.knowledgeNav}>
                        <Image source={require('../icons/back_back.png')}/>
                        <Text style={{fontSize: 13, color: '#5E6367', marginLeft: 15}}>WRÓĆ</Text>
                    </View>
                    <View style={[styles.knowledgeMain, styles.shadow]}>
                        <Text style={{fontSize: 36, color: '#0A3251', marginTop: 34}}>WIEDZA</Text>
                        <Image source={require('../icons/wiedza.png')}/>
                        <Text style={{fontSize: 17, color: '#0E395A', textAlign: 'center', marginBottom: 20}}>Tu dowiesz się wszystkiego co niezbędne, by wziąć udział w teście i osiągnąć znakomity wynik.</Text>
                        <Text style={{fontSize: 17, color: '#0E395A', textAlign: 'center'}}>Widzisz czerwony przycisk? W takim razie kolejna porcja wiedzy czeka na Ciebie, nie zwlekaj i ruszaj!</Text>
                        <TouchableOpacity style={[styles.buttonBase, {backgroundColor: '#2592E6', marginTop: 41, marginBottom: 42}, styles.shadow]}>
                            <Text style={{color: '#FFFFFF', fontSize: 13}}>WEJDŹ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    knowledgeView: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginBottom: 20
    },
    knowledgeNav: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 25,
        alignSelf: 'flex-start',
    },
    knowledgeMain: {
        marginTop: 25,
        alignItems: 'center',
        width: '90%',
        borderRadius: 9,
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
        width: 305,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
