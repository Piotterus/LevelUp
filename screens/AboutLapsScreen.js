import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';

import HeaderBurger from '../components/HeaderBurger';
import Footer from '../components/Footer';
import ErrorModal from '../components/ErrorModal';
import Swiper from 'react-native-swiper'
import SafeAreaView from 'react-native-safe-area-view';


export default class AboutLapsScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            modalErrorVisible: false,
            error: '',
        }
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
                        <Swiper showsButtons={false} loadMinimal={true} loadMinimalSize={1}>
                            <View style={[styles.knowledgeMain, {flex: 1}]}>
                                <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                                <View style={[styles.shadow, styles.aboutLaps]}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251', paddingLeft: 10}}>Witaj w Level.UP!</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10, marginTop: 10}}>Przed Tobą miesiąc pełen atrakcyjnej wiedzy, która poszerzy Ci horyzont i pokaże pełnię możliwości Level.UP – narzędzia, które pomoże Ci zwiększyć wyniki sprzedażowe poprzez wzrost wiedzy oraz kompetencji.</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10}}>Zapoznaj się z poniższą instrukcją i przekonaj się, że zasady gry są proste i wygodne! Na dobry początek, zapamiętaj poniższą informację o kolorach, które odgrywają ważną rolę w Level.UP!</Text>
                                    <View style={{flexDirection: 'row', marginTop: 20}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/rundaCurrent.png')}/>
                                            <Text>Okrążenia aktualne</Text>
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/rundaNO.png')}/>
                                            <Text>Okrążenie pominięte</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', marginTop: 10, paddingBottom: 10}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/rundaOK.png')}/>
                                            <Text>Okrążenia ukończone</Text>
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <Image style={{width: '100%', marginBottom: 10}} resizeMode="contain" source={require('../icons/rundaPending.png')}/>
                                            <Text>Wkrótce</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.knowledgeMain, {flex: 1}]}>
                                <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                                <View style={[styles.shadow, styles.aboutLaps]}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251', paddingLeft: 10, marginBottom: 10}}>Jaki jest plan gry w Level.UP?</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}>1 tydzień = 1 runda</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}><Text style={{fontWeight: 'bold'}}>START</Text> rundy = poniedziałek 00:00</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}><Text style={{fontWeight: 'bold'}}>KONIEC</Text> rundy = niedziela 23:59</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginTop: 10}}>
                                        <View style={{paddingLeft: 10, flex: 2}}>
                                            <Text style={{fontSize: 14, color: '#0A3251',fontWeight: 'bold'}}>PONIEDZIAŁEK</Text>
                                            <Text style={{fontSize: 14, color: '#0A3251',fontWeight: 'bold'}}>WTOREK</Text>
                                            <Text style={{fontSize: 14, color: '#0A3251',fontWeight: 'bold'}}>ŚRODA</Text>
                                        </View>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 3}}>Pigułka Wiedzy i pytanie</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 2}}><Text style={{fontWeight: 'bold'}}>CZWARTEK</Text></Text>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 3}}>do 23:59 możesz odpowiedzieć na pytania z Pigułek Wiedzy</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 2}}><Text style={{fontWeight: 'bold'}}>PIĄTEK</Text></Text>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 3}}>startuje złożony z 10 pytań TEST WIEDZY</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 2}}><Text style={{fontWeight: 'bold'}}>NIEDZIELA</Text></Text>
                                        <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, flex: 3}}>do 23:59 możesz wypełnić TEST WIEDZY</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.knowledgeMain, {flex: 1}]}>
                                <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                                <View style={[styles.shadow, styles.aboutLaps]}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251', paddingLeft: 10, marginBottom: 10}}>Jak działa Level.UP?</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}>1.	Gra składa się z 4 rund, a każda runda trwa tydzień</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}>2.	W poniedziałek, wtorek i środę otrzymujesz Pigułkę Wiedzy, a każdej z nich towarzyszy jedno pytanie, odpowiedz na nie, by zdobyć punkty.</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}>3.	W piątek aktywuje się test z zagadnień poruszonych w rundzie, rozwiąż go, by zdobyć punkty.</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}>4.	Liczy się zaangażowanie, więc punkty otrzymasz nawet za błędną odpowiedź. Stracisz je, przy braku odpowiedzi.</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 10}}>5.	Baw się dobrze!</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginTop: 10}}>
                                        <View style={styles.questionOne}>
                                            <TouchableOpacity style={[styles.buttonBase, styles.shadow, styles.buttonActive]}/>
                                        </View>
                                        <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 15, flex: 2}}>Klikaj, dostępna jest interakcja – Pigułka Wiedzy, test lub pytanie!</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <View style={styles.questionOne}>
                                            <TouchableOpacity style={[styles.buttonBase, styles.shadow, styles.buttonSolved]}/>
                                        </View>
                                        <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 15, flex: 2}}>Dobra robota, zadanie wykonane. Pamiętaj – zawsze możesz wrócić do Pigułek Wiedzy!</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginBottom: 10}}>
                                        <View style={styles.questionOne}>
                                            <TouchableOpacity style={[styles.buttonBase, styles.shadow, styles.buttonPending]}/>
                                        </View>
                                        <Text style={{fontSize: 14, color: '#0A3251', marginBottom: 5, paddingLeft: 15, flex: 2}}>Interakcja będzie dostępna w przyszłości, czekaj cierpliwie!</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.knowledgeMain, {flex: 1}]}>
                                <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                                <View style={[styles.shadow, styles.aboutLaps]}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251', paddingLeft: 10, marginBottom: 10}}>Ranking i nagrody</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10}}>Śledź swoją pozycję w błyskawicznie aktualizowanym rankingu i walcz z innymi o jak najwyższe miejsce. W Level.UP istnieją 3 poziomy zależne od Twojego dorobku punktowego. Zdobądź co najmniej poziom EXPERT, by cieszyć się nagrodą – Certyfikatem! Pamiętaj, że wyższy status = lepsza nagroda!</Text>
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginTop: 10}}>
                                        <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/Page-1.png')}/>
                                        <View style={{flex: 3}}>
                                            <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>STARTER</Text>
                                            <Text style={{fontSize: 14, color: '#0E395A'}}>poniżej 23 pkt.</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/001-scooter.png')}/>
                                        <View style={{flex: 3}}>
                                            <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>EXPERT</Text>
                                            <Text style={{fontSize: 14, color: '#0E395A'}}>od 24 do 71 pkt.</Text>
                                            <Text style={{fontSize: 14, color: '#0E395A'}}>wygrywasz <Text style={{fontWeight: 'bold'}}>Srebrny Certyfikat EXPERT Level.UP</Text></Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginBottom: 10}}>
                                        <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/003-car.png')}/>
                                        <View style={{flex: 3}}>
                                            <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>CHAMPION</Text>
                                            <Text style={{fontSize: 14, color: '#0E395A'}}>od 72 pkt.</Text>
                                            <Text style={{fontSize: 14, color: '#0E395A'}}>wygrywasz <Text style={{fontWeight: 'bold'}}>Złoty Certyfikat CHAMPION Level.UP</Text></Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.knowledgeMain, {flex: 1}]}>
                                <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                                <View style={[styles.shadow, styles.aboutLaps]}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251', paddingLeft: 10, marginBottom: 10}}>Punktacja i poziomy w Level.UP</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10}}>Punkty zdobywasz za odpowiedzi na pytania z Pigułek Wiedzy oraz za rozwiązanie TESTU WIEDZY. Przede wszystkim nagradzamy Twoje zaangażowanie, dlatego otrzymasz punkty nawet za błędną odpowiedź. Zobacz, jak wygląda punktacja względem poziomów:</Text>
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10, marginTop: 10, paddingLeft: 10}}>
                                        <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/Page-1.png')}/>
                                        <View style={{flex: 4}}>
                                            <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>STARTER</Text>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź POPRAWNA</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>2 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź NIEPOPRAWNA</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>1 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Brak odpowiedzi</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>-1 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Maksymalna ilość pkt</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>26 pkt</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <TouchableHighlight style={{marginBottom: 10, flex: 2, alignSelf: 'center'}}
                                                            onPress={() => {
                                                                this.setModalVisible(true);
                                                            }}>
                                            <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/001-scooter.png')}/>
                                        </TouchableHighlight>
                                        <View style={{flex: 4}}>
                                            <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>EXPERT</Text>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź POPRAWNA</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>4 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź NIEPOPRAWNA</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>2 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Brak odpowiedzi</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>-2 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Maksymalna ilość pkt</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>52 pkt</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderTopWidth: 1, borderBottomColor: '#00000029', borderTopColor: '#00000029', paddingTop: 10, paddingBottom: 10}}>
                                        <Image style={{marginBottom: 10, flex: 2, alignSelf: 'center'}} resizeMode="contain" source={require('../icons/003-car.png')}/>
                                        <View style={{flex: 4}}>
                                            <Text style={{fontSize: 13, color: '#0E395A', fontWeight: 'bold'}}>CHAMPION</Text>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź POPRAWNA</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>6 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Odpowiedź NIEPOPRAWNA</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>3 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Brak odpowiedzi</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>-3 pkt</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, marginTop: 3, marginBottom: 3}}>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>Maksymalna ilość pkt</Text>
                                                <Text style={{fontSize: 12, color: '#0E395A'}}>78 pkt</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, marginTop: 10, fontWeight: 'bold'}}>Pamiętaj!</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, marginTop: 10, paddingBottom: 20}}>WYŻSZE POZIOMY = WIĘCEJ PUNKTÓW</Text>
                                </View>
                            </View>
                            <View style={[styles.knowledgeMain, {flex: 1}]}>
                                <Text style={styles.knowledgeHeaderText}>O GRZE</Text>
                                <View style={[styles.shadow, styles.aboutLaps]}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0A3251', paddingLeft: 10, marginBottom: 10}}>Dodatkowe mechanizmy</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, fontWeight: 'bold'}}>KOŁO RATUNKOWE</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10}}>Pominąłeś rundę? Nic się nie stało, wybierz KOŁO RATUNKOWE, które pomoże Ci w odrobieniu straconych punktów. To specjalny mini-test, który składa się z pięciu pytań, które posiadają punktację uzależnioną od Twojego poziomu.</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10, fontWeight: 'bold', marginTop: 10}}>Pytanie TURBO</Text>
                                    <Text style={{fontSize: 14, color: '#0A3251', paddingLeft: 10}}>To przywilej dla najlepszych – każdy, kto zdobędzie status CHAMPION może liczyć na specjalne pytanie otwarte. Za udzielenie odpowiedzi na pytanie TURBO możesz otrzymać nawet 30 pkt!</Text>
                                    <View style={styles.additionalQuestions}>
                                        <TouchableOpacity style={{flex: 1}}>
                                            <Image resizeMode='contain' style={{width: '100%'}} source={require('../images/Group_177.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flex: 1}}>
                                            <Image resizeMode='contain' style={{width: '100%'}} source={require('../images/Group_176.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Swiper>

                    </ScrollView>
                    <Footer knowledgeCount={this.props.knowledgeCount} testCount={this.props.testCount} navigation={this.props.navigation}/>
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
        zIndex: 3,
    },
    knowledgeHeaderText: {
        fontSize: 13,
        color: '#0E395A',
        marginTop: 12,
        marginBottom: 20,
    },
    aboutLaps: {
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
    rankingHeader: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 6,
        justifyContent: 'space-between',
    },
    rankingOwn: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 6,
        justifyContent: 'space-between',
    },
    rankingColumn: {

    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 14/2,
        backgroundColor: '#2592E6',
        marginRight: 7,
        marginLeft: 7,
    },
    additionalQuestions: {
        flexDirection: 'row',
        paddingLeft: 26,
        paddingRight: 26,
        width: '100%'
    },
    questionOne: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonActive: {
        backgroundColor: '#E20000'
    },
    buttonSolved: {
        backgroundColor: '#2592E6',
    },
    buttonPending: {
        backgroundColor: '#8A8A8A',
        opacity: 0.5
    },
});
