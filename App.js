import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createTabNavigator} from 'react-navigation-tabs'
import SignupLoginScreen from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default function App (){    
  return(
    <AppContainer/>
  )
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen: {screen: SignupLoginScreen},
  TabNavigator: {screen:TabNavigator}
})

const TabNavigator = createTabNavigator({
  Home:{screen:HomeScreen},
  Exchange:{screen:ExchangeScreen},
})



const AppContainer = createAppContainer (switchNavigator)
