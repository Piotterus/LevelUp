import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import HTML from "react-native-render-html";
import Answer from './Answer';
import AnswerSummary from './AnswerSummary';

export default class QuestionSummary extends React.Component {

    createAnswersList() {
        let answersList = []
        //console.log("ANSWERS LIST: " + JSON.stringify(this.props.answers))
        for (let i in this.props.answers) {
            answersList.push(<AnswerSummary
                key={i}
                navigation={this.props.navigation}
                id={this.props.answers[i].id}
                text={this.props.answers[i].text}
                image={this.props.answers[i].image}
                value={this.props.answers[i].value}
                correct={this.props.answers[i].correct}
                idQuestion={this.props.id}
                selectAnswer={this.props.selectAnswer}
            />)
        }
        return answersList;
    }

    render() {
        //console.log("SHOW-" + this.props.showQuestion);
        //console.log("NUMBER-" + this.props.number);
        return (
            <View>
                {this.props.questionCount > 1 &&
                <Text style={styles.questionHeaderText}>PYTANIE {this.props.number}<Text
                    style={{fontSize: 19}}>/{this.props.questionCount}</Text></Text>
                }
                {this.props.questionCount === 1 &&
                <Text style={styles.questionHeaderText}>PYTANIE {this.props.number}</Text>
                }
                <HTML html={this.props.text}/>
                {this.createAnswersList()}
            </View>
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
