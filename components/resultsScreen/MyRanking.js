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
import TestSummaryItem from '../TestSummaryItem';
import RankingRow from './RankingRow';

export default class MyRanking extends React.Component {

    render() {
        return(
            <View style={styles.myRankingView}>
                <View style={{width: '90%', paddingLeft: 9, paddingRight: 9}}>
                    <View style={styles.rankingRow}>
                        <Text style={[styles.rankingText, {flex: 1}]}>{this.props.ranking}</Text>
                        <Text style={[styles.rankingText, {flex: 5}]}>Twoja pozycja</Text>
                        <Text style={[styles.rankingText, {flex: 1}]}>{this.props.points}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myRankingView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#F3F3F3',
        height: 54,
        zIndex: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rankingRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
    },
    rankingText: {
        fontSize: 16,
        color: '#0A3251',
        fontWeight: 'bold'
    },
});

