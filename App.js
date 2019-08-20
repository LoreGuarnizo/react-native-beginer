import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import ShowLocation from './components/Location';
import DataVisualization from './components/DataVisualization';
import Menu from './components/Menu';

const MainNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Map: {screen: ShowLocation},
  Charts: {screen: DataVisualization},
  initialRouteName: 'Menu',
});

const App = createAppContainer(MainNavigator);

export default App;
