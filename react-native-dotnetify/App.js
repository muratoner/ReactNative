import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts';
import dotnetify from 'dotnetify/react-native';

// Dotnetify kütüphanesi yüklenmiş ve ayarlanmış olan .Net Core web projesinin adresini girmelisiniz! 
dotnetify.hubServerUrl = 'http://192.168.1.244:1453'

type Props = {};

export default class App extends Component<Props> {
  vmGauge;
  vmList;

  constructor() {
    super()

    this.state = {
      Value: 50,
      people: []
    }

    // BaseVM sınıfından türemiş olan ve SignalR'da hub'a karşılık gelen sınıfın adını giriyoruz. Bu sayede LiveGaugeVM sınıfındaki Value property'si ile buradaki state nesnesi içerisindeki Value değeri eşleştirmesi dotnetify kütüphanesi tarafından otomatik yapılarak değer geldikçe güncelleniyor olacak.
    this.vmGauge = dotnetify.react.connect('LiveGaugeVM', this, {
      exceptionHandler: ex => console.log(ex)
    });


    // BaseVM sınıfından türemiş olan ve SignalR'da hub'a karşılık gelen sınıfın adını giriyoruz. Bu sayede LiveListVM sınıfında kullanılan AddList metodunun 2 parametresine geçilen her bir Person nesnesi için gerçek zamanlı olarak bu sınıfdaki state nesnesi içerisinde yer alan people dizisine kaydın eklenmesi dotnetify kütüphanesi tarafından otomatik yapılarak yeni bir nesne geldikçe ekleniyor olacak.
    this.vmList = dotnetify.react.connect('LiveListVM', this, {
      exceptionHandler: ex => console.log(ex)
    });
  }

  componentWillUnmount() {
    this.vmGauge && this.vmGauge.$destroy();
    this.vmList && this.vmList.$destroy();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.people}
          keyExtractor={item => `${item.Id}`}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>Ad: {item.Name} {item.Surname}({item.Age})</Text>
              </View>
            );
          }}
        />
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
