import React from 'react';

import {Text, View, Button} from "react-native";

export default class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kids: '',
            myID: global.myID,
            title: "F"
        }


    }

    /*componentDidMount(): void {
        let url = "https://piotr2.scementowani.pl/apiPiotr";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                method: "getKids",
                me: {
                    id: "43"
                },
            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    kids: responseJson.kids,
                })
            })
            .catch((error) => {
                console.error(error);
            });

        let url2 = "https://www.good-game.biz/pl/apiverbum/apiVerbum/userDashboard?session=391d958abeb27aa54ffced9afcdc54b9";

        fetch(url2, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    title: responseJson.data.summary.user.level.name,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    createKidsList() {
        let kidsList = [];
        //console.error(this.state.articles)
        console.log(this.state.kids)
        //for (let i=1;i<=Object.keys(this.state.articles).length;i++) {
        //for (let i in Object.keys(this.state.articles)) {
        for (let i in this.state.kids) {
            //console.error(this.state.articles[1].introtext)
            //console.log(this.state.articles[i].introtext)
            kidsList.push(<ListItem key={i} navigation={this.props.navigation} navi="Kid" id={this.state.kids[i].id} nameText={this.state.kids[i].name} ageText={"lat:" + this.state.kids[i].age} pointsText="" update={() => this.updateKids()}/>);
        }
        //console.error(newsList)
        return kidsList;
    }

    updateKids() {
        let url = "https://piotr2.scementowani.pl/apiPiotr";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                method: "getKids",
                me: {
                    id: this.state.myID
                },
            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    kids: responseJson.kids,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    render() {
        return(
            <View>
                <Text>Main</Text>
                <Button
                    title="Go to Other"
                    onPress={() => this.props.navigation.navigate('Other')}
                />
            </View>
        )
    }

    /*render() {
        return(
            <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
                <NavigationEvents onWillFocus={() => this.updateKids()}/>
                <MyHeader text="MOJE DZIECI"/>
                <ScrollView>

                    {this.createKidsList()}

                </ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddKid',{myID: this.state.myID})} style={{marginBottom: 40, justifyContent: 'flex-end'}} >
                    <View style={styles.addView}>
                        <Text style={styles.addText}>
                            DODAJ DZIECKO
                        </Text>
                        <Text style={styles.addText}>
                            {this.state.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }*/
}
