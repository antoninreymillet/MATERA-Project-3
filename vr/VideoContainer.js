import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ChurchMovie from './ChurchMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer extends React.Component {
  constructor(){
super();
  this.state = { videoChurchToggle: true }
  }
  handleClick() {
    this.setState({ videoChurchToggle: false})
  }
  render() {
    const videoChurchToggle = this.state.videoChurchToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}],
      }}>
      { videoChurchToggle ? (
        <ChurchMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};