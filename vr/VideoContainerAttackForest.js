import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ForestAttackMovie from './ForestAttackMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerAttackForest extends React.Component {
  constructor(){
super();
  this.state = { videoAttackForestToggle: true }
  }
  handleClick() {
    this.setState({ videoAttackForestToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoAttackForestToggle = this.state.videoAttackForestToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [5, 0, 0]}],
      }}>
      { videoAttackForestToggle ? (
        <ForestAttackMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};