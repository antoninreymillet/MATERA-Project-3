import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CastleFightMovie from './CastleFightMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerFightCastle extends React.Component {
  constructor(){
super();
  this.state = { videoFightCastleToggle: true }
  }
  handleClick() {
    this.setState({ videoFightCastleToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoFightCastleToggle = this.state.videoFightCastleToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [5.5, 0, -2]}],
      }}>
      { videoFightCastleToggle ? (
        <CastleFightMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};