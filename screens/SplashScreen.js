import React from 'react'

import {Image, StyleSheet, Dimensions,} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', bottom: 0, right: 0, left: 0 }}>
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
