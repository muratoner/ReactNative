import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
class CustomText extends Component {
	render() {
		return <Text style={{ fontSize: this.props.fontSize }}>{this.props.children}</Text>
	}
}

const mapStateToProps = (state) => {
	return {
		fontSize: state
	}
}

export default connect(mapStateToProps)(CustomText)