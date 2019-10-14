import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'
import CustomText from '../components/CustomText'

class Settings extends Component {
	render() {
		return (
			<View>
				<CustomText>Settings</CustomText>
				<Button title="Increase" onPress={() => this.props.increase()} />
				<Button title="Decrease" onPress={() => this.props.decrease()} />
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		increase: () => dispatch({ type: 'INCREASE_FONT_SIZE' }),
		decrease: () => dispatch({ type: 'DECREASE_FONT_SIZE' })
	}
}

export default connect(null, mapDispatchToProps)(Settings)