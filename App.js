import React, {Component} from 'react';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Adocao from './src/screens/Adocao';

const mainNavigation = createStackNavigator({
  Home,
  Adocao
},
{
  initialRouteName: 'Home'
});

export default createAppContainer(mainNavigation);