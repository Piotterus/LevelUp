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
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment/moment.js';
import SafeAreaView from 'react-native-safe-area-view';

export default class ChooseKnowledgeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            knowledgeList: '',
            modalErrorVisible: false,
            error: '',
            isLoading: true,
            week: '',
            weekList: '',
            weekShow: '',
            weekMax: '',
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

            this.setState({
                week: this.props.week,
                weekShow: this.props.week,
            });

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
                        })
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

            let url2 = `https://levelup.verbum.com.pl/api/page/news?${queryString}`;
            fetch(url2, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson.error.code === 0) {
                        this.setState({
                            weekList: responseJson.list
                        }, () => {this.setState({isLoading: false}); this.getMaxWeek()})
                    } else {
                        this.setState({
                            isLoading: false,
                            error: responseJson.error
                        }, () => this.setModalErrorVisible(true));
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
        if (parseInt(this.state.weekShow) === parseInt(this.state.week)) {
            //TEN WEEK
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
                    goToQuestion={true}
                />)
            }
        } else {
            //INNY WEEK
            let knowledgeListIndex = 0;
            const status = {
                id: 1,
                title: "PRZECZYTAJ JESZCZE RAZ"
            };
            let day = '';
            let daysToAdd = (this.state.weekShow - this.state.week) * 7;
            for (let i in this.state.weekList) {
                if (parseInt(this.state.weekList[i].idRound) === this.state.weekShow) {
                    let date = moment(this.state.knowledgeList[knowledgeListIndex].dateFrom);
                    date.add({days: daysToAdd})
                    if (knowledgeListIndex === 0) {
                        day = "PONIEDZIAŁEK"
                    } else if (knowledgeListIndex === 1) {
                        day = "WTOREK"
                    } else if (knowledgeListIndex === 2) {
                        day =  "ŚRODA"
                    }
                    knowledgeList.push(<KnowledgeListItem
                        key={i}
                        navigation={this.props.navigation}
                        id={this.state.weekList[i].id}
                        active={true}
                        knowledgeTitle={this.state.weekList[i].title}
                        activeText="PRZECZYTAJ JESZCZE RAZ"
                        shortContent={this.state.weekList[i].shortContent}
                        status={status}
                        day={day}
                        date={date}
                        goToQuestion={false}
                    />);
                    knowledgeListIndex++;
                }
            }
        }
        return knowledgeList;
    }

    setModalErrorVisible = (visible) => {
        this.setState({ modalErrorVisible: visible });
    };

    addWeek() {
        if (this.state.weekShow < this.state.weekMax) {
            this.setState({
                weekShow: this.state.weekShow + 1,
            })
        }
    }

    subtractWeek() {
        if (this.state.weekShow > 1) {
            this.setState({
                weekShow: this.state.weekShow - 1,
            })
        }
    }

    getMaxWeek() {
        let maxWeek = 0;
        for (let i in this.state.weekList) {
            if (maxWeek < this.state.weekList[i].idRound) {
                maxWeek = this.state.weekList[i].idRound
            }
        }
        this.setState({
            weekMax: maxWeek,
            weekList: this.state.weekList.reverse()
        })
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#0A3251'}}>
                <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{marginBottom: 75}}>
                        <ErrorModal visible={this.state.modalErrorVisible} error={this.state.error} setModalErrorVisible={this.setModalErrorVisible.bind(this)}/>
                        <HeaderBurger navigation={this.props.navigation}/>
                        <View style={[styles.knowledgeMain, {flex: 1}]}>
                            <Text style={styles.knowledgeHeaderText}>WIEDZA</Text>
                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginBottom: 15, alignItems: 'center'}}>
                                {this.state.weekShow > 1 &&
                                <Icon onPress={() => this.subtractWeek()} name="arrow-left" size={30} color="#5E6367"/>
                                }
                                {this.state.weekShow <= 1 &&
                                <Icon onPress={() => this.subtractWeek()} name="arrow-left" size={30} color="#5E636700"/>
                                }
                                <Text style={{color: '#0A3251'}}>
                                    {this.state.weekShow} runda
                                </Text>
                                {this.state.weekShow < this.state.weekMax &&
                                <Icon onPress={() => this.addWeek()} name="arrow-right" size={30} color="#5E6367"/>
                                }
                                {this.state.weekShow >= this.state.weekMax &&
                                <Icon onPress={() => this.addWeek()} name="arrow-right" size={30} color="#5E636700"/>
                                }
                            </View>
                            {this.createKnowledgeList()}
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
});
