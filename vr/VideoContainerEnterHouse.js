import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import HouseEnterMovie from './HouseEnterMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerEnterHouse extends React.Component {
  constructor(){
super();
  this.state = { videoEnterHouseToggle: true }
  }
  handleClick() {
    this.setState({ videoEnterHouseToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoEnterHouseToggle = this.state.videoEnterHouseToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.5,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [4.5, 0, -2]}],
      }}>
      { videoEnterHouseToggle ? (
        <HouseEnterMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};