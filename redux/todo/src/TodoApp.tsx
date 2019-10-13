import React, { Component } from 'react'
import { Text, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import AddTodo from './containers/AddTodo'
import TodoList from './components/TodoList'

export default class TodoApp extends Component {
	render() {
		return <>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View style={styles.container}>
					<AddTodo />
					<View style={{ paddingHorizontal: 20, marginTop: 40 }}>
						<TodoList />
					</View>
				</View>
			</SafeAreaView>
		</>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
