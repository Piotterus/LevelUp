import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HeaderNoLogin from '../components/HeaderNoLogin';
import { CheckBox } from 'react-native-elements'
import ErrorModal from '../components/ErrorModal';

export default class Register3Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.route.params.firstname,
            lastname: this.props.route.params.lastname,
            email: this.props.route.params.email,
            firmName: this.props.route.params.firmNIP,
            agree1: false,
            error: '',
        };
        console.log(this.state)
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    registerUser() {
        if (!this.state.agree1) {
            let error = {
                message: 'Musisz zaznaczyć zgodę'
            };
            this.setState({
                error: error,
            }, () => this.setModalErrorVisible(true))
        } else {
            const queryString = this.objToQueryString({
                key: this.props.keyApp,
            });
            let agree1;
            if (this.state.agree1) {
                agree1 = 1;
            } else {
                agree1 = 0;
            }

            let body = {
                lang: "pl",
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                firmNIP: this.state.firmNIP,
                agree1: agree1,
            };

            let url = `https://levelup.verbum.com.pl/api/user/userRegister?${queryString}`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson.error.code === 0) {
                        let title = 'Dziękujemy za rejestracje';
                        let message = 'Na Twój adres e-mail wysłaliśmy dane dostępowe.';
                        this.props.navigation.navigate('Login', {message: message, title: title});
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
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    render() {
        return(
            <ScrollView contentContainerStyle={[styles.backgroundContent, {flexGrow: 1}]} style={styles.background}>
                <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                <HeaderNoLogin/>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>Chcesz dołączyć do Level.UP?</Text>
                    <Text style={styles.normalText}>Wypełnij poniższy formularz, a za moment otrzymasz mailem swoje dane dostępowe do gry treningowej Level.UP.</Text>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.stepText}>Krok 3/3</Text>
                    <Text style={styles.stepText}>Zgody</Text>
                    <View style={styles.consentRow}>
                        <CheckBox
                            checked={this.state.agree1}
                            onPress={() => this.setState({agree1: !this.state.agree1})}
                            />
                        <Text style={styles.consentText}>Zapoznałem/am się i akceptuję zapisy <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RegisterStatute')}><Text style={[styles.consentText, {fontWeight: 'bold'}]}>Regulaminu Konkursu „Gra Edukacyjna LevelUP”.</Text></TouchableWithoutFeedback>. Wyrażenie tej zgody jest dobrowolne, ale jej brak uniemożliwia rejestrację w Konkursie.</Text>
                    </View>
                    {/*<View style={styles.consentRow}>
                        <Text style={styles.consentText}>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z obowiązującymi przepisami prawa w celach komunikacji marketingowej, niezwiązanej z Konkursem następującymi kanałami:</Text>
                    </View>
                    <View style={styles.consentRow}>
                        <CheckBox
                            checked={this.state.agree2}
                            onPress={() => this.setState({agree2: !this.state.agree2})}
                        />
                        <Text style={styles.consentText}>Telefon</Text>
                    </View>
                    <View style={styles.consentRow}>
                        <CheckBox
                            checked={this.state.agree3}
                            onPress={() => this.setState({agree3: !this.state.agree3})}
                        />
                        <Text style={styles.consentText}>SMS</Text>
                    </View>
                    <View style={styles.consentRow}>
                        <CheckBox
                            checked={this.state.agree4}
                            onPress={() => this.setState({agree4: !this.state.agree4})}
                        />
                        <Text style={styles.consentText}>Poczta elektroniczna</Text>
                    </View>
                    <View style={styles.consentRow}>
                        <Text style={styles.consentText}>Wyrażenie tych zgód jest dobrowolne tzn. że nie stanowi warunku uczestnictwa w Konkursie. Zaznaczając którąkolwiek ze zgód potwierdza Pan/Pani swoje uprawnienie do reprezentowania firmy. Zgody mogą zostać wycofane w każdym czasie; wycofanie zgody numer 1 będzie jednak oznaczać zakończenie udziału firmy w Konkursie „Gra szkoleniowa GOOD GAME”. Szczegóły znajdziesz w Regulaminie Konkursu.</Text>
                    </View>*/}
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <View style={{flex: 1}}>
                            <Icon name="chevron-left" size={50} color="#2592E6" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.registerUser()} style={styles.nextButton}>
                        <Text style={{color: '#FFFFFF', fontSize: 16}}>ZAREJESTRUJ SIĘ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0A3251',
    },
    backgroundContent: {
        alignItems: 'center'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    textView: {
        width: '90%',
        alignItems: 'center',
        marginTop: 40,
        //backgroundColor: 'yellow',
    },
    registerView: {
        marginTop: 32,
        alignItems: 'center',
        width: '100%',
        //backgroundColor: 'green',
    },
    stepText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textInput: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        //width: 200,
        width: Dimensions.get("window").width * 0.8,
        height: 40,
        color: '#ffffff',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 50,
        marginBottom: 40,
    },
    backButton: {
        backgroundColor: '#FFFFFF',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#2592E6',
        width: 241,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    consentText: {
        color: '#FFFFFF',
        fontSize: 12,
        flex: 1,
        marginRight: 10,
    },
    consentRow: {
        flexDirection: 'row',
        //width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingLeft: 20
    }
});
