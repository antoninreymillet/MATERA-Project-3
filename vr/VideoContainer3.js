import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ForestMovie from './ForestMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer3 extends React.Component {
  constructor(){
super();
  this.state = { videoForestToggle: true }
  }
  handleClick() {
    this.setState({ videoForestToggle: false})
  }
  render() {
    const videoForestToggle = this.state.videoForestToggle;
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
      { videoForestToggle ? (
        <ForestMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};