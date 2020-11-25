import React from 'react'

import {Text, View, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';

export default class AboutLevelsScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            modalErrorVisible: false,
            error: '',
        }
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    <View style={[styles.knowledgeMain, {flex: 1}]}>
                        <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                        <View style={[styles.shadow, styles.aboutLaps]}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251'}}>Punktacja</Text>
                            <Text style={{fontSize: 16, color: '#0A3251'}}>Level.UP to dobra gra - na wyższych poziomach gry dostajesz więcej punktów za te same działania.</Text>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginTop: 8}}>
                                <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/Page-1.png')}/>
                                <View style={{flex: 3}}>
                                    <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>STARTER</Text>
                                    <Text style={{fontSize: 14, color: '#0E395A'}}>Quickly reintermediate low-risk high-yield technology without turnkey technologies.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/001-scooter.png')}/>
                                <View style={{flex: 3}}>
                                    <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>EXPERT</Text>
                                    <Text style={{fontSize: 14, color: '#0E395A'}}>Quickly reintermediate low-risk high-yield technology without turnkey technologies.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/003-car.png')}/>
                                <View style={{flex: 3}}>
                                    <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>CHAMPION</Text>
                                    <Text style={{fontSize: 14, color: '#0E395A'}}>Quickly reintermediate low-risk high-yield technology without turnkey technologies.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
            </SafeAreaView>
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

    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 14/2,
        backgroundColor: '#2592E6',
        marginRight: 7,
        marginLeft: 7,
    }
});
