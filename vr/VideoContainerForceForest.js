import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ForestForceMovie from './ForestForceMovie';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class VideoContainerForceForest extends React.Component {
  constructor(){
super();
  this.state = { videoForceForesToggle: true }
  }
  handleClick() {
    this.setState({ videoForceForesToggle: false})
    this.props.stopVideo()
  }
  render() {
    const videoForceForesToggle = this.state.videoForceForesToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        flex: 1,
        width: 8,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3.5, 0, 0]}],
      }}>
      { videoForceForesToggle ? (
        <ForestForceMovie/>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};