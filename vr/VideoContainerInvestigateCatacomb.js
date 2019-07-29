import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CatacombInvestigateMovie from './CatacombInvestigateMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerInvestigateCatacomb extends React.Component {
  constructor(){
super();
  this.state = { videoInvestigateCatacombToggle: true }
  }
  handleClick() {
    this.setState({ videoInvestigateCatacombToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoInvestigateCatacombToggle = this.state.videoInvestigateCatacombToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [5, 0, -2]}],
      }}>
      { videoInvestigateCatacombToggle ? (
        <CatacombInvestigateMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};