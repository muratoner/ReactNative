import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class HomeScreen extends Component {
	render() {
		const { navigate } = this.props.navigation
		return (
			<View style={styles.container}>
				<Button title='Electronics' onPress={() => navigate('Electronics')}/>
				<Button title='Books' onPress={() => navigate('Books')} />
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
