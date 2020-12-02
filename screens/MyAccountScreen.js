import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback, ActivityIndicator,
} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';
import {CheckBox} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

export default class MyAccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            firm: '',
            modalErrorVisible: false,
            error: '',
            agree1: false,
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

        let url = `https://levelup.verbum.com.pl/api/user/userData/?${queryString}`;
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
                        user: responseJson.user,
                        firm: responseJson.firm,
                        agree1: responseJson.user.agree1,
                    }, () => this.setState({isLoading: false}))
                } else {
                    this.setState({
                        isLoading: false,
                        error: responseJson.error
                    })
                }
            })
            .catch((error) => {
                this.setState({isLoading: false});
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

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#0A3251'}}>
                <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                        <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                        <HeaderBurger navigation={this.props.navigation}/>
                        <View style={[styles.knowledgeMain, {flex: 1}]}>
                            <Text style={styles.knowledgeHeaderText}>MOJE KONTO</Text>
                            <View style={[styles.shadow, styles.myAccount]}>
                                <Text style={styles.headerText}>Dane Uczestnika</Text>
                                <View style={styles.userDataView}>
                                    <View style={styles.userInfo}>
                                        <Text style={styles.userInfoText}>IMIĘ</Text>
                                        <Text style={styles.userInfoText}>NAZWISKO</Text>
                                        <Text style={styles.userInfoText}>E-MAIL</Text>
                                    </View>
                                    <View style={{width: 10}}/>
                                    <View style={styles.userData}>
                                        <Text style={styles.userDataText}>{this.state.user.firstname}</Text>
                                        <Text style={styles.userDataText}>{this.state.user.lastname}</Text>
                                        <Text style={styles.userDataText}>{this.state.user.email}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}/>
                                <Text style={styles.headerText}>Firma</Text>
                                <View style={styles.userDataView}>
                                    <View style={styles.userInfo}>
                                        <Text style={styles.userInfoText}>NIP</Text>
                                    </View>
                                    <View style={{width: 10}}/>
                                    <View style={styles.userData}>
                                        <Text style={styles.userDataText}>{this.state.user.nip}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}/>
                                <Text style={styles.headerText}>Zgoda</Text>
                                <View style={styles.consentRow}>
                                    <CheckBox
                                        checked={this.state.agree1}
                                        //onPress={() => this.setState({agree1: !this.state.agree1})}
                                        checkedColor={'#A3A3A3'}
                                    />
                                    <View style={{flex: 1}}>
                                        <Text style={styles.consentText}>Zapoznałem/am się i akceptuję zapisy <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Statute')}><Text style={[styles.consentText, {fontWeight: 'bold'}]}>Regulaminu Konkursu „Gra Edukacyjna LevelUP”.</Text></TouchableWithoutFeedback> Wyrażenie tej zgody jest dobrowolne, ale jej brak uniemożliwia rejestrację w Konkursie.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
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
    myAccount: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
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
    buttonBase: {
        width: '100%',
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',

    },
    line: {
        height: 1,
        backgroundColor: '#0E395A',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
    },
    headerText: {
        color: '#0A3251',
        fontSize: 20,
        fontWeight: 'bold',
    },
    userDataView: {
        flexDirection: 'row',
        width: '90%',
    },
    userInfo: {
        alignItems: 'flex-start',
        //flex: 1,
        width: '30%',
    },
    userData: {
        alignItems: 'flex-start',
        //flex: 1,
        width: '70%'
    },
    userInfoText: {
        fontSize: 13,
        color: '#0A3251',
        marginTop: 5,
        marginBottom: 5,
    },
    userDataText: {
        fontSize: 13,
        color: '#0A3251',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
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
    consentText: {
        color: '#0A3251',
        fontSize: 12,
        flex: 1,
    },
    consentRow: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingLeft: 0,
        paddingBottom: 15,
        paddingTop: 5
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
