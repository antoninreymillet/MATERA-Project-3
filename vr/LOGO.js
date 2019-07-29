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
  Sound,
} from 'react-vr';

export default class LOGOPage extends React.Component {
  render(){
    return(
      <View
      style={{
        justifyContent: 'center'
      }}>
        <Pano source={asset('LOGO.jpg')}/>
        {/* <Sound source={{mp3: asset('Castlevania Belmont.mp3')}} /> */}
        <NestedImageContainer/>
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
                transform: [{translate: [-0.3, 1.5, -5]}],
                layoutOrigin: [0.5, 0.5]
            }}>
                <VrButton onClick={() => this.redirect('/EXPLAIN')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                    {'HOW TO PLAY'}</Text>
                    </View>
                </VrButton>
                </View>
                )
                }
  }
};

class NestedImageContainer extends React.Component {
render () {
  return (
  <View
        style={{
        width: 4,
        height: 4,
        justifyContent: 'center',
        layoutOrigin: [0.6, 0.5],
        transform: [{translate: [0, 0,-5]}],
      }}>
        <LogoImage/>
      </View>
  )
}
};

class LogoImage extends React.Component {
  render () {
    return (
      <View>
        <Image source={asset('MatLog.jpg')}
        style={{width: 5, height: 5}} />
      </View>
    )
  }
}