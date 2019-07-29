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


export default class ImpactInvestigateChurch extends React.Component {
  constructor(){
super();
  this.state = { ImpactInvestigateToggle: true }
  }
  handleClick() {
    this.setState({ ImpactInvestigateToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactInvestigateToggle = this.state.ImpactInvestigateToggle;
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
      { ImpactInvestigateToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"THE GRAAL IS AN HOLY SYMBOLE, YOU GAIN 1PT IN FAITH AND 1PT IN RESOLVE"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};