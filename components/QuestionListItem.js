import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

export default class QuestionListItem extends React.Component {

    getTestResults() {

    }

    render() {
        if (this.props.model === 1) {
            if (this.props.active) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Question', {id: this.props.id, model: this.props.model})}
                                          style={[styles.buttonBase, styles.shadow, styles.buttonActive]}>
                            <Text style={styles.questionTextActive}>PYTANIE {this.props.number}</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 4){
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity style={[styles.buttonBase, styles.buttonPending]}>
                            <Text style={styles.questionTextPending}>PYTANIE {this.props.number}</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 2) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("QuestionSummary", {
                            model: this.props.model,
                            id: this.props.id,
                            pollId: this.props.number,
                        })}
                            style={[styles.buttonBase, styles.buttonSolved]}>
                            <Text style={styles.questionTextSolved}>PYTANIE {this.props.number}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        } else if (this.props.model === 2) {
            if (this.props.active) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Question', {id: this.props.id, model: this.props.model})}
                                          style={[styles.buttonBase, styles.shadow, styles.buttonActive]}>
                            <Text style={styles.questionTextActive}>TURBO</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 4){
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity
                            style={[styles.buttonBase, styles.buttonPending]}>
                            <Text style={styles.questionTextPending}>TURBO</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 2) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity
                            style={[styles.buttonBase, styles.buttonSolved]}>
                            <Text style={styles.questionTextSolved}>TURBO</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        } else if (this.props.model === 3) {
            if (this.props.active) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Question', {id: this.props.id, model: this.props.model})}
                                          style={[styles.buttonBase, styles.shadow, styles.buttonActive]}>
                            <Text style={styles.questionTextActive}>KOŁO RATUNKOWE</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 4){
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity
                            style={[styles.buttonBase, styles.buttonPending]}>
                            <Text style={styles.questionTextPending}>KOŁO RATUNKOWE</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 2) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity
                            style={[styles.buttonBase, styles.buttonSolved]}>
                            <Text style={styles.questionTextSolved}>KOŁO RATUNKOWE</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        } else if (this.props.model === 4) {
            if (this.props.active) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Question', {id: this.props.id, model: this.props.model})}
                                          style={[styles.buttonBase, styles.shadow, styles.buttonActive]}>
                            <Text style={styles.questionTextActive}>ROZWIĄŻ TEST</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 4){
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity
                            style={[styles.buttonBase, styles.buttonPending]}>
                            <Text style={styles.questionTextPending}>TEST</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else if (this.props.status.id === 2) {
                return (
                    <View style={styles.questionOne}>
                        <TouchableOpacity
                            style={[styles.buttonBase, styles.buttonSolved]}>
                            <Text style={styles.questionTextSolved}>TEST</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        } else {
            return (
                <View></View>
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
        backgroundColor: '#2592E6',
    },
    buttonPending: {
        backgroundColor: '#8A8A8A',
        opacity: 0.5
    },
    questionTextActive: {
        color: '#FFFFFF',
        fontSize: 13
    },
    questionTextSolved: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    questionTextPending: {
        color: '#FFFFFF',
        fontSize: 13,
    },
})
