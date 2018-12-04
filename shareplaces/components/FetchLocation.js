import React from 'react'
import { Button } from 'react-native'

export default class FetchLocation extends React.Component {
	render() {
	  return (
			<Button title="Get Location" onPress={this.props.onGetLocation}></Button>
	  );
	}
}