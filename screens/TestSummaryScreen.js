import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';

export default class TestSummaryScreen extends React.Component {

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>PODSUMOWANIE TESTU</Text>
                    <View style={[styles.shadow, styles.summaryView]}>
                        {/*<View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 1</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 2</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 3</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 4</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 5</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 6</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 7</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 8</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 9</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>
                        <View style={styles.questionRow}>
                            <Text style={styles.answerNumber}>Pytanie 10</Text>
                            <View style={styles.questionRow2}>
                                <Icon name="check" size={20} color="#AAEE00" />
                                <Text>+2</Text>
                            </View>
                        </View>*/}
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
        fontWeight: 'light',
    }
})
