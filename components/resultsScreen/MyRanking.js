import React from 'react'

import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class MyRanking extends React.Component {

    render() {
        return(
            <View style={styles.myRankingView}>
                <View style={{width: '90%', paddingLeft: 9, paddingRight: 9}}>
                    <View style={styles.rankingRow}>
                        <Text style={[styles.rankingText, {flex: 1}]}>{this.props.ranking}</Text>
                        <Text style={[styles.rankingText, {flex: 5}]}>{this.props.name} {this.props.surname}</Text>
                        <Text style={[styles.rankingText, {flex: 1, textAlign: 'right'}]}>{this.props.points}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myRankingView: {
        position: 'absolute',
        bottom: 75,
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
        elevation: 10

    },
    rankingRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5,
        paddingLeft: 5,
    },
    rankingText: {
        fontSize: 16,
        color: '#0A3251',
        fontWeight: 'bold'
    },
});

