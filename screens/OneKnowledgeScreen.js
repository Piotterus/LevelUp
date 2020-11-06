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
    ActivityIndicator,
} from 'react-native';

import WebView from 'react-native-webview'
import HTML from 'react-native-render-html';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import Info from '../components/Info';
import ErrorModal from '../components/ErrorModal';

export default class OneKnowledgeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.route.params.id,
            knowledgeItem: {
                title: '',
                longContent: '',
            },
            title: '',
            longContent: '',
            htmlWidth: '',
            shortContent: '',
            showContent: 'short',
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

        const queryString = this.objToQueryString({
            key: this.props.keyApp,
            token: this.props.token,
        });

        this.listenerFocus = this.props.navigation.addListener('focus', () => {
            let url = `https://levelup.verbum.com.pl/api/challenge/learningId/${this.props.route.params.id}?${queryString}`;
            console.log(url);
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
                            knowledgeItem: responseJson.page,
                            longContent: responseJson.page.longContent,
                            title: responseJson.page.title,
                            shortContent: responseJson.page.shortContent,
                        },() => this.setState({isLoading: false,}))
                    } else {
                        this.setState({
                            error: responseJson.error
                        },() => this.setState({isLoading: false,}))
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {
            this.setState( {
                knowledgeItem: {
                    title: '',
                    longContent: '',
                },
                showContent: 'short',
                isLoading: true,
            })
        });
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
    }

    findDimensionsView(layout){
        const {x, y, width, height} = layout;
        this.setState({
            htmlWidth: width-52,
        });
        console.log("find")
        console.log(width)
    }

    showContent(contentType){
        this.setState({
            showContent: contentType,
        })
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    }

    render() {
        console.log("longContent");
        console.log(this.state.longContent);
        return(
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                    <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                    <HeaderBurger navigation={this.props.navigation}/>
                    <View style={[styles.knowledgeMain, {flex: 1}]}>
                        <Text style={styles.knowledgeHeaderText}>WIEDZA</Text>
                        <View style={[styles.knowledgeOne, styles.shadow]}>
                            <View style={styles.knowledgeDesc} onLayout={(event) => { this.findDimensionsView(event.nativeEvent.layout) }}>
                                <Text style={[styles.knowledgeDescText, {fontSize: 18, marginTop: 5}]}>{this.state.title}</Text>
                                {this.state.showContent === 'short' && this.state.shortContent !== '' &&
                                    <HTML html={this.state.shortContent} imagesMaxWidth={this.state.htmlWidth}/>
                                }
                                {this.state.showContent === 'long' && this.state.knowledgeItem.longContent !== '' &&
                                /*<Text style={[styles.knowledgeDescText, {fontSize: 16, marginTop: 24}]}>*/
                                    <HTML html={this.state.longContent} imagesMaxWidth={this.state.htmlWidth}/>
                                /*</Text>*/
                                }
                                {this.state.showContent === 'short' &&
                                    <TouchableOpacity onPress={() => this.showContent('long')} style={[styles.buttonBase, styles.shadow, {
                                        backgroundColor: '#2592E6',
                                        marginTop: 5,
                                        marginBottom: 5
                                    }]}>
                                        <Text style={{color: '#FFFFFF', fontSize: 13}}>POKAŻ WIĘCEJ</Text>
                                    </TouchableOpacity>
                                }
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')} style={[styles.buttonBase, styles.shadow, {backgroundColor: '#2592E6', marginTop: 30, marginBottom: 42}]}>
                                    <Text style={{color: '#FFFFFF', fontSize: 13}}>PRZEJDŹ DO PYTAŃ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
        width: 236,
        height: 42,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
