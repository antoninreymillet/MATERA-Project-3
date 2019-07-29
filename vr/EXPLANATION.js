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

export default class EXPLANATIONPage extends React.Component {
  render(){
    return(
      <View
      style={{
        justifyContent: 'center'
      }}>
        <Pano source={asset('LOGO.jpg')}/>
        <NestedExplanationLogoContainer/>
        <NestedImageExContainer/>
        <NestedTextExContainer/>
        <EXPLAINRedirect/>
      </View>
    )
  }
}


class EXPLAINRedirect extends React.Component {
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
                transform: [{translate: [-0.5, 6.2, -8]}],
                layoutOrigin: [0.5, 0.5]
            }}>
                <VrButton onClick={() => this.redirect('/RULES')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                    {'GO TO RULES'}</Text>
                    </View>
                </VrButton>
                </View>
                )
                }
  }
};

class NestedTextExContainer extends React.Component {
    render() {
        return(
           <View
        style={{
        width: 13,
        height: 6,
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, -1.5,-5]}],
      }}>
        <Explanation/>
      </View>
        )
    }
}

class NestedExplanationLogoContainer extends React.Component {
    render() {
        return(
    <View
        style={{
        width: 2,
        height: 0.5,
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [-0.3, 3.2,-8]}],
      }}>
        <ExplanationLogo/>
    </View>
        )
    }
}

class NestedImageExContainer extends React.Component {
render () {
  return (
  <View
        style={{
        width: 4,
        height: 4,
        justifyContent: 'center',
        layoutOrigin: [0.6, 0.5],
        transform: [{translate: [3, 0,-5]}],
      }}>
        <Knight2Image/>
      </View>
  )
}
};

class Knight2Image extends React.Component {
  render () {
    return (
      <View>
        <Image source={asset('leonard.jpg')}
        style={{width: 3, height: 4}} />
      </View>
    )
  }
}


class ExplanationLogo extends React.Component {
    render(){
        return(
          <View>
        <Image source={asset('explanation.jpg')}
        style={{width: 3, height: 1}} />
      </View>
        )
    }
}






class Explanation extends React.Component {
  constructor() {
    super();
    this.state={Explanation: "Being a tribute to former Adventure GameBooks you can play Matera the same way.\nBe it totally freely or by following the rules.\r\nFor the demo purpose of the game you can try every choices anytime you want and you can move freely from place to place.\nPlaying like that you are immortal.\r\nBut if you want to feel the real experience like old time.\nYou will have to do your part.\nTake a pen and paper and write on it your skills points.\nEach time the game told you that you have lost or gain a skill point change the number on your player sheet.\nIf one of your skills statistics hit zero,\n you have lost and have to begin another time.\r\nBut...\nCheating was really a possible and honestly an often chosen course of action back in the day.\nSo feel free to experience the game as you want, because it is really what it is all about.\r\nA Web CrossReality experience."};
        }
render () {
  return (
  <View>
        <Text
          style={{
            backgroundColor: '#EFD5B7',
            color: 'black',
            borderRadius: 0.2,
            opacity: 0.8,
            fontSize: 0.4,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -8]}],
          }}>
            {this.state.Explanation}
        </Text>
        </View>
  );
}
};