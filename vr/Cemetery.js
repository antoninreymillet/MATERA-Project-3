import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer6 from './VideoContainer6';
import VideoContainerHolyRiteCemetery from './VideoContainerHolyRiteCemetery';
import VideoContainerInvestigateCemetery from './VideoContainerInvestigateCemetery';
import VideoContainerAttackCemetery from './VideoContainerAttackCemetery';
import ImpactHolyRiteCemetery from './ImpactHolyRiteCemetery';
import ImpactInvestigateCemetery from './ImpactInvestigateCemetery';
import ImpactAttackCemetery from './ImpactAttackCemetery';


import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class CEMETERY extends React.Component {
  render(){
    const choices = {
    Castle: "Castle",
    HolyRite: "Holy Rite",
    Investigate: "Investigate",
    Attack: "Attack",
    }
    return(
<View>
        <Pano source={asset('Cemetery.jpg')}/>
        <VideoContainer6/>
        <CemeteryMessage/>
        <CemeteryChoices
        choices={choices}/>
      </View>
    )
  }
}

class CemeteryChoices extends React.Component {
    state = {
        route8: '',
        showHolyRiteVideo: false,
        showHolyRiteImpact: false,
        showInvestigateVideo: false,
        showInvestigateImpact: false,
        showAttackVideo: false,
        showAttackImpact: false,
    }

    redirect = route8 => {
        this.setState({route8})
    }
    handleClick() {
    this.setState({showInvestigateVideo: true, showHolyRiteVideo: true, showAttackVideo: true, showHolyRiteImpact: true, showInvestigateImpact: true, showAttackImpact: true})
  }
  render() {
    const showAttackVideo = this.state.showAttackVideo
    const showHolyRiteVideo = this.state.showHolyRiteVideo
    const showInvestigateVideo = this.state.showInvestigateVideo
    const showHolyRiteImpact = this.state.showHolyRiteImpact
    const showInvestigateImpact = this.state.showInvestigateImpact
    const showAttackImpact = this.state.showAttackImpact

      if (this.state.route8 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route8}/>
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
                <VrButton onClick={() => this.redirect('/Castle')}>
                    <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {this.props.choices.Castle}</Text>
                    </View>
                </VrButton>


                <VrButton onClick={() => {this.setState({showHolyRiteVideo: true, showHolyRiteImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.HolyRite}</Text>
        </View>
                </VrButton>

                { showHolyRiteVideo ? (
                <VideoContainerHolyRiteCemetery stopVideo={() => this.setState({showHolyRiteVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showHolyRiteImpact ? (
                <ImpactHolyRiteCemetery hideImpact={() => this.setState({showHolyRiteImpact: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showInvestigateVideo: true, showInvestigateImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Investigate}</Text>
        </View>
                </VrButton>

                { showInvestigateVideo ? (
                <VideoContainerInvestigateCemetery stopVideo={() => this.setState({showInvestigateVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showInvestigateImpact ? (
                <ImpactInvestigateCemetery hideImpact={() => this.setState({showInvestigateImpact: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showAttackVideo: true, showAttackImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Attack}</Text>
        </View>
                </VrButton>

                { showAttackVideo ? (
                <VideoContainerAttackCemetery stopVideo={() => this.setState({showAttackVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showAttackImpact ? (
                <ImpactAttackCemetery hideImpact={() => this.setState({showAttackImpact: false})}/>
                 ) : (
                   null
                 )}

        </View>
        );
      }

  }
};

class CemeteryMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You arrive at a Cemetery.\r\n The atmosphere is foggy but behind the mist\n you can clearly see a sort of fire wavering amongst the Tombs.\r\n It seems that there is something or someone inside that fire,\n but more than a ghost,\n its like a vision from the past.\r\n You can investigate the tomb before doing anything,\n or you can attack straigth away the ghostly figure.\n But maybe a prayer to appease the souls of the fallen could be a good idea.\r\n §" , showMessage: true, placeholder:"What will you choose ?"};
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
            fontSize: 0.3,
            fontWeight: '200',
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