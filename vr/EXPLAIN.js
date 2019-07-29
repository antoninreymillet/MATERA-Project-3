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

export default class EXPLAINPage extends React.Component {
  render(){
    return(
      <View
      style={{
        justifyContent: 'center'
      }}>
        <Pano source={asset('LOGO.jpg')}/>
        <NestedHistoryLogoContainer/>
        <NestedImageContainer/>
        <NestedTextContainer/>
        <LOGORedirect/>
      </View>
    )
  }
}


class LOGORedirect extends React.Component {
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
                <VrButton onClick={() => this.redirect('/EXPLANATION')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                    {'GO TO EXPLANATION'}</Text>
                    </View>
                </VrButton>
                </View>
                )
                }
  }
};

class NestedTextContainer extends React.Component {
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
        <History/>
      </View>
        )
    }
}

class NestedHistoryLogoContainer extends React.Component {
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
        <HistoryLogo/>
    </View>
        )
    }
}

class NestedImageContainer extends React.Component {
render () {
  return (
  <View
        style={{
        width: 4,
        height: 4,
        justifyContent: 'center',
        layoutOrigin: [0.6, 0.5],
        transform: [{translate: [2, 0,-5]}],
      }}>
        <KnightImage/>
      </View>
  )
}
};


class KnightImage extends React.Component {
  render () {
    return (
      <View>
        <Image source={asset('KnightSouls.png')}
        style={{width: 5, height: 5}} />
      </View>
    )
  }
}


class HistoryLogo extends React.Component {
    render(){
        return(
          <View>
        <Image source={asset('History.jpg')}
        style={{width: 3, height: 1}} />
      </View>
        )
    }
}

class History extends React.Component {
  constructor() {
    super();
    this.state={History: "Matera is a tribute to the Adventure GameBooks of my child and teenagehood.\r\nThose were the premises of pen and paper and videogame RPG.\nYou had to take a sheet of paper,\n put in it the skills of your hero and your equipment,\nthan you were ready for reading the book.\r\nSometimes you had to use dices for calculating your skills,\n mainly in order to put a little more hasard and luck in the game.\r\nReading was easy, choosing the right path less.\n That was because the entire books were about choices.\n At each end of pages, you have to take a decision, like,\n will i go to page 20 and cross that river or will i go to page 40 and follow the river in the hope of finding a bridge ?\r\n All Adventure GameBooks were following an holly trinity Courage / Luck / Destiny.\n Courage for the reader to take a decision willingly.\n Luck for the reader to choose without knowing the consequences.\n Destiny for the reader to follow a path written in advance.\r\n Before video game Adventure GameBooks were the real deal,\n and it continues even through the nineties."};
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
            {this.state.History}
        </Text>
        </View>
  );
}
};