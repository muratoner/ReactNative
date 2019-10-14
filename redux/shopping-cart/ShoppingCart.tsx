import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet
} from "react-native";
import { createAppContainer } from 'react-navigation'
import HomeScreen from "./screens/HomeScreen";
import BooksScreen from "./screens/BooksScreen";
import CartScreen from "./screens/CartScreen";
import ShoppingCartIcon from "./components/ShoppingCartIcon";
import { createStackNavigator } from "react-navigation-stack";
import ElectronicsScreen from "./screens/ElectronicsScreen";


const AppStackNavigator = createStackNavigator({
	Home: HomeScreen,
	Electronics: ElectronicsScreen,
	Books: BooksScreen,
	Cart: CartScreen
}, {
	defaultNavigationOptions: {
		headerTitle: 'Shopping Cart',
		headerStyle: {
			backgroundColor: '#f4511e'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
		headerRight: (
			<ShoppingCartIcon />
		)
	},
}, { initialRouteName: 'Home' })

class ShoppingCart extends Component {
	render() {
		return <AppStackNavigator />
	}
}
export default createAppContainer(AppStackNavigator);