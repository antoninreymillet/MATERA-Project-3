import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ChurchAttackMovie from './ChurchAttackMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerAttackChurch extends React.Component {
  constructor(){
super();
  this.state = { videoAttackChurchToggle: true }
  }
  handleClick() {
    this.setState({ videoAttackChurchToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoAttackChurchToggle = this.state.videoAttackChurchToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [5.5, 0, -2]}],
      }}>
      { videoAttackChurchToggle ? (
        <ChurchAttackMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};
