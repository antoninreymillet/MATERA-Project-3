import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer7 from './VideoContainer7';
import VideoContainerFightCastle from './VideoContainerFightCastle';
import VideoContainerCastCastle from './VideoContainerCastCastle';
import VideoContainerRedirectCastle from './VideoContainerRedirectCastle';
import ImpactFightCastle from './ImpactFightCastle';
import ImpactCastCastle from './ImpactCastCastle';
import ImpactRedirectCastle from './ImpactRedirectCastle';


import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class CASTLE extends React.Component {
  render(){
      const choices = {
    End: "End",
    Fight: "Fight",
    Cast: "Cast",
    Redirect: "Deflect",
    }
    return(
<View>
        <Pano source={asset('Castle.jpg')}/>
        <VideoContainer7/>
        <CastleMessage/>
        <CastleChoices
        choices={choices}/>
      </View>
    )
  }
}

class CastleChoices extends React.Component {
    state = {
        route4: '',
        showFightVideo: false,
        showFightImpact: false,
        showCastideo: false,
        showCastImpact: false,
        showRedirectVideo: false,
        showRedirectImpact: false,
    }

    redirect = route4 => {
        this.setState({route4})
    }
    handleClick() {
    this.setState({showFightVideo: true, showCastVideo: true, showRedirectVideo: true,
                  showFightImpact: true, showCastImpact: true, showImpactRedirect: true})
  }
  render() {
    const showFightVideo = this.state.showFightVideo
    const showCastVideo = this.state.showCastVideo
    const showRedirectVideo = this.state.showRedirectVideo
    const showFightImpact = this.state.showFightImpact
    const showCastImpact = this.state.showCastImpact
    const showRedirectImpact = this.state.showRedirectImpact

      if (this.state.route4 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route4}/>
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
                transform: [{translate: [0, 0, -5]}],
                layoutOrigin: [0.5, 0.1]
            }}>
                <VrButton onClick={() => this.redirect('/End')}>
                    <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {this.props.choices.End}</Text>
                    </View>
                </VrButton>


                <VrButton onClick={() => {this.setState({showFightVideo: true, showFightImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Fight}</Text>
        </View>
                </VrButton>

                { showFightVideo ? (
                <VideoContainerFightCastle stopVideo={() => this.setState({showFightVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showFightImpact ? (
                <ImpactFightCastle hideImpact={() => this.setState({showFightImpact: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showCastVideo: true, showCastImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Cast}</Text>
        </View>
                </VrButton>

                { showCastVideo ? (
                <VideoContainerCastCastle stopVideo={() => this.setState({showCastVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showCastImpact ? (
                <ImpactCastCastle hideImpact={() => this.setState({showCastImpact: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showRedirectVideo: true, showRedirectImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Redirect}</Text>
        </View>
                </VrButton>

                { showRedirectVideo ? (
                <VideoContainerRedirectCastle stopVideo={() => this.setState({showRedirectVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showRedirectImpact ? (
                <ImpactRedirectCastle hideImpact={() => this.setState({showRedirectImpact: false})}/>
                 ) : (
                   null
                 )}

        </View>
        );
      }
  }
};

class CastleMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You have finally arrive at the dwelling place of the vampire lord.\r\nA lifeless place compared to the colorful castle you have just crossed\n where only a stench of blood comes out of a colorless atmosphere.\r\n You are shock when you understand that the vampire had fled.\n Only a necromancer and three of his minions are standing between you\n and the throne.\n It is time to take a decision.\r\n You have your sword, your magic and a shield.\n§" , showMessage: true, placeholder:"What will you choose ?"};
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
            borderRadius: 0.2,
            opacity: 0.8,
            fontSize: 0.2,
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
      <Text
            style={{
            backgroundColor: '#EFD5B7',
            color: 'black',
            borderRadius: 0.2,
            opacity: 0.8,
            fontSize: 0.6,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -8]}],
          }}>{this.state.placeholder}</Text>
    )}
  </View>
  );
}
};