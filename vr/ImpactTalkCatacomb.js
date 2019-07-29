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


export default class ImpactTalkChurch extends React.Component {
  constructor(){
super();
  this.state = { ImpactTalkToggle: true }
  }
  handleClick() {
    this.setState({ ImpactTalkToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactTalkToggle = this.state.ImpactTalkToggle;
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
      { ImpactTalkToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"YOUR KNOWLEDGE OF HOW TO DEAL WITH GHOST GIVES YOU 2PTS IN KNOWLEDGE"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};