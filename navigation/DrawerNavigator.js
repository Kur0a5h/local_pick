import React from 'react';
import {Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: SearchScreen
    },
});

export default createAppContainer(DrawerNavigator);