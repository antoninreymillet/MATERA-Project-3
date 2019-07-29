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


export default class ImpactRedirectCastle extends React.Component {
  constructor(){
super();
  this.state = { ImpactRedirectToggle: true }
  }
  handleClick() {
    this.setState({ ImpactRedirectToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactRedirectToggle = this.state.ImpactRedirectToggle;
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
      { ImpactRedirectToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU ARE BURNT AND EXHAUSTED BUT YOUR RESOLVE IS STRENGTHEN.YOU GAIN 2PT IN RESOLVE, YOU LOSE 2PT IN CONSTITUTION"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};