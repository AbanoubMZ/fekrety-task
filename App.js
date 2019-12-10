import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './src/Screens/HomeScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import FeedbackScreen from './src/Screens/FeedbackScreen';
import ListScreen from './src/Screens/ListScreen';

const windowWidth = Dimensions.get("window").width;
const AppNavigator = createMaterialTopTabNavigator(  
  {  
      Home: HomeScreen,
      Items: ListScreen,
      Resgister: RegisterScreen,
  
  },
  {  
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor:'white',  
        showIcon:false,
        showLabel:true,  
        style: {  
            backgroundColor:'#08da5f'  
        },
        labelStyle: {
          fontSize: 14,
          color:'white'
        },
        tabStyle: {
          alignItems:'center',
          flexDirection:'row',
          felx:1,
          width:windowWidth/3,
          height:60
        },  
    },  
  }  
)  
export default createAppContainer(AppNavigator); 

