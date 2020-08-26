import React from 'react'

import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Image, Switch} from "react-native";

export default class KnowledgeListItem extends React.Component {

    render() {
        let activeText = ""
        if (this.props.active == true) {
            activeText = "AKTUALNE"
        } else {
            activeText = "NIEAKTUALNE"
        }
        if (this.props.active == true) {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OneKnowledge', {id: this.props.id})}
                                  style={[styles.knowledgeOne, styles.shadow]}>
                    <Image style={{width: '100%'}} resizeMode="contain"
                           source={require('../images/iStock_000022969370_XXXLarge.png')}/>
                    <View style={styles.knowledgeDesc}>
                        <Text style={[styles.knowledgeDescText, {fontSize: 12}]}>{activeText}</Text>
                        <Text style={[styles.knowledgeDescText, {
                            fontSize: 18,
                            marginTop: 5
                        }]}>{this.props.knowledgeTitle}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                                  style={[styles.knowledgeOne, styles.shadow]}>
                    <Image style={{width: '100%'}} resizeMode="contain"
                           source={require('../images/iStock_000022969370_XXXLarge.png')}/>
                    <View style={styles.knowledgeDesc}>
                        <Text style={[styles.knowledgeDescText, {fontSize: 12}]}>{activeText}</Text>
                        <Text style={[styles.knowledgeDescText, {
                            fontSize: 18,
                            marginTop: 5
                        }]}>{this.props.knowledgeTitle}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
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
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6
    },
    knowledgeDesc: {
        flex: 1,
        paddingLeft: 26,
    },
    knowledgeDescText: {
        color: '#0E395A'
    }
})
