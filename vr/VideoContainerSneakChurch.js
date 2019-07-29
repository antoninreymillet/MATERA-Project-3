import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ChurchSneakMovie from './ChurchSneakMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerSneakChurch extends React.Component {
  constructor(){
super();
  this.state = { videoSneakChurchToggle: true }
  }
  handleClick() {
    this.setState({ videoSneakChurchToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoSneakChurchToggle = this.state.videoSneakChurchToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width:7.5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3.5, 0, -2]}],
      }}>
      { videoSneakChurchToggle ? (
        <ChurchSneakMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};