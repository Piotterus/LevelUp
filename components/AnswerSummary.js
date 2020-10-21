import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HTML from "react-native-render-html";
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default class AnswerSummary extends React.Component {

    render() {
        console.log("CORRECT " + this.props.correct);
        console.log("VALUE " + this.props.value);
        if (this.props.correct === "1") {
            console.log("CORRECT 1");
            return(
                <View style={[styles.shadow, styles.answerView, {borderColor: '#24A100', borderWidth: 3}]}>
                    <CheckBox
                        checkedIcon={<Icon name="check-circle" size={30} color="#00377F" />}
                        uncheckedIcon={<Icon name="circle" size={30} color="#00377F" />}
                        checked={this.props.value}
                    />
                    {this.props.text != null &&
                    <Text style={styles.answerText}>{this.props.text}</Text>
                    }
                    {this.props.image != null &&
                    <Image style={{flex: 1, height: '100%', width: '70%', resizeMode: 'contain'}} source={{uri:this.props.image}}/>
                    }
                </View>
            )
        } else if (this.props.value === true) {
            console.log("VALUE TRUE");
            return(
                <View style={[styles.shadow, styles.answerView, {borderColor: '#E20000', borderWidth: 3}]}>
                    <CheckBox
                        checkedIcon={<Icon name="check-circle" size={30} color="#00377F" />}
                        uncheckedIcon={<Icon name="circle" size={30} color="#00377F" />}
                        checked={this.props.value}
                    />
                    {this.props.text != null &&
                    <Text style={styles.answerText}>{this.props.text}</Text>
                    }
                    {this.props.image != null &&
                    <Image style={{flex: 1, height: '100%', width: '70%', resizeMode: 'contain'}} source={{uri:this.props.image}}/>
                    }
                </View>
            )
        } else {
            return(
                <View style={[styles.shadow, styles.answerView]}>
                    <CheckBox
                        checkedIcon={<Icon name="check-circle" size={30} color="#00377F" />}
                        uncheckedIcon={<Icon name="circle" size={30} color="#00377F" />}
                        checked={this.props.value}
                    />
                    {this.props.text != null &&
                    <Text style={styles.answerText}>{this.props.text}</Text>
                    }
                    {this.props.image != null &&
                    <Image style={{flex: 1, height: '100%', width: '70%', resizeMode: 'contain'}} source={{uri:this.props.image}}/>
                    }
                </View>
            )
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
