import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CemeteryAttackMovie from './CemeteryAttackMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerAttackCemetery extends React.Component {
  constructor(){
super();
  this.state = { videoAttackCemeteryToggle: true }
  }
  handleClick() {
    this.setState({ videoAttackCemeteryToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoAttackCemeteryToggle = this.state.videoAttackCemeteryToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [2, 0, -2]}],
      }}>
      { videoAttackCemeteryToggle ? (
        <CemeteryAttackMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};