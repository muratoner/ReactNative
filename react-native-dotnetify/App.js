import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts';
import dotnetify from 'dotnetify/react-native';

// Dotnetify kütüphanesi yüklenmiş ve ayarlanmış olan .Net Core web projesinin adresini girmelisiniz! 
dotnetify.hubServerUrl = 'http://192.168.0.13:1453'

type Props = {};

export default class App extends Component<Props> {
  vm

  constructor() {
    super()

    this.state = {
      Value: 50
    }

    // BaseVM sınıfından türemiş olan ve SignalR'da hub'a karşılık gelen sınıfın adını giriyoruz. Bu sayede LiveGaugeVM sınıfındaki Value property'si ile buradaki state nesnesi içerisindeki Value değeri eşleştirmesi dotnetify kütüphanesi tarafından otomatik yapılarak değer geldikçe güncelleniyor olacak.
    this.vm = dotnetify.react.connect('LiveGaugeVM', this, {
      exceptionHandler: ex => console.log(ex)
    });
  }

  componentWillUnmount() {
    this.vm && this.vm.$destroy();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.digital}>{this.state.Value}</Text>
        <ProgressCircle
        animate={true}
          style={ { height: 200, width: 200 } }
          progress={ this.state.Value / 100 }
          progressColor={'rgb(134, 65, 244)'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  digital: {
    fontSize: 80
  }
});
