import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CemeteryHolyRiteMovie from './CemeteryHolyRiteMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerHolyRiteCemetery extends React.Component {
  constructor(){
super();
  this.state = { videoHolyRiteCemeteryToggle: true }
  }
  handleClick() {
    this.setState({ videoHolyRiteCemeteryToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoHolyRiteCemeteryToggle = this.state.videoHolyRiteCemeteryToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [6, 0, -1]}],
      }}>
      { videoHolyRiteCemeteryToggle ? (
        <CemeteryHolyRiteMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};