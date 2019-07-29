import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
} from 'react-vr';


export default class ImpactRuseForest extends React.Component {
  constructor(){
super();
  this.state = { ImpactRuseToggle: true }
  }
  handleClick() {
    this.setState({ ImpactRuseToggle: false})
    this.props.hideImpact()
  }
  render() {
    const ImpactRuseToggle = this.state.ImpactRuseToggle;
    return (
      <VrButton onClick= {this.handleClick.bind(this)}>
      <View
        style={{
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [3, -5.5, -5]}],
      }}>
      { ImpactRuseToggle ? (
            <Text style={{fontSize: 0.3, color: 'red', backgroundColor: 'white', textAlign: 'center', paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1,}}>
            {"WAITING UNDER THE RAIN MAKE YOU LOSE 1PT IN CONSTITUTION BUT YOU GAIN 1PT IN KNOWLEDGE,\n YOU HAVE LEARN TO SNEAK"}</Text>
  ) : (
    <VrButton></VrButton>
  )}
      </View>
      </VrButton>
    );
  }
};