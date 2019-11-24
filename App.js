import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/Home';
import Adocao from './src/screens/Adocao';
import Doacao from './src/screens/Doacao';
import InfoAnimal from './src/screens/InfoAnimal';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';

import * as firebase from 'firebase';
import ApyKeys from './src/config/firebase';

console.disableYellowBox = true;

const mainNavigation = createStackNavigator(
  {
    Home,
    Adocao,
    InfoAnimal,
    Doacao,
    Login,
    Cadastro
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
    navigationOptions: { headerVisible: false },
  },
);

//componentDidMount() {
//  FirebaseService.getDataList('leituras', dataIn => this.setState({dataList: dataIn}), 10);
//};

//state = 
//{
//  dataList: null,
//};

firebase.initializeApp(ApyKeys.FirebaseConfig);

const App = createAppContainer(mainNavigation);

export default App;
