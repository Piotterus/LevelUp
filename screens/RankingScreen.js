import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import ErrorModal from '../components/ErrorModal';

export default class RankingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            modalErrorVisible: false,
            error: '',
        }
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    }

    render() {
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderBurger navigation={this.props.navigation}/>
                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <Text style={styles.knowledgeHeaderText}>RANKING</Text>
                    <View style={[styles.shadow, styles.ranking]}>
                        <View style={{flex: 1}}>
                            <View style={styles.rankingColumn}>
                                <Text style={{fontSize: 12, color: '#0A3251'}}>Uczestnik</Text>
                                <Text style={{fontSize: 18, color: '#0A3251', fontWeight: 'bold'}}>Imię i Nazwisko</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                            <View style={[styles.rankingColumn, {alignItems: 'center'}]}>
                                <Text style={{fontSize: 12, color: '#0A3251'}}>Miejsce</Text>
                                <Text style={{fontSize: 18, color: '#0A3251', fontWeight: 'bold'}}>10</Text>
                            </View>
                            <View style={[styles.rankingColumn, {alignItems: 'center'}]}>
                                <Text style={{fontSize: 12, color: '#0A3251'}}>Punkty</Text>
                                <Text style={{fontSize: 18, color: '#0A3251', fontWeight: 'bold'}}>235</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.shadow, styles.ranking]}>
                        <View style={{flex: 1}}>
                            <View style={styles.rankingColumn}>
                                <Text style={{fontSize: 12, color: '#0A3251'}}>Uczestnik</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>Imię i Nazwisko</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                            <View style={[styles.rankingColumn, {alignItems: 'center'}]}>
                                <Text style={{fontSize: 12, color: '#0A3251'}}>Miejsce</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>1</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>2</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>3</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>4</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>5</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>6</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>7</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>9</Text>
                            </View>
                            <View style={[styles.rankingColumn, {alignItems: 'center'}]}>
                                <Text style={{fontSize: 12, color: '#0A3251'}}>Punkty</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                                <Text style={{fontSize: 16, color: '#0A3251', marginBottom: 20}}>8888</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active={"RANKING"}/>
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
    ranking: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
        flexDirection: 'row',

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

    }
})
