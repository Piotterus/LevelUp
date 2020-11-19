import React from 'react'

import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export default class LapItem extends React.Component {

    render() {
        if (this.props.item !== "EMPTY") {
                if (this.props.item.status === 1) {
                    return (
                        <TouchableOpacity style={styles.lapView} onPress={() => this.props.changeActiveRound(this.props.item.idRound)}>
                            <Image style={{marginTop: 12, alignContent: 'flex-end'}}
                                   source={require('../icons/rundaCurrent.png')}/>
                            <Text style={[styles.lapText, (this.props.activeRound === this.props.item.idRound) ? styles.lapTextActive : '']}>{this.props.item.idRound} RUNDA</Text>
                        </TouchableOpacity>
                    )
                } else if (this.props.item.status === 2) {
                    return (
                        <TouchableOpacity style={styles.lapView} onPress={() => this.props.changeActiveRound(this.props.item.idRound)}>
                            <Image style={{marginTop: 12, alignContent: 'flex-end'}}
                                   source={require('../icons/rundaOK.png')}/>
                            <Text style={[styles.lapText, (this.props.activeRound === this.props.item.idRound) ? styles.lapTextActive : '']}>{this.props.item.idRound} RUNDA</Text>
                        </TouchableOpacity>
                    )
                } else if (this.props.item.status === 3) {
                    return (
                        <TouchableOpacity style={styles.lapView} onPress={() => this.props.changeActiveRound(this.props.item.idRound)}>
                            <Image style={{marginTop: 12, alignContent: 'flex-end'}}
                                   source={require('../icons/rundaNO.png')}/>
                            <Text style={[styles.lapText, (this.props.activeRound === this.props.item.idRound) ? styles.lapTextActive : '']}>{this.props.item.idRound} RUNDA</Text>
                        </TouchableOpacity>
                    )
                } else if (this.props.item.status === 4) {
                    return (
                        <TouchableOpacity style={styles.lapView}>
                            <Image style={{marginTop: 12, alignContent: 'flex-end'}}
                                   source={require('../icons/rundaPending.png')}/>
                            <Text style={[styles.lapText, (this.props.activeRound === this.props.item.idRound) ? styles.lapTextActive : '']}>{this.props.item.idRound} RUNDA</Text>
                        </TouchableOpacity>
                    )
                }
        } else {
            return (
                <View style={styles.lapView}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    levelText: {
        fontSize: 13,
        color: '#0E395A',
        marginTop: 15,
    },
    levelView: {
        width: '90%',
        marginTop: 14,
        borderRadius: 9,
    },
    levelRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    onelevelView: {
        justifyContent: 'space-between',
        height: 50,
        flex: 1,
        alignItems: 'center'
    },
    rectangleView: {
        backgroundColor: '#0E395A66',
        borderRadius: 8,
        width: 86,
        height: 16
    },
    lineView: {
        width: 0,
        borderColor: '#0E395A',
        height: 47,
        borderWidth: 0.5,
        marginTop: 15
    },
    nextInfoView: {
        marginTop: 10,
        width: '90%',
        borderRadius: 9,
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
    timeView: {
        flexDirection: 'row',
        marginTop: 3,
        paddingLeft: 9,
        paddingRight: 9,
        justifyContent: 'space-between',
    },
    timeTextView: {
        alignItems: 'center',
        //backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignContent: 'space-around'
    },
    timeTopText: {
        color: '#0E395A',
        fontSize: 42,
        //backgroundColor: 'green',
        alignContent: 'flex-start',
        paddingTop: -5,
    },
    timeBotText: {
        color: '#0E395A',
        fontSize: 11,
        //backgroundColor: 'red'
    },
    knowledgeView: {
        flexDirection: 'row',
        marginTop: 18,
        justifyContent: 'space-around',

    },
    buttonBase: {
        width: 146,
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView: {
        flexDirection: 'row',
        backgroundColor: '#2592E6',
        height: 89,
        marginTop: -5,
        zIndex: 0,
        justifyContent: 'space-around'
    },
    footerInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    levelInfoView: {
        alignItems: 'center'
    },
    slides: {
        paddingLeft: 30,
        paddingBottom: 30,
    },
    lapsRow: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between'
    },
    lapView: {
        alignItems: 'center',
        flex: 1,
    },
    lapText: {
        color: '#0A3251',
        fontSize: 12,
    },
    lapTextActive: {
        fontWeight: 'bold'
    }
});
