import React from 'react';
import {Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { f, auth, database, storage } from '../config/firebase_config';
import { Ionicons } from '@expo/vector-icons';


import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPickScreen from '../screens/AddScreen';

import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    drawerPosition: "right",
    contentOptions: {
        itemStyle: {
            flexDirection: 'row-reverse'
        }
    },
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer navigation={navigation} />)
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        'Search...':{
            screen: SearchScreen
        },
        Profile:{
            screen: ProfileScreen
        },
        'Add Pick':{
            screen: AddPickScreen
        }
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);