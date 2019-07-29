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


export default class ImpactStayHouse extends React.Component {
  constructor(){
super();
  this.state = { ImpactStayToggle: true }
  }
  handleClick() {
    this.setState({ ImpactStayToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactStayToggle = this.state.ImpactStayToggle;
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
      { ImpactStayToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"SCORCHED EARTH POLICY MAKE YOU SAD BUT YOU ARE KNOW SURE THAT FIRE IS A VIABLE WEAPON AGAINST VAMPIRES.\n YOU LOSE 1PT IN RESOLVE BUT GAIN 2 PT IN KNOWLEDGE"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};