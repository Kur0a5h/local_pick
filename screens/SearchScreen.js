import React from 'react';
import { Platform, StatusBar,Text, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { f, auth, database } from '../config/firebase_config';

import MenuButton from '../components/MenuButton';

export default class SearchScreen extends React.Component {
  constructor(props)
  {
    super(props);
    this.registerUser('testemailaddress@gmail.com', 'fakepassword');
    this.state = {
      // isLoadingComplete: false,
    };
  }
  

  registerUser = (email, password) => {
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(email, password, userObject))
    .catch((error) => console.log('error loggoing in:', error));
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MenuButton navigation={this.props.navigation}/>
        <Text>Home/Search</Text>
      </View>
    )
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       <AppNavigator />
    //     </View>
    //   );
    // }
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require('./assets/images/robot-dev.png'),
  //       require('./assets/images/robot-prod.png'),
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Icon.Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //     }),
  //   ]);
  // };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
