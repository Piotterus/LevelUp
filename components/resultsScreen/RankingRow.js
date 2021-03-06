import React from 'react'

import {
    Text,
    View,
    StyleSheet,
} from 'react-native';


export default class RankingRow extends React.Component {

    render() {
        let rank = parseInt(this.props.position) + 1;
        return(
            <View style={styles.rankingRow}>
                <Text style={[styles.rankingText, {flex: 1}]}>{rank}</Text>
                <Text style={[styles.rankingText, {flex: 5}]}>{this.props.firstName} {this.props.lastName}</Text>
                <Text style={[styles.rankingText, {flex: 1, textAlign: 'right'}]}>{this.props.points}</Text>
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
    rankingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 20,
    },
    rankingText: {
        fontSize: 16,
        color: '#0A3251',

    },
});

