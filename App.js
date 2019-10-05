import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/Home';
import Adocao from './src/screens/Adocao';
import InfoAnimal from './src/screens/InfoAnimal';

const mainNavigation = createStackNavigator(
  {
    Home,
    Adocao,
    InfoAnimal,
  },
  {
    initialRouteName: 'InfoAnimal',
  },
);

export default createAppContainer(mainNavigation);
