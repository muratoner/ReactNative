import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export default class Products extends Component {
	
	renderProducts(products: []) {
		return products.map((item, i) => {
			return <View key={i} style={{ padding: 20 }}>
				<Button onPress={() => this.props?.onPress(item)} title={`${item.name} - ${item.price}`} />
			</View>
		})
	}

	render() {
		console.log(this.props)
		return <View style={styles.container}>
			{ this.renderProducts(this.props.products) }
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
