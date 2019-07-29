import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import CatacombMovie from './CatacombMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainer4 extends React.Component {
  constructor(){
super();
  this.state = { videoCatacombToggle: true }
  }
  handleClick() {
    this.setState({ videoCatacombToggle: false})
  }
  render() {
    const videoCatacombToggle = this.state.videoCatacombToggle;
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
      { videoCatacombToggle ? (
        <CatacombMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};