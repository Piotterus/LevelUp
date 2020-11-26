import React from 'react';

import {
    ActivityIndicator,
    Image, SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Modal from 'react-native-modal';
import ErrorModal from '../components/ErrorModal';
import moment from 'moment/moment.js';
import 'moment-countdown';

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
            date2Go: "",
            date2GoType: "",
            modalErrorVisible: false,
            error: '',
            countdown: '',
            showInfo: false,
            isLoading: true,
        }

    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    setModalHeader = (text) => {
        this.setState({ modalHeader: text });
    };

    setModalAnswerOK = (text) => {
        this.setState({ modalAnswerOK: text });
    };

    setModalAnswerWrong = (text) => {
        this.setState({ modalAnswerWrong: text });
    };

    setModalAnswerNO = (text) => {
        this.setState({ modalAnswerNO: text });
    };

    setModalMaxPoints = (text) => {
        this.setState({ modalMaxPoints: text });
    };

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    componentDidMount() {

        this.setState({
            showInfo: true,
        });

        this.listenerFocus = this.props.navigation.addListener('focus', () => {

            const queryString = this.objToQueryString({
                key: this.props.keyApp,
                token: this.props.token,
            });

            let url = `https://levelup.verbum.com.pl/api/user/dashboard?${queryString}`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson.error.code === 0) {
                        this.setState({
                            ranking: responseJson.dashboard.position,
                            points: responseJson.dashboard.points,
                            week: responseJson.dashboard.round,
                            knowledgeCount: responseJson.dashboard.knowledgeCount,
                            testCount: responseJson.dashboard.testCount,
                            level: responseJson.dashboard.level,
                            date2Go: responseJson.dashboard.clock.date2Go,
                            date2GoType: responseJson.dashboard.clock.type,
                        }, () => {this.updateApp(this.state.knowledgeCount, this.state.testCount, this.state.week); this.setState({isLoading: false})})
                    } else {
                        this.setState({
                            isLoading: false,
                            error: responseJson.error,
                        }, () => this.setModalErrorVisible(true))
                    }
                })
                .catch((error) => {
                    this.setState({isLoading: false});
                    //console.error(error);
                });

            url = `https://levelup.verbum.com.pl/api/user/userData?${queryString}`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    this.props.updateDrawer(responseJson.user.firstname, responseJson.user.lastname)
                })
                .catch((error) => {
                    //console.error(error);
                });
        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {
            this.setState({
                showInfo: false,
                isLoading: true,
            })
        });
        this.interval = setInterval(() => this.setCountDown(), 1000);
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
        clearInterval(this.interval);
    }

    updateApp(knowledgeCount,testCount,week) {
        this.props.updateFooter(knowledgeCount,testCount)
        this.props.updateWeek(week)
    }

    setCountDown() {
        if (this.state.date2Go !== undefined) {
            this.setState({
                countdown: moment().countdown(this.state.date2Go)
            })
        } else {
            this.setState({
                countdown: moment().countdown()
            })
        }
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} style={{marginBottom: 75}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    {this.state.showInfo &&
                        <Info/>
                    }
                    <Modal isVisible={this.state.modalVisible}>
                        <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{backgroundColor: '#FFFFFF', height: 400, width: '90%', padding: 25, justifyContent: 'space-between'}}>
                                    <View>
                                        <Text style={{color: '#0E395A', fontSize: 18, marginTop: 5, marginBottom: 5, fontWeight: 'bold'}}>{this.state.modalHeader}</Text>
                                        <View
                                            style={{
                                                borderBottomColor: '#0E395A',
                                                borderBottomWidth: 1,
                                                width: '100%'
                                            }}
                                        />
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Odpowiedź POPRAWNA</Text>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5, fontWeight: 'bold'}}>{this.state.modalAnswerOK} pkt</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Odpowiedź NIEPOPRAWNA</Text>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5, fontWeight: 'bold'}}>{this.state.modalAnswerWrong} pkt</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>BRAK Odpowiedzi</Text>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5, fontWeight: 'bold'}}>{this.state.modalAnswerNO} pkt</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5}}>Maksymalna ilość pkt</Text>
                                            <Text style={{color: '#0E395A', fontSize: 15, marginTop: 5, marginBottom: 5, fontWeight: 'bold'}}>{this.state.modalMaxPoints} pkt</Text>
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
                                            <Text style={{color: '#2592E6', fontSize: 18}}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    <View style={[styles.mainView, {flex: 1}]}>
                        <Text style={styles.levelText}>AKTUALNY POZIOM</Text>
                        <View style={styles.levelView}>
                            <View style={styles.onelevelView}>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <Text onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalHeader("STARTER");
                                        this.setModalAnswerOK("2");
                                        this.setModalAnswerWrong("1");
                                        this.setModalAnswerNO("-1");
                                        this.setModalMaxPoints("26");
                                    }} style={{color: '#0E395A'}}>STARTER</Text>
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
                                {this.state.level === "starter" &&
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
                                    <Text onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalHeader("EXPERT");
                                        this.setModalAnswerOK("4");
                                        this.setModalAnswerWrong("2");
                                        this.setModalAnswerNO("-2");
                                        this.setModalMaxPoints("52");
                                    }} style={{color: '#0E395A'}}>EXPERT </Text>
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
                                {this.state.level === "expert" &&
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
                                    <Text onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalHeader("CHAMPION");
                                        this.setModalAnswerOK("8");
                                        this.setModalAnswerWrong("4");
                                        this.setModalAnswerNO("-4");
                                        this.setModalMaxPoints("78");
                                    }} style={{color: '#0E395A'}}>CHAMPION </Text>
                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                            this.setModalHeader("CHAMPION");
                                            this.setModalAnswerOK("8");
                                            this.setModalAnswerWrong("4");
                                            this.setModalAnswerNO("-4");
                                            this.setModalMaxPoints("78");
                                        }}>
                                        <Image source={require('../icons/info.png')}/>
                                    </TouchableHighlight>
                                </View>
                                {this.state.level === "champion" &&
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
                        <View style={[styles.shadow, styles.nextInfoView, {paddingBottom: 10, marginTop: 16, width: '90%'}]}>
                            {this.state.date2GoType === 'start' &&
                                <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>
                                    TWOJA GRA ROZPOCZNIE SIĘ ZA:
                                </Text>
                            }
                            {this.state.date2GoType === 'endQuestion' &&
                                <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>
                                    TWÓJ CZAS NA PYTANIA:
                                </Text>
                            }
                            {this.state.date2GoType === 'endTest' &&
                                <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>
                                    TWÓJ CZAS NA TEST:
                                </Text>
                            }
                            <View style={styles.timeView}>
                                <Image style={{marginTop: 12}} source={require('../icons/001-wall-clock_time.png')}/>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.countdown.days}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        DNI
                                    </Text>
                                </View>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.countdown.hours}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        GODZIN
                                    </Text>
                                </View>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.countdown.minutes}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        MINUT
                                    </Text>
                                </View>
                                <View style={styles.timeTextView}>
                                    <Text style={styles.timeTopText}>
                                        {this.state.countdown.seconds}
                                    </Text>
                                    <Text style={styles.timeBotText}>
                                        SEKUND
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.knowledgeView}>
                                {this.props.knowledgeCount === 0 &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseKnowledge')}
                                                  style={[styles.buttonBase, {borderColor: '#0E395A', borderWidth: 1}]}>
                                    <Text style={{color: '#0E395A', fontSize: 13}}>ZDOBĄDŹ WIEDZĘ</Text>
                                </TouchableOpacity>
                                }
                                {this.props.knowledgeCount > 0 &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseKnowledge')}
                                                  style={[styles.buttonBase, styles.shadow, {backgroundColor: '#E20000'}]}>
                                    <Text style={{color: '#FFFFFF', fontSize: 13}}>ZDOBĄDŹ WIEDZĘ</Text>
                                </TouchableOpacity>
                                }
                                {this.props.testCount === 0 &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')}
                                                  style={[styles.buttonBase, {borderColor: '#0E395A', borderWidth: 1}]}>
                                    <Text style={{color: '#0E395A', fontSize: 13}}>TESTUJ WIEDZĘ</Text>
                                </TouchableOpacity>
                                }
                                {this.props.testCount > 0 &&
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')}
                                                  style={[styles.buttonBase, styles.shadow, {backgroundColor: '#E20000'}]}>
                                    <Text style={{color: '#FFFFFF', fontSize: 13}}>TESTUJ WIEDZĘ</Text>
                                </TouchableOpacity>
                                }
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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Results', {content: "ranking"})} style={[styles.buttonBase, styles.shadow, {backgroundColor: '#2592E6'}]}>
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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Results', {content: "rundy"})} style={[styles.buttonBase, styles.shadow, {backgroundColor: '#2592E6'}]}>
                                    <Text style={{color: '#FFFFFF', fontSize: 13}}>MAPA GRY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
                {this.state.isLoading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='#0A3251'/>
                </View>
                }
            </SafeAreaView>
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
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A3A3A3',
        opacity: 0.25
    }
});
