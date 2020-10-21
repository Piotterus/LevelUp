import React from 'react'

import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
    Image,
    Switch,
    TouchableHighlight,
} from 'react-native';

import HTML from "react-native-render-html";
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default class MyLevelView extends React.Component {

    render() {
        return(
            <View style={[styles.levelView, styles.shadow, {paddingBottom: 10}]}>
                <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10, marginBottom: 10}}>MÓJ POZIOM:</Text>
                <View style={styles.levelRow}>
                    <View style={styles.onelevelView}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text onPress={() => {
                                this.props.setModal(true,"STARTER","2","1","-1", "26")
                            }} style={{color: '#0E395A'}}>STARTER </Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.setModal(true,"STARTER","2","1","-1", "26")
                                }}>
                                <Image source={require('../../icons/info.png')}/>
                            </TouchableHighlight>
                        </View>
                        {this.props.level === "starter" &&
                        <TouchableHighlight style={{flex: 1, justifyContent: 'flex-end'}}
                                            onPress={() => {
                                                this.props.setModal(true,"STARTER","2","1","-1", "26")
                                            }}>
                            <View style={styles.rectangleView}>
                            </View>
                        </TouchableHighlight>
                        }
                    </View>
                    <View style={styles.lineView}>
                    </View>
                    <View style={styles.onelevelView}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text onPress={() => {
                                this.props.setModal(true,"EXPERT","4","2","-2", "52")
                            }} style={{color: '#0E395A'}}>EXPERT </Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.setModal(true,"EXPERT","4","2","-2", "52")
                                }}>
                                <Image source={require('../../icons/info.png')}/>
                            </TouchableHighlight>
                        </View>
                        {this.props.level === "expert" &&
                        <TouchableHighlight style={{flex: 1, justifyContent: 'flex-end'}}
                                            onPress={() => {
                                                this.props.setModal(true,"EXPERT","4","2","-2", "52")
                                            }}>
                            <View style={styles.rectangleView}>
                            </View>
                        </TouchableHighlight>
                        }
                    </View>
                    <View style={styles.lineView}>
                    </View>
                    <View style={styles.onelevelView}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text onPress={() => {
                                this.props.setModal(true,"CHAMPION","8","4","-4", "78")
                            }} style={{color: '#0E395A'}}>CHAMPION</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.setModal(true,"CHAMPION","8","4","-4", "78")
                                }}>
                                <Image source={require('../../icons/info.png')}/>
                            </TouchableHighlight>
                        </View>
                        {this.props.level === "champion" &&
                        <TouchableHighlight style={{flex: 1, justifyContent: 'flex-end'}}
                                            onPress={() => {
                                                this.props.setModal(true,"CHAMPION","8","4","-4", "78")
                                            }}>
                            <View style={styles.rectangleView}>
                            </View>
                        </TouchableHighlight>
                        }
                    </View>
                </View>
                <View style={[styles.points2levelView]}>
                    <Text style={styles.points2levelText}>
                        DO POZIOMU {this.props.points2level.name.toUpperCase()} BRAKUJE TOBIE
                    </Text>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.points2levelText, {fontSize: 40}]}>{this.props.points2level.points}</Text>
                        <Text style={[styles.points2levelText]}>PUNKTÓW</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        backgroundColor: '#0A3251',
        width: '100%',
        height: 112,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 26,
    },
    infoView: {
        backgroundColor: '#2592E6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 55,
    },
    infoText: {
        color: '#FFFFFF',
        fontSize: 13,
        marginRight: 10
    },
    mainView: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: -5,
        paddingBottom: 10,
        zIndex: 1,
    },
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
    points2levelView: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    points2levelText: {
        color: '#0E395A',
        fontSize: 11,
    },
    chooseContentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    chooseContentViewOne: {
        height: 43,
        width: 103,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23
    },
    chooseContentViewActive: {
        backgroundColor: '#0A3251',
    },
    chooseContentViewDisactive: {
        backgroundColor: '#F3F3F3'
    },
    chooseContentText: {
        fontSize: 13,
    },
    chooseContentTextActive: {
        color: '#FFFFFF',
    },
    chooseContentTextDisactive: {
        color: '#0A3251',
    },
});

