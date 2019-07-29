import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class materaChoices extends React.Component {
  render() {
    return (
        <View
        style={{
            width: 5,
            flexDirection: 'row',
            alignItems: 'Stretch',
            justifyContent: 'center',
            transform: [{translate: [0, 0, -5]}],
            layoutOrigin: [0.5, 0.5]
        }}>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#F9DDBE'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>
            Church</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#F9DDBE'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>
            Smoke</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#F9DDBE'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>
            Forest</Text>
      </View>
    </View>
    );
  }
};