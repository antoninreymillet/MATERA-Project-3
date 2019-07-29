import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CastleRedirectMovie from './CastleRedirectMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerRedirectCastle extends React.Component {
  constructor(){
super();
  this.state = { videoRedirectCastleToggle: true }
  }
  handleClick() {
    this.setState({ videoRedirectCastleToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoRedirectCastleToggle = this.state.videoRedirectCastleToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3, 0, -2]}],
      }}>
      { videoRedirectCastleToggle ? (
        <CastleRedirectMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};