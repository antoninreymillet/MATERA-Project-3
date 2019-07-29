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


export default class ImpactHolyRiteCemetery extends React.Component {
  constructor(){
super();
  this.state = { ImpactHolyRiteToggle: true }
  }
  handleClick() {
    this.setState({ ImpactHolyRiteToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactHolyRiteToggle = this.state.ImpactHolyRiteToggle;
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
      { ImpactHolyRiteToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU GAIN 2 PTS IN FAITH AND 2 PTS IN RESOLVE"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};