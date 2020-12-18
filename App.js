import React, {Fragment} from 'react';

import { NavigationContainer } from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from "./screens/LoginScreen";
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import EnterKnowledgeScreen from './screens/EnterKnowledgeScreen';
import MainKnowledgeScreen from './screens/MainKnowledgeScreen';
import ChooseKnowledgeScreen from './screens/ChooseKnowledgeScreen';
import OneKnowledgeScreen from './screens/OneKnowledgeScreen';
import EnterQuestionsScreen from './screens/EnterQuestionsScreen';
import RankingScreen from './screens/RankingScreen';
import AboutLapsScreen from './screens/AboutLapsScreen';
import CustomDrawer from './components/CustomDrawer';
import createDrawerNavigator from '@react-navigation/drawer/src/navigators/createDrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Register1Screen from './screens/Register1Screen';
import Register2Screen from './screens/Register2Screen';
import Register3Screen from './screens/Register3Screen';
import RemindPasswordScreen from './screens/RemindPasswordScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import QuestionScreen from './screens/QuestionScreen';
import TestSummaryScreen from './screens/TestSummaryScreen';
import ResultsScreen from './screens/ResultsScreen';
import QuestionSummaryScreen from './screens/QuestionSummaryScreen';
import ContactScreen from './screens/ContactScreen';
import StatuteScreen from './screens/StatuteScreen';
import RegisterStatuteScreen from './screens/RegisterStatuteScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isSettingUp: true,
            key: '128332b62e6205a77578ad7d8fd35c40572c9022',
            token: '',
            knowledgeCount: 0,
            testCount: 0,
            firstName: '',
            lastName: '',
            rememberMe: false,
            week: 0,
        }
    }

    componentDidMount() {
        setTimeout(this.setup.bind(this), 500);
    }

    componentWillUnmount() {

    }

    updateFooter(knowledgeCount,testCount) {
        this.setState({
            knowledgeCount: knowledgeCount,
            testCount: testCount,
        })
    }

    updateDrawer(firstname, lastname) {
        this.setState({
            firstName: firstname,
            lastName: lastname,
        })
    }

    updateWeek(week) {
        this.setState({
            week: week,
        })
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    setup = async() => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const token = await AsyncStorage.getItem('token');
        if (isLoggedIn !== '1') {
            this.setState({
                isSettingUp: false
            })
        } else {
            this.setState({
                isSettingUp: false,
                isLoggedIn: true,
                token: token
            })
        }
    };

    login(token) {
        this.setState( {
            token: token,
            isLoggedIn: true,
        });
    }

    async logout() {
        await AsyncStorage.setItem('isLoggedIn','0');
        await AsyncStorage.setItem('token','');
        this.setState( {
            isLoggedIn: false,
        })
    }

    rememberMe(value) {
        this.setState({
            rememberMe: value
        })
    }

    render() {
        if (this.state.isSettingUp) {
            return (
                <SafeAreaProvider>
                    <SplashScreen/>
                </SafeAreaProvider>
            )
        }
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    {this.state.isLoggedIn ? (
                        <Drawer.Navigator initialRouteName="Home"
                                          screenOptions={{
                                              headerShown: false,
                                              headerTransparent: true,
                                          }}
                                          drawerContent={(props) => <CustomDrawer
                                              logout={this.logout.bind(this)} {...props}
                                              firstName={this.state.firstName} lastName={this.state.lastName}/>}
                                          openByDefault={false}
                        >
                            <>
                                <Drawer.Screen name="Home">
                                    {props => <HomeScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                        updateFooter={this.updateFooter.bind(this)}
                                        updateDrawer={this.updateDrawer.bind(this)}
                                        updateWeek={this.updateWeek.bind(this)}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="EnterKnowledge">
                                    {props => <EnterKnowledgeScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="MainKnowledge">
                                    {props => <MainKnowledgeScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="ChooseKnowledge">
                                    {props => <ChooseKnowledgeScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                        week={this.state.week}
                                        updateFooter={this.updateFooter.bind(this)}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="OneKnowledge">
                                    {props => <OneKnowledgeScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                        updateFooter={this.updateFooter.bind(this)}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="EnterQuestions">
                                    {props => <EnterQuestionsScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                        week={this.state.week}
                                        updateFooter={this.updateFooter.bind(this)}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="Ranking">
                                    {props => <RankingScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="AboutLaps">
                                    {props => <AboutLapsScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="MyAccount">
                                    {props => <MyAccountScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="Question">
                                    {props => <QuestionScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="TestSummary">
                                    {props => <TestSummaryScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                        updateFooter={this.updateFooter.bind(this)}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="Results">
                                    {props => <ResultsScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="QuestionSummary">
                                    {props => <QuestionSummaryScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="Contact">
                                    {props => <ContactScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                                <Drawer.Screen name="Statute">
                                    {props => <StatuteScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                        knowledgeCount={this.state.knowledgeCount}
                                        testCount={this.state.testCount}
                                    />}
                                </Drawer.Screen>
                            </>
                        </Drawer.Navigator>
                    ) : (
                        <Stack.Navigator initialRouteName="Login"
                                          screenOptions={{
                                              headerShown: false,
                                              headerTransparent: true,
                                          }}
                        >
                            <>
                                <Stack.Screen name="Login"
                                               options={{
                                                   title: 'Login',
                                                   headerStyle: {
                                                       backgroundColor: 'transparent',
                                                   },
                                                   gestureEnabled: false,
                                               }}
                                >
                                    {props => <LoginScreen
                                        {...props}
                                        login={this.login.bind(this)}
                                        keyApp={this.state.key}
                                        rememberMe={this.rememberMe.bind(this)}
                                    />}
                                </Stack.Screen>
                                <Stack.Screen name="Register1">
                                    {props => <Register1Screen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                    />}
                                </Stack.Screen>
                                <Stack.Screen name="Register2">
                                    {props => <Register2Screen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                    />}
                                </Stack.Screen>
                                <Stack.Screen name="Register3">
                                    {props => <Register3Screen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                    />}
                                </Stack.Screen>
                                <Stack.Screen name="RemindPassword">
                                    {props => <RemindPasswordScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                    />}
                                </Stack.Screen>
                                <Stack.Screen name="RegisterStatute">
                                    {props => <RegisterStatuteScreen
                                        {...props}
                                        token={this.state.token}
                                        keyApp={this.state.key}
                                    />}
                                </Stack.Screen>
                            </>
                        </Stack.Navigator>
                    )}
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}
