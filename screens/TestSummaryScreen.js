import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import TestSummaryItem from '../components/TestSummaryItem';
import ErrorModal from '../components/ErrorModal';
import SafeAreaView from 'react-native-safe-area-view';

export default class TestSummaryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results : props.route.params.results,
            sum: props.route.params.sum,
            model: props.route.params.model,
            id: props.route.params.id,
            modalErrorVisible: false,
            error: '',
            isLoading: true,
        }
    }

    componentDidMount() {
        this.listenerFocus = this.props.navigation.addListener('focus', () => {

            this.setState({
                results : this.props.route.params.results,
                sum: this.props.route.params.sum,
                model: this.props.route.params.model,
                id: this.props.route.params.id,
            },() => {this.setState({isLoading: false}); this.props.updateFooter(this.props.knowledgeCount,this.props.testCount-1)})

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

    createTestSummaryList() {
        let testSummaryList = [];
        for (let i in this.state.results) {
            testSummaryList.push(<TestSummaryItem
                key={i}
                navigation={this.props.navigation}
                text={this.state.results[i].text}
                points={this.state.results[i].points}
                answer={this.state.results[i].answer}
                correct={this.state.results[i].correct}
                number={i}
                model={this.state.model}
                id={this.state.id}
            />)
        }
        return testSummaryList;
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
                            <Text style={styles.knowledgeHeaderText}>PODSUMOWANIE TESTU</Text>
                            <View style={[styles.shadow, styles.summaryView]}>
                                {this.createTestSummaryList()}
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Results', {content: "ranking"})}
                                              style={[styles.buttonBase, styles.shadow, styles.buttonConsent, {backgroundColor: '#0E395A'}]}>
                                <Text style={styles.buttonText}>RANKING</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation} active="QUESTIONS"/>
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
    summaryView: {
        width: '90%',
        borderRadius: 9,
        zIndex: 2,
        paddingBottom: 5,
        marginBottom: 30,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 6,
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
    headerText: {
        color: '#0A3251',
        fontSize: 20,
        fontWeight: 'bold',
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
    questionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        //paddingRight: 10,
        marginTop: 7,
        marginBottom: 7
    },
    questionRow2: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        //paddingLeft: 10,
        //paddingRight: 10,
    },
    answerNumber: {
        flex: 1,
        color: '#0A3251',
        fontSize: 16,
        fontWeight: '100',
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
