import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CastleCastMovie from './CastleCastMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerCastCastle extends React.Component {
  constructor(){
super();
  this.state = { videoCastCastleToggle: true }
  }
  handleClick() {
    this.setState({ videoCastCastleToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoCastCastleToggle = this.state.videoCastCastleToggle;
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
      { videoCastCastleToggle ? (
        <CastleCastMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};