import React from 'react';

import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import HeaderNoLogin from '../components/HeaderNoLogin';
import ErrorModal from '../components/ErrorModal';
import SafeAreaView from 'react-native-safe-area-view';

export default class Register2Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.route.params.firstname,
            lastname: this.props.route.params.lastname,
            phone: this.props.route.params.phone,
            email: this.props.route.params.email,
            firmNIP: '',
            modalErrorVisible: false,
            error: '',
        };
    }

    updateValue(text,field) {
        if (field === 'firmNIP') {
            this.setState({
                firmNIP: text,
            })
        }
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    goToNextScreen() {
        if (this.state.firmNIP !== '') {
            this.props.navigation.navigate('Register3' , {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                firmNIP: this.state.firmNIP,
            })
        } else {
            let error = {
                message: 'Musisz wypełnić wszystkie pola'
            };
            this.setState({
                error: error,
            }, () => this.setModalErrorVisible(true))
        }
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#0A3251'}}>
                <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
                    <ScrollView contentContainerStyle={[styles.backgroundContent, {flexGrow: 1}]} style={styles.background}>
                        <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                        <HeaderNoLogin/>
                        <View style={styles.textView}>
                            <Text style={styles.headerText}>Chcesz dołączyć do Level.UP?</Text>
                            <Text style={styles.normalText}>Wypełnij poniższy formularz, a za moment otrzymasz mailem swoje dane dostępowe do gry treningowej Level.UP.</Text>
                        </View>
                        <View style={styles.registerView}>
                            <Text style={styles.stepText}>Krok 2/3</Text>
                            <Text style={styles.stepText}>Firma</Text>
                            <TextInput
                                placeholder="NIP"
                                placeholderTextColor="#FFFFFF33"
                                textAlign='center'
                                style={styles.textInput}
                                onChangeText = {(text) => this.updateValue(text,'firmNIP')}
                            />
                        </View>
                        <View style={styles.bottomView}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                                <View style={{flex: 1}}>
                                    <Icon name="chevron-left" size={50} color="#2592E6" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToNextScreen()} style={styles.nextButton}>
                                <Text style={{color: '#FFFFFF', fontSize: 16}}>DALEJ >>></Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
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
    },
    registerView: {
        marginTop: 32,
        alignItems: 'center'
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
    }
});
