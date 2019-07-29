import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import HouseMovie from './HouseMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer2 extends React.Component {
  constructor(){
super();
  this.state = { videoHouseToggle: true }
  }
  handleClick() {
    this.setState({ videoHouseToggle: false})
  }
  render() {
    const videoHouseToggle = this.state.videoHouseToggle;
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
      { videoHouseToggle ? (
        <HouseMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};