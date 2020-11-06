import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import KnowledgeListItem from '../components/KnowledgeListItem';
import ErrorModal from '../components/ErrorModal';

export default class ChooseKnowledgeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            knowledgeList: '',
            modalErrorVisible: false,
            error: '',
            isLoading: true,
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
                    if (responseJson.error.code === 0) {
                        this.setState({
                            knowledgeList: responseJson.list,
                        }, () => this.setState({isLoading: false}))
                    } else {
                        this.setState({
                            isLoading: false,
                            error: responseJson.error
                        })
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        });

        this.listenerBlur = this.props.navigation.addListener('blur', () => {
            this.setState({
                isLoading: true,
            })
        });
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
    }

    createKnowledgeList() {
        let knowledgeList = [];
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
    };

    render() {
        return(
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    <View style={[styles.knowledgeMain, {flex: 1}]}>
                        <Text style={styles.knowledgeHeaderText}>WIEDZA</Text>
                        {this.createKnowledgeList()}
                    </View>
                </ScrollView>
                <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active="KNOWLEDGE"/>
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
})
