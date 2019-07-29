import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CatacombAttackMovie from './CatacombAttackMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerAttackCatacomb extends React.Component {
  constructor(){
super();
  this.state = { videoAttackCatacombToggle: true }
  }
  handleClick() {
    this.setState({ videoAttackCatacombToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoAttackCatacombToggle = this.state.videoAttackCatacombToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3, 0, -2]}],
      }}>
      { videoAttackCatacombToggle ? (
        <CatacombAttackMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};