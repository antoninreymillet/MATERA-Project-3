import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Video,
} from 'react-vr';


export default class HouseSneakMovie extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 5, width: 7}}>
<Video style={{height:5, width: 7}} source={asset('Sneak House.mp4')}/>
      </View>
    )
  }
}