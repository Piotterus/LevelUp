import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView} from "react-native";

export default class CustomDrawer extends React.Component {

    render() {
        return(
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.mainDrawer}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()} style={{position: 'absolute', left: 20}} >
                                <Image style={{height: 30, width: 30}} source={require('../icons/X-icon.png')}/>
                            </TouchableOpacity>
                            <Image style={{alignSelf: 'center'}} source={require('../icons/userDrawer.png')}/>
                        </View>
                        <Text style={[styles.textColor, {marginTop: 20}]}>ZALOGOWANY:</Text>
                        <Text style={[styles.textColor, styles.textName]}>{this.props.firstName} <Text style={{fontWeight: 'bold'}}>{this.props.lastName} </Text></Text>
                        <View style={{marginTop: 12, marginBottom: 12}}/>
                        {/*<Image style={{marginTop: 26, marginBottom: 22}} source={require('../icons/gear.png')}/>*/}
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>HOME</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutLaps')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>O GRZE</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterKnowledge')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>WIEDZA</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EnterQuestions')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>PYTANIA</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Results')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>MOJE WYNIKI</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Statute')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>REGULAMIN</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>KONTAKT</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <View style={{height: 82}}/>
                        <View style={styles.drawerLine}/>
                        <TouchableOpacity onPress={() => {this.props.logout(); this.props.navigation.closeDrawer()}} style={styles.drawerItem}>
                            <Text style={styles.drawerText}>WYLOGUJ</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerLine}/>
                        <View style={{height: 24}}/>
                        <Image source={require('../icons/Logo_LevelUP_akcept-01.png')}/>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    mainDrawer: {
        alignItems: 'center',
        paddingTop: 43,
        paddingBottom: 24
    },
    textColor: {
        color: '#0E395A'
    },
    textName: {
        fontSize: 21
    },
    drawerItem: {
        width: '85%',
        alignItems: 'center',
    },
    drawerText: {
        fontSize: 17,
        color: '#0E395A',
        paddingTop: 16,
        paddingBottom: 16
    },
    drawerLine: {
        borderTopWidth: 1.5,
        borderTopColor: '#0E395A',
        width: '85%',
    }
});
