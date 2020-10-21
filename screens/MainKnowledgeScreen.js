import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';

export default class MainKnowledgeScreen extends React.Component {

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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor: '#FFFFFF'}}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderBurger/>
                <View style={styles.knowledgeNavHeader}>
                    <Text style={{color: '#0A3251', fontSize: 30, marginTop: 11, fontWeight: 'bold'}}>WIEDZA</Text>
                    <View style={styles.knowledgeNav}>
                        <Image source={require('../icons/back_back.png')}/>
                        <Text style={{fontSize: 13, color: '#0A3251', fontWeight: 'bold'}}>2 tydzień</Text>
                        <Image source={require('../icons/back_back-1.png')}/>
                    </View>
                </View>
                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <View style={[styles.shadow, {width: '90%', alignItems: 'center', borderRadius: 9, paddingBottom: 26, marginTop: 20}]}>
                        <View style={[styles.knowledgeOne, styles.knowledgeRead]}>
                            <Text style={[styles.knowledgeTextRead,{fontSize: 14}]}>PONIEDZIAŁEK - 30.06.2020</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 9, justifyContent: 'space-between'}}>
                                <Text style={[styles.knowledgeTextRead,{fontSize: 20, width: '80%'}]}>TU BĘDZIE TYTUŁ WIEDZY Z DANEGO TYGODNIA</Text>
                                <Image source={require('../icons/left_arrow_alt.png')}/>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', marginTop: 12}}>
                                <Image source={require('../icons/eye.png')}/>
                                <Text style={[styles.knowledgeTextRead,{fontSize: 10, marginLeft: 7}]}>Przeczytane</Text>
                            </View>
                        </View>
                        <View style={[styles.knowledgeOne, styles.knowledgeNotRead]}>
                            <Text style={[styles.knowledgeTextNotRead,{fontSize: 14}]}>PONIEDZIAŁEK - 30.06.2020</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 9, justifyContent: 'space-between'}}>
                                <Text style={[styles.knowledgeTextNotRead,{fontSize: 20, width: '80%'}]}>TU BĘDZIE TYTUŁ WIEDZY Z DANEGO TYGODNIA</Text>
                                <Image source={require('../icons/left_arrow_alt-2.png')}/>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', marginTop: 12}}>
                                <Image source={require('../icons/eye_slash-1.png')}/>
                                <Text style={[styles.knowledgeTextNotRead,{fontSize: 10, marginLeft: 7}]}>Przeczytane</Text>
                            </View>
                        </View>
                        <View style={styles.knowledgeNextDay}>
                            <Text style={{color: '#2699FB', fontSize: 12}}>ŚRODA</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 9, justifyContent: 'space-between'}}>
                                <Text style={[styles.knowledgeTextRead,{fontSize: 26, width: '80%'}]}>1 LIPCA 2020</Text>
                                <Image source={require('../icons/left_arrow_alt.png')}/>
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', marginTop: 12}}>
                                <Image source={require('../icons/eye_slash.png')}/>
                                <Text style={[styles.knowledgeTextRead,{fontSize: 10, marginLeft: 7}]}>Przeczytane</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active={"KNOWLEDGE"}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    knowledgeView: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginBottom: 20
    },
    knowledgeNavHeader: {
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        width: '100%',
    },
    knowledgeNav: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 9,
        paddingBottom: 25
    },
    knowledgeMain: {
        marginTop: -5,
        alignItems: 'center',
        width: '100%',
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        paddingBottom: 26,
        marginBottom: -5,
        zIndex: 2
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
        width: 305,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    knowledgeOne: {
        borderRadius: 9,
        borderWidth: 1,
        paddingLeft: 8,
        width: '90%',
        marginTop: 22,
        paddingRight: 24,
        paddingTop: 5,
        paddingBottom: 5
    },
    knowledgeRead: {
        borderColor: '#2592E6',
    },
    knowledgeNotRead: {
        backgroundColor: '#E20000',
        borderColor: '#E20000',
    },
    knowledgeTextRead: {
        color: '#2592E6'
    },
    knowledgeTextNotRead: {
        color: '#FFFFFF'
    },
    knowledgeNextDay: {
        width: '90%',
        paddingLeft: 8,
        paddingRight: 24,
        paddingTop: 60,
        paddingBottom: 65.

    }
});
