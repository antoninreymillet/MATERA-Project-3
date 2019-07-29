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


export default class ImpactForceForest extends React.Component {
  constructor(){
super();
  this.state = { ImpactForceToggle: true }
  }
  handleClick() {
    this.setState({ ImpactForceToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactForceToggle = this.state.ImpactForceToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3, -5.5, -5]}],
      }}>
      { ImpactForceToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU ARE A BIT LOST, YOU LOSE 1PT IN RESOLVE AND 1PT IN KNOWLEDGE"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};