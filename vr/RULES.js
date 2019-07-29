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

export default class RULESPage extends React.Component {
  render(){
    return(
      <View
      style={{
        justifyContent: 'center'
      }}>
        <Pano source={asset('LOGO.jpg')}/>
        <NestedRulesLogoContainer/>
        <NestedImageRuContainer/>
        <NestedTextRuContainer/>
        <NestedFriseRulesContainer/>
        <RULESRedirect/>
      </View>
    )
  }
}


class RULESRedirect extends React.Component {
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
                transform: [{translate: [-0.5, 7.5, -8]}],
                layoutOrigin: [0.5, 0.5]
            }}>
                <VrButton onClick={() => this.redirect('/PROLOGUE')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                    {'GO TO PROLOGUE'}</Text>
                    </View>
                </VrButton>
                </View>
                )
                }
  }
};

class NestedTextRuContainer extends React.Component {
    render() {
        return(
           <View
        style={{
        width: 13,
        height: 6,
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [1, 1.5,-5]}],
      }}>
        <RULES/>
      </View>
        )
    }
}

class NestedRulesLogoContainer extends React.Component {
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
        <RULESLogo/>
    </View>
        )
    }
}

class NestedImageRuContainer extends React.Component {
render () {
  return (
  <View
        style={{
        width: 4,
        height: 4,
        justifyContent: 'center',
        layoutOrigin: [0.6, 0.5],
        transform: [{translate: [4, 0.5,-5]}],
      }}>
        <Knight3Image/>
      </View>
  )
}
};

class NestedFriseRulesContainer extends React.Component {
render () {
  return (
  <View
        style={{
        width: 5,
        height: 1,
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 8.75,-5]}],
      }}>
        <FriseRules/>
      </View>
  )
}
};

class FriseRules extends React.Component {
  render () {
    return (
      <View>
        <Image source={asset('FriseRules.png')}
        style={{width: 5, height: 0.75}} />
      </View>
    )
  }
}

class Knight3Image extends React.Component {
  render () {
    return (
      <View>
        <Image source={asset('Knight3.jpg')}
        style={{width: 2.5, height: 3}} />
      </View>
    )
  }
}


class RULESLogo extends React.Component {
    render(){
        return(
          <View>
        <Image source={asset('Rules.jpg')}
        style={{width: 3, height: 0.75}} />
      </View>
        )
    }
}






class RULES extends React.Component {
  constructor() {
    super();
    this.state={Rules: "In Matera the rules are simple.\r\nYou just have to click in order to advance through the game.\nRead carefully what appear on the screen and choose an action or a destination.\r\nIn each stage if you see the sign '§' you can click on it to make the open element disappear.\nAs for the '§' sign you can click on every video to make them stop and disappear.\r\nThe text and choices have a beige background,\n the element to advance to another aera have a green background.\r\nThe 4 statistics for your player sheet are\r\nCONSTITUTION: Your physical prowess.\r\nFAITH: Your ability to stay in the light path.\r\nRESOLVE: Your determination to end your quest.\r\nKNOWLEDGE: The amount of what you have to know in order to succeed in your quest.\r\nDivide 10pts beyond those 4 stats and you are ready !\r\nThats all the information you need, have a nice game !"};
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
            fontSize: 0.3,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -8]}],
          }}>
            {this.state.Rules}
        </Text>
        </View>
  );
}
};