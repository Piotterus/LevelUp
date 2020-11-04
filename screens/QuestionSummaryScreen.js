import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';
import HTML from "react-native-render-html";
import QuestionListItem from '../components/QuestionListItem';
import Question from '../components/Question';
import Answer from '../components/Answer';
import ErrorModal from '../components/ErrorModal';
import QuestionSummary from '../components/QuestionSummary';

export default class QuestionSummaryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            model: this.props.route.params.model,
            id: this.props.route.params.id,
            pollId: this.props.route.params.pollId,
            points: this.props.route.params.points,
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
        console.log("COMPONENT DID MOUNT-" + this.state.questionNumber)
        this.listenerFocus = this.props.navigation.addListener('focus', () => {

            this.setState({
                results : this.props.route.params.results,
                sum: this.props.route.params.sum,
                model: this.props.route.params.model,
                id: this.props.route.params.id,
                pollId: this.props.route.params.pollId,
                points: this.props.route.params.points,
            });

            //console.log("PARAM FOCUS");
            //console.log(this.props.route.params.id);
            //console.log("END PARAM FOCUS");
            let url = `https://levelup.verbum.com.pl/api/challenge/actionId/${this.props.route.params.model}/${this.props.route.params.id}?${queryString}`;
            console.log(url);
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    console.log(JSON.stringify(responseJson));
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
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {
            //console.log("PARAM BLUR");
            //console.log(this.props.route.params.id);
            //console.log("END PARAM BLUR");
            this.setState( {
                model: '',
                id: '',
                pollId: '',
                points: '',
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

    createQuestionList() {
        let number = 0;
        let questionList = [];
        console.log("createQuestion");
        for (let i in this.state.question) {
            number = parseInt(this.state.pollId) + 1
            questionList.push(<QuestionSummary
                key={i}
                navigation={this.props.navigation}
                id={this.state.question[i].id}
                number={number}
                text={this.state.question[i].text}
                type={this.state.question[i].type}
                image={this.state.question[i].image}
                questionCount={this.state.question.length}
                answers={this.state.question[i].answers}
            />)
        }
        return questionList;
    }

    createTestList() {
        let number = 0;
        let questionList = [];
        console.log("createTestQuestion");
        for (let i in this.state.question) {
            number++;
            console.log(this.state.pollId)
            if (i === this.state.pollId) {
                questionList.push(<QuestionSummary
                    key={i}
                    navigation={this.props.navigation}
                    id={this.state.question[i].id}
                    number={number}
                    text={this.state.question[i].text}
                    type={this.state.question[i].type}
                    image={this.state.question[i].image}
                    questionCount={this.state.question.length}
                    answers={this.state.question[i].answers}
                />)
            }


        }
        return questionList;
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    render() {
        return(
            <ScrollView style={{backgroundColor: '#FFFFFF'}} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{marginBottom: 55}}>
                </View>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <View style={[styles.questionView]}>
                        {this.props.route.params.model === 1 &&
                            this.createQuestionList()
                        }
                        {this.props.route.params.model === 4 &&
                            this.createTestList()
                        }

                        <Text style={{color: '#0A3251', fontSize: 24, textAlign: 'center'}}>Zdobyte punkty:</Text>
                        {(this.props.route.params.model === 1 && this.state.question !== '') &&
                            <Text style={{color: '#0A3251', fontSize: 47, textAlign: 'center', fontWeight: 'bold', marginBottom: 30}}>{this.state.question['0'].points}<Text style={{fontSize: 24}}>pkt</Text></Text>
                        }
                        {(this.props.route.params.model === 4 && this.state.question !== '') &&
                            <Text style={{color: '#0A3251', fontSize: 47, textAlign: 'center', fontWeight: 'bold', marginBottom: 30}}>{this.state.question[this.state.pollId].points}<Text style={{fontSize: 24}}>pkt</Text></Text>
                        }
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                                          style={[styles.buttonBase, styles.shadow, styles.buttonConsent]}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    }
})
