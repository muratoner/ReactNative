import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={styles.scrollView}>
						<Header />
						<View style={styles.body}>
							
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	body: {
		backgroundColor: Colors.white,
	}
});

export default App;
