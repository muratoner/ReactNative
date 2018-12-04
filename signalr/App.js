import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import signalr from 'react-native-signalr';
import SketchCanvas from '@terrylinla/react-native-sketch-canvas';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)

    this.canvas = null
    this.connection = null
    this.connectionId = null
    this.proxy = null
  }

  componentDidMount() {
    //This is the server under /example/server published on azure.
    this.connection = signalr.hubConnection('http://192.168.0.13');
    this.connection.logging = true;

    this.proxy = this.connection.createHubProxy('chatHub');
    //receives broadcast messages from a hub function, called "helloApp"
    this.proxy.on('receiveMessage', (message) => {
      debugger
      Alert.alert('Mesajınız var', message)
    });

    this.proxy.on('helloApp', (message) => {
      debugger
      Alert.alert('Yeni Kullanıcı Var', message)
    });

    this.proxy.on('tick', (message) => {
      console.log(`Yeni içerik geldi ${message}`)
    });

    // atempt connection, and handle errors
    this.connection.start().done(() => {
      alert('bağlantı kuruldu!!!')

      this.connectionId = this.connection.id
      console.log('Now connected, connection ID=' + this.connectionId);

      this.proxy.invoke('helloServer', 'Hello Server, how are you?')
        .done((directResponse) => {
          console.log('direct-response-from-server', directResponse);
        }).fail(() => {
          console.warn('Something went wrong when calling server, it might not be up and running?')
        });

    }).fail(() => {
      console.log('Failed');
    });

    //connection-handling
    this.connection.connectionSlow(() => {
      console.log('We are currently experiencing difficulties with the connection.')
    });

    this.connection.error((error) => {
      const errorMessage = error.message;
      let detailedError = '';
      if (error.source && error.source._response) {
        detailedError = error.source._response;
      }
      if (detailedError === 'An SSL error has occurred and a secure connection to the server cannot be made.') {
        console.log('When using react-native-signalr on ios with http remember to enable http in App Transport Security https://github.com/olofd/react-native-signalr/issues/14')
      }
      console.debug('SignalR error: ' + errorMessage, detailedError)
    });

    this.proxy.on('getPaths', (connectionId, paths) => {
      paths = JSON.parse(paths)
      this.canvas.addPath({ path: paths, size: { width: 360,
          height: 476 } })
    })
  }

  strokeEnd(){
    this.proxy.invoke('addPaths', this.connectionId, JSON.stringify(this.canvas._sketchCanvas._path))
  }

  render() {
    return (
      <View style={styles.container}>
        <SketchCanvas
            ref={ref => this.canvas = ref}
            onStrokeEnd={() => this.strokeEnd()}
            containerStyle={{ backgroundColor: 'white', flex: 1 }}
            canvasStyle={{ backgroundColor: 'white', flex: 1 }}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
            clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
            eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
            strokeComponent={color => (
                <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
            )}
            strokeSelectedComponent={(color, index, changed) => {
                return (
                    <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
                )
            }}
            strokeWidthComponent={(w) => {
                return (<View style={styles.strokeWidthButton}>
                    <View style={{
                        backgroundColor: 'white', marginHorizontal: 2.5,
                        width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                    }} />
                </View>
                )
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
      marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
      justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
  },
  functionButton: {
      marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
      backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
});
