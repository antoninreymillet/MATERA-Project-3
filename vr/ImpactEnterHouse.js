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


export default class ImpactEnterHouse extends React.Component {
  constructor(){
super();
  this.state = { ImpactEnterToggle: true }
  }
  handleClick() {
    this.setState({ ImpactEnterToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactEnterToggle = this.state.ImpactEnterToggle;
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
      { ImpactEnterToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU ARE CHIROPTOPHOBIC, THOSE BATS MAKES YOU LOSE 3PTS IN RESOLVE AND 1PT IN CONSTITUTION"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};