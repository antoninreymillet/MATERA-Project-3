import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CliffWrongMovie from './CliffWrongMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerWrongCliff extends React.Component {
  constructor(){
super();
  this.state = { videoWrongCliffToggle: true }
  }
  handleClick() {
    this.setState({ videoWrongCliffToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoWrongCliffToggle = this.state.videoWrongCliffToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [6.5, 1.5, 0]}],
      }}>
      { videoWrongCliffToggle ? (
        <CliffWrongMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};