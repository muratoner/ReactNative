import React from 'react'
import { View, TouchableHighlight, Text, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'

const TodoList = ({todos, toggleTodo}) => (
	<View>
		{
			todos.map(todo => <TouchableNativeFeedback key={todo.id} onPress={() => toggleTodo(todo.id)}>
				<Text style={{ fontSize: 24, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Text>
			</TouchableNativeFeedback>)
		}
	</View>
)

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch({
		type: 'TOGGLE_TODO',
		id
	})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)