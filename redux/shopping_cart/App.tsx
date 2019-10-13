import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import ShoppingCart from './ShoppingCart';

export default class App extends Component {
	render() {
		return <Provider store={store}>
			<ShoppingCart />
		</Provider>
	}
}

