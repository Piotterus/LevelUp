import React from 'react'

import {Text, Button, View} from 'react-native'

export default class OtherScreen extends React.Component {


    render() {
        return(
            <View>
                <Text>OTHER</Text>
                <Button
                    title="Go to Main"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        )
    }
}
