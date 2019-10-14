import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Products from '../components/Products'

export class CartScreen extends Component {
	render() {
		console.log(this.props)
		return (
			<View style={styles.container}>
				{
					this.props?.cartItems?.length > 0
						? <Products products={this.props.cartItems} onPress={(item) => this.props.removeCartItem(item)} />
						: <Text>No items in your cart</Text>
				}
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems: state
	}
}

const mapDispacthToProps = (dispatch) => {
	return {
		removeCartItem: (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item })
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default connect(mapStateToProps, mapDispacthToProps)(CartScreen)
