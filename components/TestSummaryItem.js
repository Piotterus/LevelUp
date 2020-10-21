import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export default class TestSummaryItem extends React.Component {

    render() {
        let number = parseInt(this.props.number) + 1;
        return(
            <View style={styles.questionRow}>
                <Text style={styles.answerNumber}>Pytanie {number}</Text>
                <View style={styles.questionRow2}>
                    {this.props.correct && <Icon name="check" size={20} color="#AAEE00" />}
                    {!this.props.correct && <Icon name="minus" size={20} color="#FF0000" />}
                    <Text>{this.props.points}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("QuestionSummary",  {model: this.props.model, id: this.props.id, pollId: this.props.number, points: this.props.points})}>
                        <Icon name="chevron-right" size={20} color="#0A3251" />
                    </TouchableOpacity>
                </View>
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
    summaryView: {
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
    questionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        //paddingRight: 10,
        marginTop: 7,
        marginBottom: 7
    },
    questionRow2: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        //paddingLeft: 10,
        //paddingRight: 10,
    },
    answerNumber: {
        flex: 1,
        color: '#0A3251',
        fontSize: 16,
        fontWeight: '100',
    }
})

