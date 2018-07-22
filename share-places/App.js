import React from 'react'
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

export default class App extends React.Component {
  constructor(){
    super()

    this.getUserLocationHandler = this.getUserLocationHandler.bind(this)
    this.getUserPlaces = this.getUserPlaces.bind(this)
  }

  state = {
    userLocation: null,
    places: null
  }

  getUserPlaces(){
    // TODO: Change your firebase live database.
    fetch('https://radio-turkey.firebaseio.com/places.json')
    .then(res => res.json())
    .then(res => {
      let arry = []
      for (const key in res) {
        arry.push({
          latitude: res[key].latitude,
          longitude: res[key].longitude,
          key
        })
      }
      console.log(arry)
      this.setState({
        places: arry
      })
    })
    .catch(res => alert(res))
  }

  render() {
    return (
    <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Button title="Get Places" onPress={this.getUserPlaces} />
        </View>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap userLocation={this.state.userLocation} places={this.state.places} />
      </View>
    );
  }

  getUserLocationHandler(){
    var that = this
   navigator.geolocation.getCurrentPosition(position => {
    that.setState({
       userLocation: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
       }
     })
     fetch('https://radio-turkey.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
    .then(res => console.log(res))
    .catch(res => console.log(res))
   }, err => console.error(err))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
