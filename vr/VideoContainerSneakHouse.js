import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import HouseSneakMovie from './HouseSneakMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerSneakHouse extends React.Component {
  constructor(){
super();
  this.state = { videoSneakHouseToggle: true }
  }
  handleClick() {
    this.setState({ videoSneakHouseToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoSneakHouseToggle = this.state.videoSneakHouseToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [5.5, -1, -1]}],
      }}>
      { videoSneakHouseToggle ? (
        <HouseSneakMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};