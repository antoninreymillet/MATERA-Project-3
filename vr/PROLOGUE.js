import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,
} from 'react-vr';

export default class PROLOGUEPage extends React.Component {
  render(){
    return(
      <View
      style={{
        justifyContent: 'center'
      }}>
        <Pano source={asset('../static_assets/360 assets/Pope2.jpg')}/>
        <NestedTextPRContainer/>
        <PROLOGUERedirect/>
      </View>
    )
  }
}


class PROLOGUERedirect extends React.Component {
    state = {
        routeLogo: ''
    }

    redirect = routeLogo => {
        this.setState({routeLogo})
    }
  render() {
      if (this.state.routeLogo !== '') {
          console.log('redirect')
          return <Redirect to={this.state.routeLogo}/>
      } else {
        return (
            <View
            style={{
                width: 4,
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'center',
                marginLeft: 0.4,
                marginRight: 0.4,
                transform: [{translate: [-0.35, 2, -8]}],
                layoutOrigin: [0.5, 0.5]
            }}>
                <VrButton onClick={() => this.redirect('/Home')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, fontWeight:'400', color: 'black', textAlign: 'center'}}>
                    {'BEGIN YOUR QUEST'}</Text>
                    </View>
                </VrButton>
                </View>
                )
                }
  }
};

class NestedTextPRContainer extends React.Component {
    render() {
        return(
           <View
        style={{
        width: 13,
        height: 6,
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [4, -2,-5]}],
      }}>
        <TextPROLOGUE/>
      </View>
        )
    }
}

class TextPROLOGUE extends React.Component {
  constructor() {
    super();
    this.state={Prologue: "PROLOGUE\r\nYou have been tasked by the high priest in Rome,\n by order of his Holyness the Pope to go to the southern region of Matera.\r\n For a few days now, not a single living souls remains in the city. Only undead and beasts roaming the once lifefull streets and places.\r\nMatera is a troglodyte city,\n miles and miles of subterranean corridor travels beneath the region.\r\nIn an old prophecy,\n it is said that every one thousand years through the depth of Matera\n an evil lord is reborn to unleash hell upon earth.\r\n Go forth paladin,\n shall the judgment day be near,\n you are our only hope."};
        }
render () {
  return (
  <View>
        <Text
          style={{
            backgroundColor: '#F9DDBE',
            color: 'black',
            borderRadius: 0.2,
            opacity: 0.8,
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [2.5, -2, -8]}],
          }}>
            {this.state.Prologue}
        </Text>
        </View>
  );
}
};