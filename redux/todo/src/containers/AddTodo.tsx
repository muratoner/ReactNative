import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'


class AddTodo extends Component {

	state = {
		text: ''
	}

	addTodo(text: string) {
		// redux store
		this.props.dispatch({ type: 'ADD_TODO', text })
		this.setState({ text: '' })
	} 

	render() {
		return <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 20, borderRadius: 40 }}>
			<TextInput
				onChangeText={(text) => this.setState({ text })}
				value={this.state.text}
				placeholder="Eg. Create New Video"
				style={{ borderWidth: 1, borderColor: '#f2f2e1', height: 50, flex: 1, padding: 5, backgroundColor: '#eaeaea', paddingLeft: 20, borderBottomLeftRadius: 10 }} />

			<TouchableNativeFeedback onPress={() => this.addTodo(this.state.text)}>
				<View style={{ height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eaeaea', borderTopRightRadius: 10 }}>
					<FontAwesome name='plus' size={30} style={{ color: '#de9595', padding: 10 }} />
				</View>
			</TouchableNativeFeedback>
		</View>
	}
}

export default connect()(AddTodo)