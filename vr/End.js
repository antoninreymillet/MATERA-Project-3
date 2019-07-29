import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer8 from './VideoContainer8';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,
} from 'react-vr';


export default class END extends React.Component {
  render(){
    return(
<View>
        <Pano source={asset('End.jpg')}/>
        <VideoContainer8/>
        <EndMessage/>
        <ReturnButton/>
      </View>
    )
  }
}

class EndMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "What sould have been the end of your journey\n is only but the beginning.\r\nOnce again you have to go on a quest for finding the vampire lord.\r\nToward the Red Sun it will be...\r\nBut this is a story for another time.\n§" , showMessage: true, placeholder:"A new adventure awaits you!\nTry another path by pressing the RETURN button"};
        }
  handleClick() {
    this.setState({showMessage: false})
  }
render () {
  const showMessage = this.state.showMessage;
  return (
  <View>
    { showMessage ? (
    <VrButton
    onClick= {this.handleClick.bind(this)}>
        <Text
          style={{
            backgroundColor: '#EFD5B7',
            color: 'black',
            fontSize: 0.2,
            borderRadius: 0.2,
            opacity: 1,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>
            {this.state.message}
        </Text>
    </VrButton>
    ) : (
      <View
        style={{
        flex: 1,
        width: 9,
        height: 6,
        flexDirection: 'column',
        alignItems: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -8]}],
        backgroundColor: '#333333',}}>
        <Image style={{width:9, height:6}} source={asset("../static_assets/Taverne.jpg")}/>
      <Text
            style={{
            backgroundColor: '#EFD5B7',
            color: 'black',
            borderRadius: 0.2,
            opacity: 0.8,
            fontSize: 0.5,
            fontWeight: '300',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, -4, -8]}],
          }}>{this.state.placeholder}</Text>
          </View>
    )}
  </View>
  );
}
};

class ReturnButton extends React.Component {
    state = {
        routeReturn: '',
    }

    redirect = routeReturn => {
        this.setState({routeReturn})
    }
  render() {
      if (this.state.routeReturn !== '') {
          console.log('redirect')
          return <Redirect to={this.state.routeReturn}/>
      } else {
        return (
            <View
            style={{
                width: 6,
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'center',
                marginLeft: 0.4,
                marginRight: 0.4,
                transform: [{translate: [2, 3, -8]}],
                layoutOrigin: [0.5, 0.1]
            }}>
                <VrButton onClick={() => this.redirect('/Home')}>
                    <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {'RETURN'}</Text>
                    </View>
                </VrButton>
                </View>
        )
      }
  }
}