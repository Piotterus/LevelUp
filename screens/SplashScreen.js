import React from 'react'

import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

export default class SplashScreen extends React.Component {

    constructor(props) {
        super();
    }

    render () {
        return (
            <View>
                <Image source={require('../images/levelup_startx2.png')} style={styles.imageBackground}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get("window").width, //for full screen
    },
});
