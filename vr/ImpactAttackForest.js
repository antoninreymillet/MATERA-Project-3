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


export default class ImpactAttackForest extends React.Component {
  constructor(){
super();
  this.state = { ImpactAttackToggle: true }
  }
  handleClick() {
    this.setState({ ImpactAttackToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactAttackToggle = this.state.ImpactAttackToggle;
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
      { ImpactAttackToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU LAUNCH AN HOLY GRENADE AND VAPORIZE THE FIEND YOU GAIN 2PTS IN RESOLVE AND 1PT IN FAITH"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};