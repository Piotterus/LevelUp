import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
    Image,
    Switch,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SafeAreaView from 'react-native-safe-area-view';

import ErrorModal from '../components/ErrorModal';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isFocusedName: false,
            isFocusedAge: false,
            error: '',
            modalErrorVisible: false,
            rememberEnabled: false,
        }
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    login(login,password) {

        if (login === "") {
            login = "PL22"//"PL42"//"PL22"
        }
        if (password === "") {
            password = "9LB92F3D"//"3DG61B7L"//"9LB92F3D"
        }

        const queryString = this.objToQueryString({
            key: this.props.keyApp,
        });
        let body = {
            login: login,
            password: password,
            device: 'testdevice1234',
            from: 'app',
        };

        let url = `https://levelup.verbum.com.pl/api/user/login?${queryString}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(async responseJson => {
                if (responseJson.error.code === 0) {
                    if (this.state.rememberEnabled) {
                        await AsyncStorage.setItem('isLoggedIn', '1');
                        await AsyncStorage.setItem('token', responseJson.user.mobileToken);
                    }
                    this.props.login(responseJson.user.mobileToken)
                } else {
                    this.setState({
                        error: responseJson.error,
                    }, () => this.setModalErrorVisible(true))
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.listenerFocus = this.props.navigation.addListener('focus', () => {
            //if (typeof this.props.route.params.title !== "undefined" && typeof this.props.route.params.message !== "undefined" ) {
            if (this.props.route.params?.title && this.props.route.params?.message) {
                this.setState({
                    error: {
                        code: this.props.route.params.title,
                        message: this.props.route.params.message,
                    }
                }, () => this.setModalErrorVisible(true))
            }
        });
        this.listenerBlur = this.props.navigation.addListener('blur', () => {

        });
    }

    componentWillUnmount() {
        this.listenerFocus();
        this.listenerBlur();
    }

    updateValue(text,field) {
        if (field === 'login') {
            this.setState({
                login: text,
            })
        } else if (field === 'password' ){
            this.setState( {
                password: text,
            })
        }
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    render() {
        return(
            <SafeAreaView style={styles.view} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollView}>
                    <ImageBackground source={require('../images/levelup_start_v2.png')} resizeMode='contain' style={styles.imageBackground}>
                        <View style={[styles.insideView, {flex: 1}]}>
                            <TextInput
                                placeholder="LOGIN"
                                placeholderTextColor="#FFFFFF33"
                                textAlign='center'
                                style={styles.textInput}
                                onChangeText = {(text) => this.updateValue(text,'login')}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="HASŁO"
                                placeholderTextColor="#FFFFFF33"
                                textAlign='center'
                                style={styles.textInput}
                                secureTextEntry={true}
                                onChangeText = {(text) => this.updateValue(text,'password')}
                                autoCapitalize="none"
                            />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("RemindPassword")} style={styles.remindMeView}>
                                <Text style={styles.remindMeText}>Nie pamiętasz hasła?</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.remindMeText}>Zapamiętaj mnie</Text>
                                    <Switch
                                        value={this.state.rememberEnabled}
                                        onValueChange={() => this.setState({rememberEnabled: !this.state.rememberEnabled})}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.login(this.state.login, this.state.password)} style={styles.loginButton}>
                                <Text style={styles.loginText}>ZALOGUJ SIĘ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register1")} style={styles.signinButton}>
                                <Text style={styles.signinText}>DOŁĄCZ DO GRY </Text>
                                <Image width="23" height="23" source={require('../icons/add.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView>
        )

    }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get("window").width, //for full screen
        //height: Dimensions.get("window").height, //for full screen
        //width: '100%',
        height: '100%',

        alignItems: 'center',
    },
    view: {
        flex: 1,
    },
    insideView: {
        alignItems: 'center',
        paddingTop: 200,
        width: Dimensions.get("window").width * 0.8,

        //justifyContent: 'center',
        //height: Dimensions.get("window").height, //for full screen
    },
    remindMeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    remindMeText: {
        color: '#ffffff',
        fontSize: 13,

    },
    container: {
        flex: 1,
        //marginTop: 20,
    },
    scrollView: {
        //backgroundColor: 'blue',
        flex: 1,
    },
    text: {
        fontSize: 25,
        color: '#ffffff',
    },
    textInput: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        //width: 200,
        width: Dimensions.get("window").width * 0.8,
        height: 40,
        color: '#ffffff',
    },
    loginButton: {
        backgroundColor: '#2592E6',
        width: '100%',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        marginTop: 55,
        borderRadius: 25,
        shadowColor: '#000000',//'#00000080',
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 5
    },
    loginText: {
        color: '#ffffff',
        fontSize: 16,

    },
    signinButton: {
        marginTop: 30,
        backgroundColor: '#F1F9FF',
        borderColor: '#0E395A',
        borderWidth: 1,
        width: '100%',
        height: 50,
        opacity: 0.8,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 287,
    },
    signinText: {
        color: '#0A3251',
        fontSize: 16,
    },
    signinImage: {
        height: 23.38,
        width: 23.38,
    }
});


