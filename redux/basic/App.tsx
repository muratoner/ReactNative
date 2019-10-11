import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CounterApp from './src/CounterApp';

const initialState = {
	count: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return { count: state.count + 1 }
		case 'DECREASE_COUNT':
			return { count: state.count - 1 }
	}
	return state
}

const store = createStore(reducer)

class App extends Component {
	render() {
		return <Provider store={store}>
			<CounterApp />
		</Provider>
	}
};

export default App;
