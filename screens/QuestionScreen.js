import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Question from '../components/Question';
import ErrorModal from '../components/ErrorModal';
import SafeAreaView from 'react-native-safe-area-view';

export default class QuestionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            model: '',
            id: '',
            question: '',
            questionCount: 1,
            questionNumber: 1,
            poll: {
                id: '',
                modelId: '',
                poll: [],
            },
            isLoading: true,
            questionsLoaded: false,
            questionList: [],
            modalErrorVisible: false,
            error: '',
        };
        this.selectAnswer = this.selectAnswer.bind(this)
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    componentDidMount() {

        const queryString = this.objToQueryString({
            key: this.props.keyApp,
            token: this.props.token,
        });
        this.listenerFocus = this.props.navigation.addListener('focus', () => {

            let url = `https://levelup.verbum.com.pl/api/challenge/actionId/${this.props.route.params.model}/${this.props.route.params.id}?${queryString}`;
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
                            model: responseJson.poll.modelId,
                            id: responseJson.poll.id,
                            status: responseJson.poll.status,
                            question: responseJson.poll.poll,
                            questionCount: responseJson.poll.poll.length,
                            poll: {
                                id: responseJson.poll.id,
                                modelId: responseJson.poll.modelId,
                                poll: [],
                            },
                            isLoading: false,
                        }, () => {

                                this.createPoll()
                        })
                    } else {
                        this.setState({
                            error: responseJson.error,
                            isLoading: false,
                        }, () => this.setModalErrorVisible(true))
                    }
                })
                .catch((error) => {
                    this.setState({isLoading: false});
                    console.error(error);
                });
        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {

            this.setState( {
                model: '',
                id: '',
                status: '',
                question: '',
                questionNumber: 1,
                poll: {
                    id: '',
                    modelId: '',
                    poll: [],
                },
                isLoading: true,
                questionsLoaded: false,
            })
        });
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
    }

    sendPoll() {
        let questionsAnswered = 0;
        let checkPoll = this.state.question;
        for (let i in checkPoll) {
            for (let j in checkPoll[i].answers) {
                if (checkPoll[i].answers[j].value === true) {
                    questionsAnswered++;
                    break;
                }
            }
        }
        if (questionsAnswered === this.state.questionNumber) {
            let poll = this.createPoll();

            const queryString = this.objToQueryString({
                key: this.props.keyApp,
                token: this.props.token,
            });
            let url = `https://levelup.verbum.com.pl/api/challenge/sendAction/${this.props.route.params.model}/${this.props.route.params.id}?${queryString}`;
            console.log(url);
            console.log(JSON.stringify(poll));
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(poll)
            })
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson.error.code === 0) {
                        this.props.navigation.navigate('TestSummary', {
                            results: responseJson.data.result,
                            sum: responseJson.data.sum,
                            model: this.props.route.params.model,
                            id: this.props.route.params.id,
                        });
                    } else {
                        this.setState({
                            error: responseJson.error,
                        }, () => this.setModalErrorVisible(true))
                    }
                })
                .catch((error) => {
                    this.setState({
                        isLoading: false,
                        error: {
                            code: "BŁĄD",
                            message: "WYSTĄPIŁ NIESPODZIEWANY BŁĄD"
                        }
                    }, () => this.setModalErrorVisible(true));
                });
        } else {
            let error = {
                message: "Zaznacz odpowiedź"
            };
            this.setState({
                error: error,
            }, () => this.setModalErrorVisible(true))
        }


    }

    createPoll() {
        let questions = [];
        let answers = [];
        for (let i in this.state.question) {
            answers = [];
            for (let j in this.state.question[i].answers) {
                answers.push({
                    id: this.state.question[i].answers[j].id,
                    correct: this.state.question[i].answers[j].correct,
                    value: this.state.question[i].answers[j].value,
                })
            }
            questions.push({
                id: this.state.question[i].id,
                type: this.state.question[i].type,
                answers: answers,
            });
        }
        let poll = {
            poll: {
                id: this.state.id,
                modelId: this.state.model,
                poll: questions
            }
        };
        this.setState({
            poll: poll,
        });
        return poll;
    }

    createQuestionList() {
        let number = 0;
        let questionList = [];
        for (let i in this.state.question) {
            number++;
            questionList.push(<Question key={i}
                                        navigation={this.props.navigation}
                                        id={this.state.question[i].id}
                                        number={number} text={this.state.question[i].text}
                                        type={this.state.question[i].type}
                                        image={this.state.question[i].image}
                                        questionCount={this.state.question.length}
                                        answers={this.state.question[i].answers}
                                        showQuestion={this.state.questionNumber}
                                        selectAnswer={this.selectAnswer}/>)
        }
        return questionList;
    }

    nextQuestion() {
        let questionsAnswered = 0;
        let poll = this.state.question;
        for (let i in poll) {
            for (let j in poll[i].answers) {
                if (poll[i].answers[j].value === true) {
                    questionsAnswered++;
                    break;
                }
            }
        }
        if (questionsAnswered === this.state.questionNumber) {
            this.setState({
                questionNumber: this.state.questionNumber + 1,
            });
        } else {
            let error = {
                message: "Zaznacz odpowiedź aby przejść dalej"
            };
            this.setState({
                error: error,
            }, () => this.setModalErrorVisible(true))
        }
    }

    prevQuestion() {
        this.setState({
            questionNumber: this.state.questionNumber - 1,
        });
        console.log("PREV QUESTION-" + this.state.questionNumber);
    }

    selectAnswer(idQuestion, idAnswer) {
        let poll = this.state.question;
        for (let i in poll) {
            if (poll[i].id === idQuestion) {
                if (poll[i].type === "radio") {
                    for (let j in poll[i].answers) {
                        if (poll[i].answers[j].id === idAnswer) {
                            poll[i].answers[j].value = !poll[i].answers[j].value;
                        } else {
                            poll[i].answers[j].value = false;
                        }
                    }
                } else if (poll[i].type === "check") {
                    for (let j in poll[i].answers) {
                        if (poll[i].answers[j].id === idAnswer) {
                            poll[i].answers[j].value = !poll[i].answers[j].value;
                        }
                    }
                }
            }
        }
        this.setState({
            question: poll
        })
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    buttonsNavigate() {
        let buttonList = [];
        if (this.state.questionCount > 1) {
            if (this.state.questionNumber > 1) {
                buttonList.push(<View key={2} style={{opacity: 1, flex: 1, padding: 10}}>
                    <TouchableOpacity
                        onPress={() => this.prevQuestion()}
                        style={[styles.buttonBase, styles.shadow, styles.buttonConsent, styles.buttonNavigate]}
                    >
                        <Text style={styles.buttonText}>WRÓĆ</Text>
                    </TouchableOpacity>
                </View>)
            } else {
                buttonList.push(<View key={2} style={{opacity: 0.5, flex: 1, padding: 10}}>
                    <TouchableOpacity
                        disabled={true}
                        style={[styles.buttonBase, styles.shadow, styles.buttonConsent, styles.buttonNavigate]}
                    >
                        <Text style={styles.buttonText}>WRÓĆ</Text>
                    </TouchableOpacity>
                </View>)
            }
            if (this.state.questionNumber < this.state.questionCount) {
                buttonList.push(<View key={1} style={{opacity: 1, flex: 1, padding: 10}}>
                    <TouchableOpacity
                        onPress={() => this.nextQuestion()}
                        style={[styles.buttonBase, styles.shadow, styles.buttonConsent, styles.buttonNavigate]}
                    >
                        <Text style={styles.buttonText}>DALEJ</Text>
                    </TouchableOpacity>
                </View>)
            } else {
                buttonList.push(<View key={1} style={{opacity: 0.5, flex: 1, padding: 10}}>
                    <TouchableOpacity
                        disabled={true}
                        style={[styles.buttonBase, styles.shadow, styles.buttonConsent, styles.buttonNavigate]}
                    >
                        <Text style={styles.buttonText}>DALEJ</Text>
                    </TouchableOpacity>
                </View>)
            }
        }
        return buttonList;
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#0A3251'}}>
                <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                        <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                        <HeaderBurger navigation={this.props.navigation}/>
                        <View style={[styles.knowledgeMain, {flex: 1}]}>
                            <Text style={styles.knowledgeHeaderText}>PYTANIA</Text>
                            <View style={[styles.shadow, styles.questionView]}>
                                {this.createQuestionList()}
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    {this.buttonsNavigate()}
                                </View>
                                {this.state.questionNumber >= this.state.questionCount &&
                                    <TouchableOpacity onPress={() => this.sendPoll()}
                                                      style={[styles.buttonBase, styles.shadow, styles.buttonConsent, {backgroundColor: '#0E395A', alignSelf: 'center'}]}>
                                        <Text style={styles.buttonText}>ZAPISZ ODPOWIEDŹ</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </ScrollView>
                    <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active="QUESTIONS"/>
                    {this.state.isLoading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='#0A3251'/>
                    </View>
                    }
                </SafeAreaView>
            </View>
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
    questionView: {
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
    headerText: {
        color: '#0A3251',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonConsent: {
        backgroundColor: '#2592E6',
        borderRadius: 25,
        height: 34,
        width: 305,
        marginBottom: 15,
        marginTop: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    questionHeaderText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0A3251'
    },
    questionText: {
        fontSize: 18,
        color: '#0A3251'
    },
    questionHint: {
        fontSize: 13,
        color: '#0A3251',
        marginBottom: 20,
    },
    answerView: {
        width: '100%',
        borderRadius: 9,
        zIndex: 1,
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 5,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    answerText: {
        flex: 1,
        fontSize: 16,
        color: '#0A3251'
    },
    buttonNavigate: {
        width: '100%',
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
