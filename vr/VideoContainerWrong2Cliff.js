import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CliffWrong2Movie from './CliffWrong2Movie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerWrong2Cliff extends React.Component {
  constructor(){
super();
  this.state = { videoWrong2CliffToggle: true }
  }
  handleClick() {
    this.setState({ videoWrong2CliffToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoWrong2CliffToggle = this.state.videoWrong2CliffToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [1, 1.5, 0]}],
      }}>
      { videoWrong2CliffToggle ? (
        <CliffWrong2Movie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};