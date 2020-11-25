import React from 'react'

import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';

export default class EnterKnowledgeScreen extends React.Component {

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
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75, backgroundColor: '#FFFFFF'}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    <View style={[styles.knowledgeView, {flex: 1}]}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.knowledgeNav}>
                            <Image source={require('../icons/back_back.png')}/>
                            <Text style={{fontSize: 13, color: '#5E6367', marginLeft: 15}}>WRÓĆ</Text>
                        </TouchableOpacity>
                        <View style={[styles.knowledgeMain, styles.shadow]}>
                            <Text style={{fontSize: 36, color: '#0A3251', marginTop: 34}}>WIEDZA</Text>
                            <Image source={require('../icons/wiedza.png')}/>
                            <Text style={{fontSize: 17, color: '#0E395A', textAlign: 'center', marginBottom: 20}}>Tu dowiesz się wszystkiego co niezbędne, by wziąć udział w teście i osiągnąć znakomity wynik.</Text>
                            <Text style={{fontSize: 17, color: '#0E395A', textAlign: 'center'}}>Widzisz czerwony przycisk? W takim razie kolejna porcja wiedzy czeka na Ciebie, nie zwlekaj i ruszaj!</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ChooseKnowledge")} style={[styles.buttonBase, styles.shadow, {backgroundColor: '#2592E6', marginTop: 41, marginBottom: 42}]}>
                                <Text style={{color: '#FFFFFF', fontSize: 13}}>WEJDŹ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active="KNOWLEDGE"/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    knowledgeView: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginBottom: 20
    },
    knowledgeNav: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 25,
        alignSelf: 'flex-start',
    },
    knowledgeMain: {
        marginTop: 25,
        alignItems: 'center',
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
    buttonBase: {
        width: 305,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
