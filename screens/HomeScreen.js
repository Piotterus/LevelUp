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
    TouchableWithoutFeedback, TouchableHighlight,
} from 'react-native';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Modal from 'react-native-modal';

export default class HomeScreen extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalHeader: "",
            modalAnswerOK: "",
            modalAnswerWrong: "",
            modalAnswerNO: "",
            modalMaxPoints: "",
            ranking: "",
            points: "",
            week: "",
            knowledgeCount: 0,
            testCount: 0,
            level: "",
        }

    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setModalHeader = (text) => {
        this.setState({ modalHeader: text });
    }

    setModalAnswerOK = (text) => {
        this.setState({ modalAnswerOK: text });
    }

    setModalAnswerWrong = (text) => {
        this.setState({ modalAnswerWrong: text });
    }

    setModalAnswerNO = (text) => {
        this.setState({ modalAnswerNO: text });
    }

    setModalMaxPoints = (text) => {
        this.setState({ modalMaxPoints: text });
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    /*componentDidMount() {

        const queryString = this.objToQueryString({
            key: '5cac17d3c3729f4ffd74fa949a212cd0758f5d79',
            token: '4523d400add1288fb4e0ac94ce60e31e4f93a8ca',
        });

        let url = `http://good-game.mgnetworks-vps.ogicom.pl/api/user/userAccount?${queryString}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    ranking: responseJson.userData.rank.position,
                    points: responseJson.userData.rank.points,
                    week: responseJson.userData.round,
                    knowledgeCount: responseJson.userData.knowledgeCount,
                    testCount: responseJson.userData.testCount,
                    level: responseJson.userData.rank.level,

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <Modal isVisible={this.state.modalVisible}>
                    <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#FFFFFF', height: 400, width: '90%', padding: 25, justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={{color: '#0E395A', fontSize: 18, marginTop: 5, marginBottom: 5}}>{this.state.modalHeader}</Text>
                                    <View
                                        style={{
                                            borderBottomColor: '#0E395A',
                                            borderBottomWidth: 1,
                                            width: '100%'
                                        }}
                                    />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Odpowiedź POPRAWNA</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>{this.state.modalAnswerOK} pkt</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Odpowiedź NIEPOPRAWNA</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>{this.state.modalAnswerWrong} pkt</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>BRAK Odpowiedzi</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>{this.state.modalAnswerNO} pkt</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Maksymalna ilość pkt</Text>
                                        <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>{this.state.modalMaxPoints} pkt</Text>
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
                <View style={styles.mainView}>
                    <Text style={styles.levelText}>AKTUALNY POZIOM</Text>
                    <View style={styles.levelView}>
                        <View style={styles.onelevelView}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text>STARTER </Text>
                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setModalVisible(true);
                                                        this.setModalHeader("STARTER");
                                                        this.setModalAnswerOK("2");
                                                        this.setModalAnswerWrong("1");
                                                        this.setModalAnswerNO("-1");
                                                        this.setModalMaxPoints("26");
                                                    }}>
                                    <Image source={require('../icons/info.png')}/>
                                </TouchableHighlight>
                            </View>
                            {this.state.level == "starter" &&
                            <TouchableHighlight style={{flex: 1, justifyContent: 'flex-end'}}
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                    this.setModalHeader("STARTER");
                                                    this.setModalAnswerOK("2");
                                                    this.setModalAnswerWrong("1");
                                                    this.setModalAnswerNO("-1");
                                                    this.setModalMaxPoints("26");
                                                }}>
                                <View style={styles.rectangleView}>
                                </View>
                            </TouchableHighlight>
                            }
                        </View>
                        <View style={styles.lineView}>
                        </View>
                        <View style={styles.onelevelView}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text>EXPERT </Text>
                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setModalVisible(true);
                                                        this.setModalHeader("EXPERT");
                                                        this.setModalAnswerOK("4");
                                                        this.setModalAnswerWrong("2");
                                                        this.setModalAnswerNO("-2");
                                                        this.setModalMaxPoints("52");
                                                    }}>
                                    <Image source={require('../icons/info.png')}/>
                                </TouchableHighlight>
                            </View>
                            {this.state.level == "expert" &&
                            <TouchableHighlight style={{flex: 1, justifyContent: 'flex-end'}}
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                    this.setModalHeader("EXPERT");
                                                    this.setModalAnswerOK("4");
                                                    this.setModalAnswerWrong("2");
                                                    this.setModalAnswerNO("-2");
                                                    this.setModalMaxPoints("52");
                                                }}>
                                <View style={styles.rectangleView}>
                                </View>
                            </TouchableHighlight>
                            }
                        </View>
                        <View style={styles.lineView}>
                        </View>
                        <View style={styles.onelevelView}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text>CHAMPION </Text>
                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setModalVisible(true);
                                                        this.setModalHeader("EXPERT");
                                                        this.setModalAnswerOK("4");
                                                        this.setModalAnswerWrong("2");
                                                        this.setModalAnswerNO("-2");
                                                        this.setModalMaxPoints("52");
                                                    }}>
                                    <Image source={require('../icons/info.png')}/>
                                </TouchableHighlight>
                            </View>
                            {this.state.level == "champion" &&
                            <TouchableHighlight style={{flex: 1, justifyContent: 'flex-end'}}
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                    this.setModalHeader("CHAMPION");
                                                    this.setModalAnswerOK("8");
                                                    this.setModalAnswerWrong("4");
                                                    this.setModalAnswerNO("-4");
                                                    this.setModalMaxPoints("78");
                                                }}>
                                <View style={styles.rectangleView}>
                                </View>
                            </TouchableHighlight>
                            }
                        </View>
                    </View>
                    <View style={[styles.nextInfoView, styles.shadow, {paddingBottom: 10, marginTop: 26}]}>
                        <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>NASTĘPNY TEST JUŻ ZA:</Text>
                        <View style={styles.timeView}>
                            <Image style={{marginTop: 12}} source={require('../icons/001-wall-clock_time.png')}/>
                            <View style={styles.timeTextView}>
                                <Text style={styles.timeTopText}>
                                    12
                                </Text>
                                <Text style={styles.timeBotText}>
                                    DNI
                                </Text>
                            </View>
                            <View style={styles.timeTextView}>
                                <Text style={styles.timeTopText}>
                                    22
                                </Text>
                                <Text style={styles.timeBotText}>
                                    GODZIN
                                </Text>
                            </View>
                            <View style={styles.timeTextView}>
                                <Text style={styles.timeTopText}>
                                    04
                                </Text>
                                <Text style={styles.timeBotText}>
                                    MINUT
                                </Text>
                            </View>
                            <View style={styles.timeTextView}>
                                <Text style={styles.timeTopText}>
                                    56
                                </Text>
                                <Text style={styles.timeBotText}>
                                    SEKUND
                                </Text>
                            </View>
                        </View>
                        <View style={styles.knowledgeView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseKnowledge')} style={[styles.buttonBase, {borderColor: '#0E395A', borderWidth: 1}]}>
                                <Text style={{color: '#0E395A', fontSize: 13}}>ZDOBĄDŹ WIEDZĘ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')} style={[styles.buttonBase, {backgroundColor: '#E20000'}, styles.shadow]}>
                                <Text style={{color: '#FFFFFF', fontSize: 13}}>TESTUJ WIEDZĘ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.nextInfoView, styles.shadow, {paddingBottom: 10}]}>
                        <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>TWOJA POZYCJA W RANKINGU:</Text>
                        <View style={[styles.timeView]}>
                            <View style={{flex: 1}}>
                                <Image style={{marginTop: 12, alignContent: 'flex-end'}} source={require('../icons/001-wall-clock_podium.png')}/>
                            </View>
                            <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.ranking}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        MIEJSCE
                                    </Text>
                                </View>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.points}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        PUNKTÓW
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.knowledgeView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Ranking')} style={[styles.buttonBase, {backgroundColor: '#2592E6'}, styles.shadow]}>
                                <Text style={{color: '#FFFFFF', fontSize: 13}}>ZOBACZ RANKING</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.nextInfoView, styles.shadow, {paddingBottom: 10}]}>
                        <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>AKTUALNA RUNDA:</Text>
                        <View style={[styles.timeView]}>
                            <View style={{flex: 1}}>
                                <Image style={{marginTop: 12, alignContent: 'flex-end'}} source={require('../icons/001-wall-clock_race.png')}/>
                            </View>
                            <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.week}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        RUNDA
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.knowledgeView}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Ranking')} style={[styles.buttonBase, {backgroundColor: '#2592E6'}, styles.shadow]}>
                                <Text style={{color: '#FFFFFF', fontSize: 13}}>MAPA GRY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Footer knowledgeCount={this.state.knowledgeCount} testCount={this.state.testCount} navigation={this.props.navigation}/>
            </ScrollView>
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
        marginTop: 10,
        width: '90%',
        borderRadius: 9,
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
    }
});
