import React from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';
import 'moment-countdown';

export default class ContactScreen extends  React.Component {

    constructor(props) {
        super(props);
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
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    <View style={[styles.mainView, {flex: 1}]}>
                        <Text style={styles.levelText}>KONTAKT</Text>
                        <View style={[styles.shadow, styles.contactView]}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Masz pytania?</Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>Napisz do nas lub zadzwoń!</Text>
                            <Text style={{fontSize: 16, marginBottom: 10}}>E-mail: biuro@verbum.com.pl</Text>
                            <Text style={{fontSize: 16}}>Infolinia: 61 8250 785</Text>
                        </View>
                    </View>
                </ScrollView>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
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
        borderRadius: 16,
        width: '90%',
        backgroundColor: '#FFFFFF',
        marginTop: 10
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
    contactView: {
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 14,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
});
