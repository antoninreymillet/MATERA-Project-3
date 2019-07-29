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


export default class ImpactWrong2Cliff extends React.Component {
  constructor(){
super();
  this.state = { ImpactWrong2Toggle: true }
  }
  handleClick() {
    this.setState({ ImpactWrong2Toggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactWrong2Toggle = this.state.ImpactWrong2Toggle;
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
      { ImpactWrong2Toggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOU WANDER THE STEPPE FOR 2 DAYS THAN THE EFFECT FADE AWAY,\n WITH A DISTINGUISHED TASTE OF BLOOD IN YOUR MOUTH YOU LOSE 1PT IN EVERY STATS"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};