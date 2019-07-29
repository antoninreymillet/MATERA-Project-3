import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CemeteryInvestigateMovie from './CemeteryInvestigateMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerInvestigateCemetery extends React.Component {
  constructor(){
super();
  this.state = { videoInvestigateCemeteryToggle: true }
  }
  handleClick() {
    this.setState({ videoInvestigateCemeteryToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoInvestigateCemeteryToggle = this.state.videoInvestigateCemeteryToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3.5, 0, -2]}],
      }}>
      { videoInvestigateCemeteryToggle ? (
        <CemeteryInvestigateMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};