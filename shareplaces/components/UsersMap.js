import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

export default class UsersMap extends React.Component {
	constructor(){
		super()
	}

	render() {
	  let userLocationMarkers = []
	
	  if(this.props.userLocation){
		  userLocationMarkers.push(<MapView.Marker coordinate={this.props.userLocation} />)
	  }

	  if(this.props.places){
		userLocationMarkers.push(this.props.places.map(item => {
			return <MapView.Marker coordinate={item} key={item.key} />
		}))
	  }

	  return (
		<View style={styles.mapContainer}>
			<MapView style={styles.map} 
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				  }}
				region={this.props.userLocation}
			>
			{userLocationMarkers}
			</MapView>
		</View>
	  )
	};
}

const styles = StyleSheet.create({
	mapContainer: {
		width: '100%',
		height: 250
	},
	map: {
		width: '100%',
		height: '100%'
	}
})