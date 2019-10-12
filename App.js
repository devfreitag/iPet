import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/Home';
import Adocao from './src/screens/Adocao';
import Doacao from './src/screens/Doacao';
import InfoAnimal from './src/screens/InfoAnimal';

const mainNavigation = createStackNavigator(
  {
    Home,
    Adocao,
    InfoAnimal,
    Doacao,
  },
  {
    initialRouteName: 'Home',
  },
);

//componentDidMount() {
//  FirebaseService.getDataList('leituras', dataIn => this.setState({dataList: dataIn}), 10);
//};

//state = 
//{
//  dataList: null,
//};



export default createAppContainer(mainNavigation);
