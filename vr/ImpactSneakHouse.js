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


export default class ImpactSneakHouse extends React.Component {
  constructor(){
super();
  this.state = { ImpactSneakToggle: true }
  }
  handleClick() {
    this.setState({ ImpactSneakToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactSneakToggle = this.state.ImpactSneakToggle;
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
      { ImpactSneakToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU WILL NEVER KNOW WHAT WAS INSIDE BUT THAT GROWL WILL HAUNT YOU FOREVER, YOU LOSE 1PT IN EACH STATS"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};