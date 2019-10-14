import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { boooks } from '../data'
import Products from '../components/Products'

class BooksScreen extends Component {
	static navigationOptions = {
		headerTitle: 'Books'
	}

	render() {
		return (
			<View style={styles.container}>
				<Products products={boooks} onPress={this.props.addItemToCart} />
			</View>
		)
	}
}

const mapDispatchToProps = (dispacth) => {
	return {
		addItemToCart: (item) => dispacth({ type: 'ADD_TO_CART', payload: item })
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default connect(null, mapDispatchToProps)(BooksScreen)
