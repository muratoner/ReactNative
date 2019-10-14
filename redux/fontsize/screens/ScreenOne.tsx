import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomText from '../components/CustomText'

export default class ScreenOne extends Component {
	render() {
		return (
			<View>
				<CustomText> Screen One </CustomText>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
