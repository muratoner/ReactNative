import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { electronics } from '../data'
import Products from '../components/Products'

class ElectronicsScreen extends Component {

	static navigationOptions = {
		headerTitle: 'Electronics'
	}

	render() {
		return (
			<View style={styles.container}>
				<Products products={electronics} onPress={this.props.addItemToCart} />
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default connect(null, mapDispatchToProps)(ElectronicsScreen)
