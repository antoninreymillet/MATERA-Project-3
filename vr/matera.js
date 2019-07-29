import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import TileTitle from './Title';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,
} from 'react-vr';


class MateraChoices extends React.Component {
    state = {
        route: ''
    }

    redirect = route => {
        this.setState({route})
    }
  render() {
      if (this.state.route !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route}/>
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
                transform: [{translate: [0, 0, -5]}],
                layoutOrigin: [0.5, 0.1]
            }}>
                <VrButton onClick={() => this.redirect('/Church')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                    {this.props.choices.Church}</Text>
                    </View>
                </VrButton>


                <VrButton onClick={() => this.redirect('/House')}>
        <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.House}</Text>
        </View>
                </VrButton>

                <VrButton onClick={() => this.redirect('/Forest')}>
        <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Forest}</Text>
        </View>
                </VrButton>
        </View>
        );
      }

  }
};

class NestedMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "Welcome to the town of Matera.\n Here your quest begins.\r\nThere is no one in the streets nor humans nor demons\r\n You noticed a lighted church tower in the distance,\n maybe someone could help you there ?\r\n There is also a trail of smoke coming from beyond the hill,\n a sign of life maybe ? Or, a sign of death.\r\n But ultimately you can go directly towards the vampire's castle,\n by going through the Matera forest lower in the valley.\n §" , showMessage: true, placeholder:"What will you choose ?"};
        }
  handleClick() {
    this.setState({showMessage: false})
  }
render () {
  const showMessage = this.state.showMessage;
  return (
  <View>
    { showMessage ? (
    <VrButton onClick= {this.handleClick.bind(this)}>
        <Text
          style={{
            backgroundColor: '#EFD5B7',
            color: 'black',
            borderRadius: 0.2,
            opacity: 0.8,
            fontSize: 0.4,
            fontWeight: '300',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -8]}],
          }}>
            {this.state.message}
        </Text>
    </VrButton>
    ) : (
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
            transform: [{translate: [0.5, 1, -8]}],
          }}>{this.state.placeholder}</Text>
    )}
  </View>
  );
}
};

export default class Matera extends React.Component {
  render(){
    const choices = {
      Church: "Go to the Church",
      House: "Go to the Smoke",
      Forest: "Go to the Forest"
    }
    return(
      <View>
        <Pano source={asset('Matera2.jpg')}/>
          <NestedMessage />
          <MateraChoices
          choices={choices} />
      </View>
    )
  }
}