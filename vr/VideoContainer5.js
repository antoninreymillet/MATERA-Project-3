import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CliffMovie from './CliffMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer5 extends React.Component {
  constructor(){
super();
  this.state = { videoCliffToggle: true }
  }
  handleClick() {
    this.setState({ videoCliffToggle: false})
  }
  render() {
    const videoCliffToggle = this.state.videoCliffToggle;
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
      { videoCliffToggle ? (
        <CliffMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};