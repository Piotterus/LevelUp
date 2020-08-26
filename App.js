/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import OtherScreen from "./screens/OtherScreen";
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import EnterKnowledgeScreen from './screens/EnterKnowledgeScreen';
import MainKnowledgeScreen from './screens/MainKnowledgeScreen';
import ChooseKnowledgeScreen from './screens/ChooseKnowledgeScreen';
import OneKnowledgeScreen from './screens/OneKnowledgeScreen';
import EnterQuestionsScreen from './screens/EnterQuestionsScreen';
import RankingScreen from './screens/RankingScreen';
import AboutLapsScreen from './screens/AboutLapsScreen';
import AboutQuestionsScreen from './screens/AboutQuestionsScreen';
import AboutLevelsScreen from './screens/AboutLevelsScreen';
import AboutPointsScreen from './screens/AboutPointsScreen';
import CustomDrawer from './components/CustomDrawer';
import createDrawerNavigator from '@react-navigation/drawer/src/navigators/createDrawerNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isSettingUp: true,
        }
    }

    componentDidMount() {
        setTimeout(this.setup.bind(this), 3000)

    }

    setup() {
        this.setState( {
            isSettingUp: false
        }, this.logout.bind(this) )
    }

    login() {
        this.setState( {
            isLoggedIn: true,
        })
    }

    logout() {
        this.setState( {
            isLoggedIn: false,
        })
    }

    render() {
        if (this.state.isSettingUp) {
            return (<SplashScreen/>)
        }
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        headerTransparent:true,
                    }}
                    drawerContent={(props) => <CustomDrawer logout={this.logout.bind(this)} {...props} />}
                >
                    {this.state.isLoggedIn ? (
                        <>
                            <Drawer.Screen name="Home" component={HomeScreen}/>
                            <Drawer.Screen name="Main" component={MainScreen}/>
                            <Drawer.Screen name="Other" component={OtherScreen}/>
                            <Drawer.Screen name="EnterKnowledge" component={EnterKnowledgeScreen}/>
                            <Drawer.Screen name="MainKnowledge" component={MainKnowledgeScreen}/>
                            <Drawer.Screen name="ChooseKnowledge" component={ChooseKnowledgeScreen}/>
                            <Drawer.Screen name="OneKnowledge" component={OneKnowledgeScreen}/>
                            <Drawer.Screen name="EnterQuestions" component={EnterQuestionsScreen}/>
                            <Drawer.Screen name="Ranking" component={RankingScreen}/>
                            <Drawer.Screen name="AboutLaps" component={AboutLapsScreen}/>
                            <Drawer.Screen name="AboutQuestions" component={AboutQuestionsScreen}/>
                            <Drawer.Screen name="AboutLevels" component={AboutLevelsScreen}/>
                            <Drawer.Screen name="AboutPoints" component={AboutPointsScreen}/>
                        </>
                    ) : (
                        <Drawer.Screen name="Login"

                                       options={{
                                          title: 'Login',
                                          headerStyle: {
                                              backgroundColor: 'transparent',
                                          },
                                          gestureEnabled: false,
                                       }}
                        >
                            {props => <LoginScreen {...props} login={this.login.bind(this)} />}
                        </Drawer.Screen>
                    )}
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

//const App = createAppContainer(AppNavi);

/*const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};*/
