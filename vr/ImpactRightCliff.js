import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class ImpactRightCliff extends React.Component {
  constructor(){
super();
  this.state = { ImpactRightToggle: true }
  }
  handleClick() {
    this.setState({ ImpactRightToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactRightToggle = this.state.ImpactRightToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        width: 5,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3, -5.5, -5]}],
      }}>
      { ImpactRightToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU ARE RIGHT YOU GAIN 1PT IN EVERY STATS"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};