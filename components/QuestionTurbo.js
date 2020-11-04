import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

export default class QuestionTurbo extends React.Component {

    render() {
        if (this.props.active) {
            return (
                <TouchableOpacity style={{flex: 1}}>
                    <Image resizeMode='contain' style={{width: '100%'}} source={require('../images/Group_176.png')}/>
                </TouchableOpacity>
            )
        } else if (this.props.status.id === 4){
            return (
                <TouchableOpacity style={{flex: 1}}>
                    <Image resizeMode='contain' style={{width: '100%', opacity: 0.25}} source={require('../images/Group_176.png')}/>
                </TouchableOpacity>
            )
        } else if (this.props.status.id === 2) {
            return (
                <TouchableOpacity style={{flex: 1}}>
                    <Image resizeMode='contain' style={{width: '100%', opacity: 0.25}} source={require('../images/Group_176.png')}/>
                </TouchableOpacity>
            )
        } else {
            return null;
        }
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
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
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
        marginTop: 15,
    },
    questionOne: {
        width: '100%',
        paddingLeft: 26,
        paddingRight: 26,
        marginBottom: 15
    },
    buttonActive: {
        backgroundColor: '#E20000'
    },
    buttonSolved: {
        borderColor: '#2592E6',
        borderWidth: 1
    },
    buttonPending: {
        backgroundColor: '#2592E6',
        opacity: 0.5
    },
    questionTextActive: {
        color: '#FFFFFF',
        fontSize: 13
    },
    questionTextSolved: {
        color: '#2592E6',
        fontSize: 13,
    },
    questionTextPending: {
        color: '#FFFFFF',
        fontSize: 13,
    },
})
