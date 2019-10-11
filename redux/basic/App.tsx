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
		this.state = {
			count: 0
		}
	}	

	increase = () => {
		this.setState({
			count: this.state.count + 1	
		})
	}

	decrease = () => {
		this.setState({
			count: this.state.count - 1	
		})
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
							{/* Classic Technic For State Management */}
							<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 200, alignSelf: 'center', marginTop: 50 }}>
								<TouchableOpacity onPress={() => this.increase()}>
									<Text style={{ fontSize: 20 }}>Increase</Text>
								</TouchableOpacity>
								<Text style={{ fontSize: 20 }}>
									{this.state.count}
								</Text>
								<TouchableOpacity onPress={() => this.decrease()}>
									<Text style={{ fontSize: 20 }}>Descrease</Text>
								</TouchableOpacity>
							</View>
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
