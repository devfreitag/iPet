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
