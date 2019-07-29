import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CastleMovie from './CastleMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer7 extends React.Component {
  constructor(){
super();
  this.state = { videoCastleToggle: true }
  }
  handleClick() {
    this.setState({ videoCastleToggle: false})
  }
  render() {
    const videoCastleToggle = this.state.videoCastleToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}],
      }}>
      { videoCastleToggle ? (
        <CastleMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};