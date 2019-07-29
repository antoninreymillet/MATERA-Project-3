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


export default class ImpactWrongCliff extends React.Component {
  constructor(){
super();
  this.state = { ImpactWrongToggle: true }
  }
  handleClick() {
    this.setState({ ImpactWrongToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactWrongToggle = this.state.ImpactWrongToggle;
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
      { ImpactWrongToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"THE EFFECT FADE AWAY 2 DAYS LATER YOU HAVE LOST 2PTS IN EVERY STATS"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};