import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import KnowledgeListItem from '../components/KnowledgeListItem';
import ErrorModal from '../components/ErrorModal';

export default class ChooseKnowledgeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            knowledgeList: '',
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

            let url = `https://levelup.verbum.com.pl/api/challenge/learningList?${queryString}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({
                        knowledgeList: responseJson.list,
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

    createKnowledgeList() {
        let knowledgeList = []
        for (let i in this.state.knowledgeList) {
            knowledgeList.push(<KnowledgeListItem
                key={i}
                navigation={this.props.navigation}
                id={this.state.knowledgeList[i].id}
                active={this.state.knowledgeList[i].isActive}
                knowledgeTitle={this.state.knowledgeList[i].title}
                activeText={this.state.knowledgeList[i].status.title}
                shortContent={this.state.knowledgeList[i].shortContent}
                status={this.state.knowledgeList[i].status}
                day={this.state.knowledgeList[i].day}
                date={this.state.knowledgeList[i].dateFrom}
            />)
        }
        return knowledgeList;
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    }

    render() {
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderBurger navigation={this.props.navigation}/>
                <View style={[styles.knowledgeMain, {flex: 1}]}>
                    <Text style={styles.knowledgeHeaderText}>WIEDZA</Text>
                    {this.createKnowledgeList()}
                </View>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active={"KNOWLEDGE"}/>
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
    knowledgeOne: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
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
    },
    knowledgeDescText: {
        color: '#0E395A'
    }
})
