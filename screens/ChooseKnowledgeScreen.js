import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

import WebView from 'react-native-webview'
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import KnowledgeListItem from '../components/KnowledgeListItem';

export default class ChooseKnowledgeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            knowledgeList: ''
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

        let url = `http://good-game.mgnetworks-vps.ogicom.pl/api/challenge/learningList?${queryString}`;
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
    }

    createKidsList() {
        let kidsList = [];
        //console.error(this.state.articles)
        console.log(this.state.kids)
        //for (let i=1;i<=Object.keys(this.state.articles).length;i++) {
        //for (let i in Object.keys(this.state.articles)) {
        for (let i in this.state.kids) {
            //console.error(this.state.articles[1].introtext)
            //console.log(this.state.articles[i].introtext)
            //kidsList.push(<ListItem key={i} navigation={this.props.navigation} navi="Kid" id={this.state.kids[i].id} nameText={this.state.kids[i].name} ageText={"lat:" + this.state.kids[i].age} pointsText="" update={() => this.updateKids()}/>);
        }
        //console.error(newsList)
        return kidsList;
    }


    createKnowledgeList() {
        console.log("TAK")
        console.log(this.state.knowledgeList)
        let knowledgeList = []
        for (let i in this.state.knowledgeList) {
            console.log(this.state.knowledgeList[i].title)
            knowledgeList.push(<KnowledgeListItem key={i} navigation={this.props.navigation} id={this.state.knowledgeList[i].id} active={this.state.knowledgeList[i].isActive} knowledgeTitle={this.state.knowledgeList[i].title}/>)
        }
        return knowledgeList;
    }

    render() {
        return(
            <ScrollView>
                <HeaderBurger navigation={this.props.navigation}/>
                <Info/>
                <View style={styles.knowledgeMain}>
                    <Text style={styles.knowledgeHeaderText}>WIEDZA</Text>
                    {this.createKnowledgeList()}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OneKnowledge')} style={[styles.knowledgeOne, styles.shadow]}>
                        <Image style={{width: '100%'}} resizeMode="contain" source={require('../images/iStock_000022969370_XXXLarge.png')}/>
                        <View style={styles.knowledgeDesc}>
                            <Text style={[styles.knowledgeDescText, {fontSize: 12}]}>AKTUALNE</Text>
                            <Text style={[styles.knowledgeDescText, {fontSize: 18, marginTop: 5}]}>Nazwa Pierwszej Wiedzy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.knowledgeOne, styles.shadow]}>
                        <Image style={{width: '100%'}} resizeMode="contain" source={require('../images/iStock_000022543329_Medium.png')}/>
                        <View style={styles.knowledgeDesc}>
                            <Text style={[styles.knowledgeDescText, {fontSize: 12}]}>NIEDOSTĘPNE</Text>
                            <Text style={[styles.knowledgeDescText, {fontSize: 18, marginTop: 5}]}>Nazwa Pierwszej Wiedzy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.knowledgeOne, styles.shadow]}>
                        <Image style={{width: '100%'}} resizeMode="contain" source={require('../images/Depositphotos_163959576_original.png')}/>
                        <View style={styles.knowledgeDesc}>
                            <Text style={[styles.knowledgeDescText, {fontSize: 12}]}>NIEDOSTĘPNE</Text>
                            <Text style={[styles.knowledgeDescText, {fontSize: 18, marginTop: 5}]}>Nazwa Pierwszej Wiedzy</Text>
                        </View>
                    </TouchableOpacity>
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
    },
    knowledgeDescText: {
        color: '#0E395A'
    }
})
