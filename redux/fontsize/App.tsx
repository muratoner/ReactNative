import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './stores';
import { FontSize } from './reducers/FontSize';
import FontSizeApp from './FontSizeApp';

const App = () => {
  return <Provider store={store}>
	  <FontSizeApp />
  </Provider>
};

export default App