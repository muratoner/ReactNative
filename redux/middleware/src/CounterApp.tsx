import React, { Component } from 'react'
import { StatusBar, SafeAreaView, ScrollView, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Header, Colors } from 'react-native/Libraries/NewAppScreen'
import { connect } from 'react-redux'

class CounterApp extends Component {
	constructor() {
		super()
	}

	render() {
		return <>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<Header />
					<View style={styles.body}>
						{/* Classic Technic For State Management */}
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 200, alignSelf: 'center', marginTop: 50 }}>
							<TouchableOpacity onPress={() => this.props.increaseCount()}>
								<Text style={{ fontSize: 20 }}>Increase</Text>
							</TouchableOpacity>
							<Text style={{ fontSize: 20 }}>
								{this.props.count}
							</Text>
							<TouchableOpacity onPress={() => this.props.decreaseCount()}>
								<Text style={{ fontSize: 20 }}>Descrease</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	}
}

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' }),
		decreaseCount: () => dispatch({ type: 'DECREASE_COUNT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	body: {
		backgroundColor: Colors.white,
	}
});