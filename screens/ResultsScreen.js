import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback, ActivityIndicator,
} from 'react-native';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Modal from 'react-native-modal';
import ErrorModal from '../components/ErrorModal';
import LapRow from '../components/LapRow';
import MyLevelView from '../components/resultsScreen/MyLevelView';
import MyRank from '../components/resultsScreen/MyRank';
import CurrentRound from '../components/resultsScreen/CurrentRound';
import Laps from '../components/resultsScreen/Laps';
import QuestionSummaryItem from '../components/QuestionSummaryItem';
import QuestionLifebuoy from '../components/QuestionLifebuoy';
import QuestionTurbo from '../components/QuestionTurbo';
import Ranking from '../components/resultsScreen/Ranking';
import MyRanking from '../components/resultsScreen/MyRanking';

export default class ResultsScreen extends  React.Component {

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
            modalErrorVisible: false,
            error: '',
            rounds: '',
            points2level: {
                points: '',
                name: '',
            },
            content: 'ogolne',
            activeRound: '',
            showQuestions: false,
            showTest: false,
            questions: '',
            test: '',
            lifebuoy: '',
            turbo: '',
            rankingList: '',
            isLoading: true,
        }
    };

    setModal = (visible, header, answerOK, answerWrong, answerNO, maxPoints) => {
        this.setState({
            modalVisible: visible,
            modalHeader: header,
            modalAnswerOK: answerOK,
            modalAnswerWrong: answerWrong,
            modalAnswerNO: answerNO,
            modalMaxPoints: maxPoints,
        })
    };

    static objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    componentDidMount() {

        this.listenerFocus = this.props.navigation.addListener('focus', () => {

            if (this.props.route.params?.content) {
                this.setState({
                    content: this.props.route.params.content
                })
            }

            const queryString = ResultsScreen.objToQueryString({
                key: this.props.keyApp,
                token: this.props.token,
            });

            let url = `https://levelup.verbum.com.pl/api/user/userAccount?${queryString}`;

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
                            ranking: responseJson.userData.rank.position,
                            points: responseJson.userData.rank.points,
                            week: responseJson.userData.round,
                            knowledgeCount: responseJson.userData.knowledgeCount,
                            testCount: responseJson.userData.testCount,
                            level: responseJson.userData.rank.level,
                            rounds: responseJson.userData.rounds,
                            points2level: responseJson.userData.rank.points2level,
                            activeRound: responseJson.userData.round,
                        }, () => this.getActiveRound())
                    } else {
                        this.setState({
                            error: responseJson.error,
                        }, () => this.setModalErrorVisible(true))
                    }
                })
                .catch((error) => {
                    console.error(error);
                });

            url = `https://levelup.verbum.com.pl/api/user/ranking?${queryString}`;

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
                            rankingList: responseJson.data.rank,
                        },() => this.setState({isLoading: false}))
                    } else {
                        this.setState({
                            error: responseJson.error,
                        }, () => this.setModalErrorVisible(true), this.setState({isLoading: false}))
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {
            this.setState({isLoading: true,})
        });
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    createLapRows() {
        let lapRows = [];
        let item1;
        let item2;
        let item3;
        for (let i = 0; i < this.state.rounds.length; i+=3) {
            if (this.state.rounds[i] !== undefined) {
                item1 = this.state.rounds[i];
            } else {
                item1 = "EMPTY";
            }
            if (this.state.rounds[i+1] !== undefined) {
                item2 = this.state.rounds[i+1];
            } else {
                item2 = "EMPTY";
            }
            if (this.state.rounds[i+2] !== undefined) {
                item3 = this.state.rounds[i+2];
            } else {
                item3 = "EMPTY";
            }
            lapRows.push(<LapRow key={i} item1={item1} item2={item2} item3={item3} activeRound={this.state.activeRound} changeActiveRound={this.changeActiveRound.bind(this)}/>)
        }
        return lapRows
    }

    changeContent(content) {
        this.setState({
            content: content,
        })
    }

    changeActiveRound(round) {
        this.setState({
            activeRound: round,
        }, () => this.getActiveRound())
    }

    changeShowQuestions(show) {
        this.setState({
            showQuestions: show,
        })
    }

    changeShowTest(show) {
        this.setState({
            showTest: show,
        })
    }

    getActiveRound() {
        const queryString = ResultsScreen.objToQueryString({
            key: this.props.keyApp,
            token: this.props.token,
        });

        let url = `https://levelup.verbum.com.pl/api/challenge/roundId/${this.state.activeRound}?${queryString}`;

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
                        questions: responseJson.data.questions,
                        test: responseJson.data.test,
                    }, () => console.log(JSON.stringify(responseJson.data)))
                } else {
                    this.setState({
                        error: responseJson.error,
                    }, () => this.setModalErrorVisible(true))
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    createQuestionsList() {
        let questionSummaryList = [];
        for (let i in this.state.questions) {
            console.log(this.state.questions[i]);
            questionSummaryList.push(<QuestionSummaryItem
                key={i}
                navigation={this.props.navigation}
                points={this.state.questions[i].questions.points}
                correct={this.state.questions[i].questions.correct}
                number={i}
                model={this.state.questions[i].modelId}
                id={this.state.questions[i].id}
                status={this.state.questions[i].status}
            />);
        }
        return questionSummaryList;
    }

    createTestList() {
        let questionSummaryList = [];
        let number = 0;
        for (let i in this.state.test.questions) {
            console.log(i + " PYTANIE " + JSON.stringify(this.state.test.questions[i]));
            console.log(i);
            questionSummaryList.push(<QuestionSummaryItem
                key={i}
                navigation={this.props.navigation}
                points={this.state.test.questions[i].points}
                correct={this.state.test.questions[i].correct}
                number={i}
                model={this.state.test.modelId}
                id={this.state.test.id}
                status={this.state.test.status}
            />);
        }
        return questionSummaryList;
    }

    createQuestionLifebuoy() {
        let questionLifebuoy = [];
        let status = {
            id: this.state.lifebuoy.status,
        };
        questionLifebuoy.push(<QuestionLifebuoy
            key={1}
            navigation={this.props.navigation}
            id={this.state.lifebuoy.id}
            active={this.state.lifebuoy.isActive}
            model={this.state.lifebuoy.modelId}
            status={status}/>);
        return questionLifebuoy;
    }

    createQuestionTurbo() {
        let questionTurbo = [];
        let status = {
            id: this.state.turbo.status,
        };
        questionTurbo.push(<QuestionTurbo
            key={1}
            navigation={this.props.navigation}
            id={this.state.turbo.id}
            active={this.state.turbo.isActive}
            model={this.state.turbo.modelId}
            status={status}/>);
        return questionTurbo;
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    <Modal isVisible={this.state.modalVisible}>
                        <TouchableWithoutFeedback onPress={() => this.setModal(false, '','','','','')}>
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
                        <Text style={styles.levelText}>MOJE WYNIKI</Text>
                        <View style={[styles.chooseContentView]}>
                            <TouchableOpacity onPress={() => this.changeContent('ogolne')}>
                                <View style={[styles.chooseContentViewOne, (this.state.content === 'ogolne' ? styles.chooseContentViewActive : styles.chooseContentViewDisactive)]}>
                                    <Text style={[
                                        styles.chooseContentText,
                                        (this.state.content === 'ogolne' ? styles.chooseContentTextActive : styles.chooseContentTextDisactive)]}
                                    >OGÓLNE</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.changeContent('ranking')}>
                                <View style={[styles.chooseContentViewOne, (this.state.content === 'ranking' ? styles.chooseContentViewActive : styles.chooseContentViewDisactive)]}>
                                    <Text style={[
                                        styles.chooseContentText,
                                        (this.state.content === 'ranking' ? styles.chooseContentTextActive : styles.chooseContentTextDisactive)]}
                                    >RANKING</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.changeContent('rundy')}>
                                <View style={[styles.chooseContentViewOne, (this.state.content === 'rundy' ? styles.chooseContentViewActive : styles.chooseContentViewDisactive)]}>
                                    <Text style={[
                                        styles.chooseContentText,
                                        (this.state.content === 'rundy' ? styles.chooseContentTextActive : styles.chooseContentTextDisactive)]}
                                    >RUNDY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {this.state.content === 'ogolne' &&
                            <MyLevelView level={this.state.level} points2level={this.state.points2level}
                                 setModal={this.setModal}/>
                        }
                        {this.state.content === 'ogolne' &&
                            <MyRank points={this.state.points} ranking={this.state.ranking}/>
                        }
                        {this.state.content === 'ogolne' &&
                            <CurrentRound week={this.state.week}/>
                        }
                        {this.state.content === 'ranking' &&
                            <Ranking rankingList={this.state.rankingList}/>
                        }
                        {this.state.content === 'ranking' &&
                            <MyRanking ranking={this.state.ranking} points={this.state.points}/>
                        }
                        {this.state.content === 'rundy' &&
                            <Laps createLapRows={this.createLapRows()}/>
                        }
                        {this.state.content === 'rundy' &&
                            <View style={[styles.nextInfoView, styles.shadow, {paddingBottom: 10}]}>
                                <TouchableOpacity onPress={() => this.changeShowQuestions(!this.state.showQuestions)} style={[styles.buttonBase, {borderRadius: 25, borderWidth: 1, borderColor: '#2592E6', marginTop: 10}]}>
                                    <Text style={styles.buttonBaseText}>PYTANIA</Text>
                                </TouchableOpacity>
                                {this.state.showQuestions &&
                                <View style={{width: '90%'}}>
                                    {this.createQuestionsList()}
                                </View>
                                }
                                <TouchableOpacity onPress={() => this.changeShowTest(!this.state.showTest)} style={[styles.buttonBase, {borderRadius: 25, borderWidth: 1, borderColor: '#2592E6', marginTop: 10}]}>
                                    <Text style={styles.buttonBaseText}>TEST</Text>
                                </TouchableOpacity>
                                {this.state.showTest &&
                                <View style={{width: '90%'}}>
                                    {this.createTestList()}
                                </View>
                                }
                                <View style={styles.additionalQuestions}>
                                    {this.createQuestionLifebuoy()}
                                    {this.createQuestionTurbo()}
                                </View>
                            </View>
                        }
                        {/*<View style={[styles.nextInfoView, styles.shadow, {paddingBottom: 10}]}>
                            <Text style={{fontSize: 11, color: '#0E395A', marginTop: 10, marginLeft: 10}}>OKRĄŻENIA:</Text>
                            {this.createLapRows()}
                        </View>*/}
                    </View>
                </ScrollView>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active="RESULTS"/>
                {this.state.isLoading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='#0A3251'/>
                </View>
                }
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
        width: '90%',
        marginTop: 14,
        borderRadius: 9,
    },
    levelRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        alignItems: 'center'
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
        width: '90%',
        height: 50,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBaseText: {
        color: '#2592E6',
        fontWeight: 'bold',
        fontSize: 16
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
    levelInfoView: {
        alignItems: 'center'
    },
    slides: {
        paddingLeft: 30,
        paddingBottom: 30,
    },
    lapsRow: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between'
    },
    lapView: {
        alignItems: 'center',
        flex: 1,
    },
    lapText: {
        color: '#0A3251',
        fontSize: 12,
    },
    points2levelView: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    points2levelText: {
        color: '#0E395A',
        fontSize: 11,
    },
    chooseContentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
    },
    chooseContentViewOne: {
        height: 43,
        width: 103,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23
    },
    chooseContentViewActive: {
        backgroundColor: '#0A3251',
    },
    chooseContentViewDisactive: {
        backgroundColor: '#F3F3F3'
    },
    chooseContentText: {
        fontSize: 13,
    },
    chooseContentTextActive: {
        color: '#FFFFFF',
    },
    chooseContentTextDisactive: {
        color: '#0A3251',
    },
    additionalQuestions: {
        flexDirection: 'row',
        paddingLeft: 26,
        paddingRight: 26,
        width: '100%'
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
