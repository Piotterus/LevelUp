import React from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Footer extends React.Component {

    render() {
        return(
            <View style={styles.footerView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Results')} style={[styles.footerInfo, (this.props.active == "RESULTS") ? styles.footerActive : styles.footerDisActive]}>
                    <Image source={require('../icons/ikony_BOTTOM_wyniki.png')}/>
                    <Text style={{color: '#FFFFFF', fontSize: 11}}>WYNIKI</Text>
                </TouchableOpacity>
                <View  style={[styles.lineView, {borderColor: '#FFFFFF'}]}>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseKnowledge')} style={[styles.footerInfo, (this.props.active == "KNOWLEDGE") ? styles.footerActive : styles.footerDisActive]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../icons/ikony_BOTTOM_wiedza.png')}/>
                        {this.props.knowledgeCount > 0 &&
                        <View style={styles.footerCircle}>
                            <Text style={styles.footerCircleText}>{this.props.knowledgeCount}</Text>
                        </View>
                        }
                    </View>
                    {this.props.knowledgeCount > 0 &&
                    <Text
                        style={{color: '#FFFFFF', fontSize: 11}}>WIEDZA</Text>
                    }
                    {this.props.knowledgeCount == 0 &&
                    <Text
                        style={{color: '#FFFFFF', fontSize: 11}}>WIEDZA</Text>
                    }
                </TouchableOpacity>
                <View  style={[styles.lineView, {borderColor: '#FFFFFF'}]}>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')} style={[styles.footerInfo, (this.props.active == "QUESTIONS") ? styles.footerActive : styles.footerDisActive]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../icons/ikony_BOTTOM_test.png')}/>
                        {this.props.testCount > 0 &&
                        <View style={styles.footerCircle}>
                            <Text style={styles.footerCircleText}>{this.props.testCount}</Text>
                        </View>
                        }
                    </View>
                    {this.props.testCount > 0 &&
                    <Text
                        style={{color: '#FFFFFF', fontSize: 11}}>TEST</Text>
                    }
                    {this.props.testCount == 0 &&
                    <Text
                        style={{color: '#FFFFFF', fontSize: 11}}>TEST</Text>
                    }
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 14,
    },
    onelevelView: {
        justifyContent: 'space-between',
        height: 50
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
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6
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
        justifyContent: 'space-around',

    },
    footerInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    footerCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -5,
        marginLeft: 5
    },
    footerCircleText: {
        fontSize: 11,
        color: '#0E395A',
        fontWeight: 'bold'
    },
    footerActive: {
        backgroundColor: '#0A3251',
    },
    footerDisActive: {

    }
});

