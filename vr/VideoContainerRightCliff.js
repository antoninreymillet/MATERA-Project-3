import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CliffRightMovie from './CliffRightMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerRightCliff extends React.Component {
  constructor(){
super();
  this.state = { videoRightCliffToggle: true }
  }
  handleClick() {
    this.setState({ videoRightCliffToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoRightCliffToggle = this.state.videoRightCliffToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3.5, 1.5, 0]}],
      }}>
      { videoRightCliffToggle ? (
        <CliffRightMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};