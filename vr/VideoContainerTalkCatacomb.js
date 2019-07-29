import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CatacombTalkMovie from './CatacombTalkMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerTalkCatacomb extends React.Component {
  constructor(){
super();
  this.state = { videoTalkCatacombToggle: true }
  }
  handleClick() {
    this.setState({ videoTalkCatacombToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoTalkCatacombToggle = this.state.videoTalkCatacombToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [4, 0, -2]}],
      }}>
      { videoTalkCatacombToggle ? (
        <CatacombTalkMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};