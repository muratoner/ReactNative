import React from 'react';
import TodoApp from './src/TodoApp';
import store from './src/store';
import {Provider} from 'react-redux'

const App = () => {
  return <Provider store={store}>
	  <TodoApp />
  </Provider>
};

export default App;
