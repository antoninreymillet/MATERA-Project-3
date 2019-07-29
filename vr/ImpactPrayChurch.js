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


export default class ImpactPrayChurch extends React.Component {
  constructor(){
super();
  this.state = { ImpactPrayToggle: true }
  }
  handleClick() {
    this.setState({ ImpactPrayToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactPrayToggle = this.state.ImpactPrayToggle;
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
      { ImpactPrayToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"THE ANGEL DISAPPEAR IN THE LIGHT BUT HE TALKS TO YOU IN YOUR MIND, YOU GAIN 2 PTS IN FAITH"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};