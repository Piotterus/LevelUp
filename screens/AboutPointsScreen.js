import React from 'react'

import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    ScrollView,
    Dimensions,
    Image,
    Switch,
    TouchableWithoutFeedback
} from 'react-native';

import Modal from 'react-native-modal';

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';

export default class AboutPointsScreen extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <Modal isVisible={modalVisible}>
                    <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#FFFFFF', height: 400, width: '90%', padding: 25, justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={{color: '#0E395A', fontSize: 18, marginTop: 5, marginBottom: 5}}>CHAMPION</Text>
                                    <View
                                        style={{
                                            borderBottomColor: '#0E395A',
                                            borderBottomWidth: 1,
                                            width: '100%'
                                        }}
                                    />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Odpowiedź POPRAWNA</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>6 pkt</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Odpowiedź NIEPOPRAWNA</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>3 pkt</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>BRAK Odpowiedzi</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>-3 pkt</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Maksymalna ilość pkt</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>78 pkt</Text>
                                    </View>
                                </View>
                                <View>
                                    <View
                                        style={{
                                            borderBottomColor: '#0E395A',
                                            borderBottomWidth: 1,
                                            width: '100%'
                                        }}
                                    />
                                    <TouchableOpacity style={{alignSelf: 'center', marginTop: 15}} onPress={() => this.setModalVisible(false)}>
                                        <Text style={{color: '#2592E6'}}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                    <View style={[styles.shadow, styles.aboutLaps]}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251'}}>Punktacja</Text>
                        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginTop: 8}}>
                            <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/Page-1.png')}/>
                            <View style={{flex: 4}}>
                                <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>STARTER</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź POPRAWNA</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>2 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź NIEPOPRAWNA</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>1 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Brak odpowiedzi</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>-1 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Maksymalna ilość pkt</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>26 pkt</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                            <TouchableHighlight style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                onPress={() => {
                                    this.setModalVisible(true);
                            }}>
                                <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/001-scooter.png')}/>
                            </TouchableHighlight>
                            <View style={{flex: 4}}>
                                <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>EXPERT</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź POPRAWNA</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>4 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź NIEPOPRAWNA</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>2 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Brak odpowiedzi</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>-2 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Maksymalna ilość pkt</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>52 pkt</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                            <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/003-car.png')}/>
                            <View style={{flex: 4}}>
                                <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>CHAMPION</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź POPRAWNA</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>8 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź NIEPOPRAWNA</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>4 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Brak odpowiedzi</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>-4 pkt</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>Maksymalna ilość pkt</Text>
                                    <Text style={{fontSize: 12, color: '#0E395A'}}>78 pkt</Text>
                                </View>
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
    },
})
