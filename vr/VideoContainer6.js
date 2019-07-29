import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CemeteryMovie from './CemeteryMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer6 extends React.Component {
  constructor(){
super();
  this.state = { videoCemeteryToggle: true }
  }
  handleClick() {
    this.setState({ videoCemeteryToggle: false})
  }
  render() {
    const videoCemeteryToggle = this.state.videoCemeteryToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 7.3,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}],
      }}>
      { videoCemeteryToggle ? (
        <CemeteryMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};