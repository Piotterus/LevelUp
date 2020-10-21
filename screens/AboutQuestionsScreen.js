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
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';

import Modal from 'react-native-modal';
import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import ErrorModal from '../components/ErrorModal';

export default class AboutQuestionsScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            modalVisible: false,
            modalHeader: "",
            modalText: "",
            modalErrorVisible: false,
            error: '',
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setModalHeader = (text) => {
        this.setState({ modalHeader: text });
    }

    setModalText = (text) => {
        this.setState({ modalText: text });
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    }

    render() {
        const { modalVisible, modalHeader, modalText } = this.state;
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <Modal isVisible={modalVisible}>
                    <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#FFFFFF', height: 400, width: '90%', padding: 25, justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={{color: '#0E395A', fontSize: 18, fontWeight: 'bold', marginTop: 5, marginBottom: 5}}>{modalHeader}</Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 14, marginTop: 5, marginBottom: 5}}>
                                            {modalText}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={{alignSelf: 'center', marginTop: 15}} onPress={() => this.setModalVisible(false)}>
                                        <Text style={{color: '#2592E6', fontSize: 18}}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <Text style={styles.knowledgeHeaderText}>Pytania</Text>
                    <View style={[styles.shadow, styles.aboutLaps]}>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                            onPress={() => {
                                                this.setModalVisible(true);
                                                this.setModalHeader("1. Co to jest Level.UP?");
                                                this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                            }}>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>1.</Text>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>Co to jest Level.UP?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                  onPress={() => {
                                                      this.setModalVisible(true);
                                                      this.setModalHeader("2. Jak długo trwa gra?");
                                                      this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                                  }}>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>2.</Text>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>Jak długo trwa gra?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                  onPress={() => {
                                                      this.setModalVisible(true);
                                                      this.setModalHeader("3. Czy certyfikat dostanę dopiero po dwóch rozgrywkach?");
                                                      this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                                  }}>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>3.</Text>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>Czy certyfikat dostanę dopiero po dwóch rozgrywkach?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                  onPress={() => {
                                                      this.setModalVisible(true);
                                                      this.setModalHeader("4. Czy jest jakaś strona internetowa lub aplikacja mobilna?");
                                                      this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                                  }}>
                        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                            <Text style={{fontSize: 14, color: '#0A3251'}}>4.</Text>
                            <Text style={{fontSize: 14, color: '#0A3251'}}>Czy jest jakaś strona internetowa lub aplikacja mobilna?</Text>
                        </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                  onPress={() => {
                                                      this.setModalVisible(true);
                                                      this.setModalHeader("5. Czy w Level.UP są jakieś poziomy?");
                                                      this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                                  }}>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>5.</Text>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>Czy w Level.UP są jakieś poziomy?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                  onPress={() => {
                                                      this.setModalVisible(true);
                                                      this.setModalHeader("6. Czy na każdym poziomie dostanę za podejmowanie wyzwania taką samą ilość punktów?");
                                                      this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                                  }}>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>6.</Text>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>Czy na każdym poziomie dostanę za podejmowanie wyzwania taką samą ilość punktów?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                  onPress={() => {
                                                      this.setModalVisible(true);
                                                      this.setModalHeader("7. A za co dostaję punkty?");
                                                      this.setModalText("To gra treningowa, w której otrzymasz wiedzę o niezawodnych oponach i procesie sprzedażowym, dzięki któremu twoje relacje z klientami dostaną extra doładowanie poprawiając twoją skuteczność. Mało? Tu uważaj teraz: dostaniesz Złoty Certyfikat CHAMPION Akademii GOODYEAR i atrakcyjne nagrody. Wystarczy, że zalogujesz się i rozpoczniesz grę. Jak grać dowiesz się już za chwilę.")
                                                  }}>
                            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#0A3251', paddingBottom: 5, paddingTop: 5}}>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>7.</Text>
                                <Text style={{fontSize: 14, color: '#0A3251'}}>A za co dostaję punkty?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{marginTop: 150, marginBottom: 16, flexDirection: 'row', justifyContent: 'center'}}>
                            <View opacity={1.0} style={[styles.circle]}></View>
                            <View opacity={0.45} style={[styles.circle]}></View>
                            <View opacity={0.45} style={[styles.circle]}></View>
                        </View>
                    </View>
                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
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
})
