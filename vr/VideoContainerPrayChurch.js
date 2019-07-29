import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ChurchPrayMovie from './ChurchPrayMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerPrayChurch extends React.Component {
  constructor(){
super();
  this.state = { videoPrayChurchToggle: true }
  }
  handleClick() {
    this.setState({ videoPrayChurchToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoPrayChurchToggle = this.state.videoPrayChurchToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [5, 0, -2]}],
      }}>
      { videoPrayChurchToggle ? (
        <ChurchPrayMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};