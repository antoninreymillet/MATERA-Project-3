import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class TileTitle extends React.Component {
    constructor() {
        super();
        this.state = {title: "TileTitle"};
    }
  render() {
    return (
        <View
        style={{
            width: 6,
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginLeft: 0.4,
            marginRight: 0.4,
            transform: [{translate: [0, 0, -5]}],
            layoutOrigin: [0.5, 0.5]
        }}>
        <Text style={{fontSize: 0.2, color: 'white', backgroundColor: 'red', textAlign: 'center'}}>
            {this.state.title}</Text>
            </View>
    );
  }
};