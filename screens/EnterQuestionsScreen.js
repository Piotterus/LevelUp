import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import QuestionListItem from '../components/QuestionListItem';
import ErrorModal from '../components/ErrorModal';
import QuestionTurbo from '../components/QuestionTurbo';
import QuestionLifebuoy from '../components/QuestionLifebuoy';

export default class EnterQuestionsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionList: '',
            modalErrorVisible: false,
            error: '',
        }

    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    componentDidMount() {

        this.listenerFocus = this.props.navigation.addListener('focus', () => {

            const queryString = this.objToQueryString({
                key: this.props.keyApp,
                token: this.props.token,
            });

            let url = `https://levelup.verbum.com.pl/api/challenge/actionList?${queryString}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({
                        questionList: responseJson.list,
                    })
                })
                .catch((error) => {
                    console.error(error);
                });

        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {

        });
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
    }

    createQuestionList() {
        let questionList = []
        for (let i in this.state.questionList) {
            if (this.state.questionList[i].modelId === 1 || this.state.questionList[i].modelId === 4) {
                questionList.push(<QuestionListItem key={i}
                                                    navigation={this.props.navigation}
                                                    id={this.state.questionList[i].id}
                                                    active={this.state.questionList[i].isActive}
                                                    activeText={this.state.questionList[i].status.title}
                                                    number={this.state.questionList[i].number}
                                                    model={this.state.questionList[i].modelId}
                                                    status={this.state.questionList[i].status}/>)
            }
        }
        return questionList;
    }

    createQuestionLifebuoy() {
        let questionLifebuoy = []
        for (let i in this.state.questionList) {
            if (this.state.questionList[i].modelId === 3) {
                questionLifebuoy.push(<QuestionLifebuoy key={i}
                                                    navigation={this.props.navigation}
                                                    id={this.state.questionList[i].id}
                                                    active={this.state.questionList[i].isActive}
                                                    activeText={this.state.questionList[i].status.title}
                                                    number={this.state.questionList[i].number}
                                                    model={this.state.questionList[i].modelId}
                                                    status={this.state.questionList[i].status}/>)
            }
        }
        return questionLifebuoy;
    }

    createQuestionTurbo() {
        let questionTurbo = []
        for (let i in this.state.questionList) {
            if (this.state.questionList[i].modelId === 2 ) {
                questionTurbo.push(<QuestionTurbo key={i}
                                                    navigation={this.props.navigation}
                                                    id={this.state.questionList[i].id}
                                                    active={this.state.questionList[i].isActive}
                                                    activeText={this.state.questionList[i].status.title}
                                                    number={this.state.questionList[i].number}
                                                    model={this.state.questionList[i].modelId}
                                                    status={this.state.questionList[i].status}/>)
            }
        }
        return questionTurbo;
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    getTestResults(id) {
        const queryString = this.objToQueryString({
            key: this.props.keyApp,
            token: this.props.token,
        });


    }

    render() {
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderBurger navigation={this.props.navigation}/>
                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.knowledgeNav}>
                        <Image source={require('../icons/back_back.png')}/>
                        <Text style={{fontSize: 13, color: '#5E6367', marginLeft: 15}}>WRÓĆ</Text>
                    </TouchableOpacity>
                    <View style={[styles.shadow, styles.questionMain]}>
                        <Text style={styles.knowledgeHeaderText}>TESTUJ WIEDZĘ</Text>
                        <Text style={styles.knowledgeText}>Przygotuj się i daj z siebie wszystko, by zadbać o doskonały wynik, bo na te pytania możesz odpowiedzieć tylko raz!</Text>
                        {this.createQuestionList()}
                        <View style={styles.additionalQuestions}>
                            {this.createQuestionLifebuoy()}
                            {this.createQuestionTurbo()}
                        </View>
                    </View>
                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}  active={"QUESTIONS"}/>
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
        fontSize: 36,
        color: '#0E395A',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    questionMain: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        marginTop: 25
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
    knowledgeDesc: {
        flex: 1,
        paddingLeft: 26,
        paddingRight: 26,
    },
    knowledgeDescText: {
        color: '#0E395A'
    },
    buttonBase: {
        width: '100%',
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',

    },
    questionOne: {
        width: '100%',
        paddingLeft: 26,
        paddingRight: 26,
        marginBottom: 15
    },
    knowledgeText: {
        fontSize: 15,
        color: '#0E395A',
        textAlign: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    knowledgeNav: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 25,
        alignSelf: 'flex-start',
    },
    additionalQuestions: {
        flexDirection: 'row',
        paddingLeft: 26,
        paddingRight: 26,
        width: '100%'
    }
});
