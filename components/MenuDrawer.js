import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    Platform,
    Dimensions,
    StyleSheet,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress= {() => this.props.navigation.navigate(nav)}>
                <Text style = {styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source= {require('../assets/images/robot-prod.png')}/>
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.name}>Kuroash Esmaili</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Search...', 'Search...')}
                    {this.navLink('Profile', 'Profile')}
                    {this.navLink('Add Pick', 'Add Pick')}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    profile:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'center',
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    topLinks:{
        height:160,
        backgroundColor: 'black',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:10,
        paddingBottom:450,
    },
    link:{
        flex:1,
        fontSize:20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    }
})