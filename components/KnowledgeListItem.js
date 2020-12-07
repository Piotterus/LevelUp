import React from 'react'

import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

import Icon from 'react-native-vector-icons/Entypo';
import moment from 'moment/moment.js';

export default class KnowledgeListItem extends React.Component {

    render() {
        let date = moment(this.props.date);
        if (this.props.active === true) {
            if (this.props.status.id === 1) {
                return (
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OneKnowledge', {id: this.props.id, goToQuestion: this.props.goToQuestion})}
                        style={[styles.knowledgeOne, styles.shadow, {borderColor: '#2592E6', borderWidth: 1, borderRadius: 9}]}>
                        <View style={styles.knowledgeDesc}>
                            <Text style={[styles.knowledgeDescText, styles.knowledgeTextRead, {fontSize: 12, fontWeight: 'normal'}]}>{this.props.day.toUpperCase()} - {date.format('DD-M-Y')}</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                                marginTop: 9,
                                justifyContent: 'space-between'
                            }}>
                                <Text style={[styles.knowledgeDescText, styles.knowledgeTextRead]}>{this.props.knowledgeTitle}</Text>
                                <Image source={require('../icons/left_arrow_alt.png')}/>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', marginTop: 12}}>
                                <Image source={require('../icons/eye.png')}/>
                                <Text style={[styles.knowledgeTextRead, {fontSize: 10, marginLeft: 7, fontWeight: 'normal'}]}>{this.props.activeText}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else if (this.props.status.id === 2) {
                return (
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OneKnowledge', {id: this.props.id, goToQuestion: this.props.goToQuestion})}
                        style={[styles.knowledgeOne, styles.shadow, {backgroundColor: '#E20000'}]}>
                        <View style={[styles.knowledgeDesc]}>
                            <Text style={[styles.knowledgeDescText, styles.knowledgeTextNotRead, {fontSize: 12, fontWeight: 'normal'}]}>{this.props.day.toUpperCase()} - {date.format('DD-M-Y')}</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                                marginTop: 9,
                                justifyContent: 'space-between'
                            }}>
                                <Text style={[styles.knowledgeDescText, styles.knowledgeTextNotRead]}>{this.props.knowledgeTitle}</Text>
                                <Image source={require('../icons/left_arrow_alt-2.png')}/>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', marginTop: 12}}>
                                <Image source={require('../icons/eye_slash-1.png')}/>
                                <Text style={[styles.knowledgeTextNotRead, {fontSize: 10, marginLeft: 7, fontWeight: 'normal'}]}>{this.props.activeText}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        } else {
            return (
                <TouchableOpacity
                    style={[styles.knowledgeOne, {borderColor: '#2592E6', borderWidth: 1, borderRadius: 9, opacity: 0.25}]}>
                    <View style={styles.knowledgeDesc}>
                        <Text style={[styles.knowledgeDescText, styles.knowledgeTextRead, {fontSize: 12, fontWeight: 'normal'}]}>{this.props.day.toUpperCase()} - {date.format('DD-M-Y')}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: 9,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={[styles.knowledgeDescText, styles.knowledgeTextRead]}>{this.props.knowledgeTitle}</Text>
                            <Icon name="lock" size={30} color="#2592E6" />
                        </View>
                        <View style={{flexDirection: 'row', width: '100%', marginTop: 12}}>

                        </View>
                    </View>
                </TouchableOpacity>
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
    knowledgeOne: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
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
        paddingLeft: 12,
        paddingRight: 26,
        paddingTop: 5,
    },
    knowledgeDescText: {
        fontSize: 20,
        marginTop: 5,
        width: '80%',
    },
    knowledgeTextRead: {
        color: '#2592E6',
        fontWeight: 'bold'
    },
    knowledgeTextNotRead: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});
