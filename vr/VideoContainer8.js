import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import RedSunMovie from './RedSunMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer8 extends React.Component {
  constructor(){
super();
  this.state = { videoEndToggle: true }
  }
  handleClick() {
    this.setState({ videoEndToggle: false})
  }
  render() {
    const videoEndToggle = this.state.videoEndToggle;
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
      { videoEndToggle ? (
        <RedSunMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};