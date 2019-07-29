import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import HouseStayMovie from './HouseStayMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerStayHouse extends React.Component {
  constructor(){
super();
  this.state = { videoStayHouseToggle: true }
  }
  handleClick() {
    this.setState({ videoStayHouseToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoStayHouseToggle = this.state.videoStayHouseToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [2, 0, -2]}],
      }}>
      { videoStayHouseToggle ? (
        <HouseStayMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};