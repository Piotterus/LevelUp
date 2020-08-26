import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';

export default class AboutLapsScreen extends React.Component {

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                    <View style={[styles.shadow, styles.aboutLaps]}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251'}}>Okrążenia</Text>
                        <Text style={{fontSize: 16, color: '#0A3251'}}>Quickly reintermediate low-risk high-yield technology without turnkey technologies.</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/001-wall-clock_race.png')}/>
                                <Text>Okrążenia aktualne</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/001-wall-clock_race.png')}/>
                                <Text>Okrążenie pominięte</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/001-wall-clock_race.png')}/>
                                <Text>Okrążenia ukończone</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/001-wall-clock_race.png')}/>
                                <Text>Wkrótce</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 150, marginBottom: 16, flexDirection: 'row', justifyContent: 'center'}}>
                            <View opacity={1.0} style={[styles.circle]}></View>
                            <View opacity={0.45} style={[styles.circle]}></View>
                            <View opacity={0.45} style={[styles.circle]}></View>
                        </View>
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
    aboutLaps: {
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
    rankingHeader: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 6,
        justifyContent: 'space-between',
    },
    rankingOwn: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 6,
        justifyContent: 'space-between',
    },
    rankingColumn: {

    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 14/2,
        backgroundColor: '#2592E6',
        marginRight: 7,
        marginLeft: 7,
    }
})
