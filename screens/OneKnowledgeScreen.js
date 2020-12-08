import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import HTML from 'react-native-render-html';
import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';
import SafeAreaView from 'react-native-safe-area-view';
import ImageModal from '../components/ImageModal';

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
            imageModal: {
                visible: false,
                url: '',
                width: '',
                height: '',
            },
            images: [],
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
                        },() => {this.setState({isLoading: false,}); this.props.updateFooter(this.props.knowledgeCount-1,this.props.testCount)})
                    } else {
                        this.setState({
                            error: responseJson.error,
                            isLoading: false,
                        },() => this.setModalErrorVisible(true))
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
    }

    showContent(contentType){
        this.setState({
            showContent: contentType,
        })
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    createChildrenList(children) {
        let childrenList = [];
        let child = children[0];
        for (let i in child) {
            console.log(child[i]);
            childrenList.push(child[i])
        }
        return childrenList;
    }

    setImageModal(visible, url) {
        if (visible === true) {
            let images = this.state.images;
            for (let i in images) {
                if (images[i].url === url) {
                    this.setState({
                        imageModal: {
                            visible: visible,
                            url: url,
                            width: images[i].width,
                            height: images[i].height,
                        }
                    })
                }
            }
        } else {
            this.setState({
                imageModal: {
                    visible: visible,
                }
            })
        }
    }

    addImageToModal(layout, url){
        const {x, y, width, height} = layout;
        let images = this.state.images;
        images.push({
            url: url,
            width: width,
            height: height,
        });
        this.setState({
            images: images,
        })
    }

    render() {
        const renderer = {
            imagelink: (htmlAttribs, children, passProps, convertedCSSStyles) => {
                let imageUrl = children[0][0].props.source.uri;
                return (
                    <TouchableOpacity onLayout={(event) => this.addImageToModal(event.nativeEvent.layout, imageUrl)} onPress={() => this.setImageModal(true, imageUrl)}>
                        {this.createChildrenList(children)}
                    </TouchableOpacity>)
            },
        };
        return(
            <View style={{flex: 1, backgroundColor: '#0A3251'}}>
                <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                        <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                        <ImageModal imageModal={this.state.imageModal} setImageModal={this.setImageModal.bind(this)}/>
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
                                        <HTML html={this.state.longContent} imagesMaxWidth={this.state.htmlWidth} renderers={renderer}/>
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
                                    {this.props.goToQuestion === true &&
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')}
                                                      style={[styles.buttonBase, styles.shadow, {
                                                          backgroundColor: '#2592E6',
                                                          marginTop: 30,
                                                          marginBottom: 42
                                                      }]}>
                                        <Text style={{color: '#FFFFFF', fontSize: 13}}>PRZEJDŹ DO PYTAŃ</Text>
                                    </TouchableOpacity>
                                    }
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
});
