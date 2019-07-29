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


export default class ImpactAttackChurch extends React.Component {
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
            {"YOU LOST 2 PTS IN CONSTITUTION AND 1 PTS IN RESOLVE"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};