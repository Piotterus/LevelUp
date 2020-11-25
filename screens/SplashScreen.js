import React from 'react'

import {View, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SafeAreaView>
                <Image source={require('../images/levelup_startx2.png')} style={styles.imageBackground}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get("window").width, //for full screen
    },
});
