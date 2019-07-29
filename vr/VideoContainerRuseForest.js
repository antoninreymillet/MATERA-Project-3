import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ForestRuseMovie from './ForestRuseMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerRuseForest extends React.Component {
  constructor(){
super();
  this.state = { videoRuseForestToggle: true }
  }
  handleClick() {
    this.setState({ videoRuseForestToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoRuseForestToggle = this.state.videoRuseForestToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [2.5, 0, 0]}],
      }}>
      { videoRuseForestToggle ? (
        <ForestRuseMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};