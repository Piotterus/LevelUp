import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HTML from 'react-native-render-html';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';

export default class OneKnowledgeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.route.params.id,
            knowledgeItem: ''
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

        const queryString = this.objToQueryString({
            key: '5cac17d3c3729f4ffd74fa949a212cd0758f5d79',
            token: '4523d400add1288fb4e0ac94ce60e31e4f93a8ca',
        });

        let url = `http://good-game.mgnetworks-vps.ogicom.pl/api/challenge/learningId/${this.props.route.params.id}?${queryString}`;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    knowledgeItem: responseJson.page,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>WIEDZA</Text>
                    <View style={[styles.knowledgeOne, styles.shadow]}>
                        <Image style={{width: '100%', height: 240}} resizeMode="stretch" resizeMethod="scale" source={require('../images/iStock_000022969370_XXXLarge.png')}/>
                        <View style={styles.knowledgeDesc}>
                            <Text style={[styles.knowledgeDescText, {fontSize: 12}]}>AKTUALNE</Text>
                            <Text style={[styles.knowledgeDescText, {fontSize: 18, marginTop: 5}]}>{this.state.knowledgeItem.title}</Text>
                            {/*<Text style={[styles.knowledgeDescText, {fontSize: 16, marginTop: 24}]}>*/}
                                <HTML html={this.state.knowledgeItem.longContent} />
                            {/*</Text>*/}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')} style={[styles.buttonBase, {backgroundColor: '#2592E6', marginTop: 41, marginBottom: 42}, styles.shadow]}>
                                <Text style={{color: '#FFFFFF', fontSize: 13}}>PRZEJDŹ DO PYTAŃ</Text>
                            </TouchableOpacity>
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
        fontSize: 16,
        color: '#0E395A',
        marginTop: 12,
        marginBottom: 20,
        fontWeight: 'bold'
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
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6
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
        width: 236,
        height: 42,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})
