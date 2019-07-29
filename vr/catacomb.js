import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer4 from './VideoContainer4';
import VideoContainerInvestigateCatacomb from './VideoContainerInvestigateCatacomb';
import VideoContainerTalkCatacomb from './VideoContainerTalkCatacomb';
import VideoContainerAttackCatacomb from './VideoContainerAttackCatacomb';
import ImpactInvestigateCatacomb from './ImpactInvestigateCatacomb';
import ImpactTalkCatacomb from './ImpactTalkCatacomb';
import ImpactAttackCatacomb from './ImpactAttackCatacomb';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class CATACOMB extends React.Component {
  render(){
const choices = {
    Castle: "Castle",
    Investigate: "Investigate",
    Talk: "Talk",
    Attack: "Attack",
    }
    return(
<View>
        <Pano source={asset('Catacomb.jpg')}/>
        <VideoContainer4/>
        <CatacombMessage/>
        <CatacombChoices
        choices={choices}/>
      </View>
    )
  }
}

class CatacombChoices extends React.Component {
    state = {
        route3: '',
        showInvestigateVideo: false,
        showImpactInvestigate: false,
        showTalkVideo: false,
        showImpactTalk: false,
        showAttackVideo: false,
        showImpactAttack: false,
    }

    redirect = route3 => {
        this.setState({route3})
    }
    handleClick() {
    this.setState({showInvestigateVideo: true, showTalkVideo: true, showAttackVideo: true, showImpactInvestigate: true, showImpactTalk: true, showImpactAttack: true })
  }
  render() {
    const showAttackVideo = this.state.showAttackVideo
    const showTalkVideo = this.state.showTalkVideo
    const showInvestigateVideo = this.state.showInvestigateVideo
    const showImpactInvestigate = this.state.showImpactInvestigate
    const showImpactTalk = this.state.showImpactTalk
    const showImpactAttack = this.state.showImpactAttack

      if (this.state.route3 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route3}/>
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


                <VrButton onClick={() => {this.setState({showInvestigateVideo: true, showImpactInvestigate: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Investigate}</Text>
        </View>
                </VrButton>

                { showInvestigateVideo ? (
                <VideoContainerInvestigateCatacomb stopVideo={() => this.setState({showInvestigateVideo: false})}/>
                ) : (
                  null
                  )}

                  { showImpactInvestigate ? (
                <ImpactInvestigateCatacomb hideImpact={() => this.setState({showImpactInvestigate: false})}/>
                ) : (
                  null
                  )}

                <VrButton onClick={() => {this.setState({showTalkVideo: true, showImpactTalk: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Talk}</Text>
        </View>
                </VrButton>

                { showTalkVideo ? (
                <VideoContainerTalkCatacomb stopVideo={() => this.setState({showTalkVideo: false})}/>
                ) : (
                  null
                )}

                { showImpactTalk ? (
                <ImpactTalkCatacomb hideImpact={() => this.setState({showImpactTalk: false})}/>
                ) : (
                  null
                  )}

                <VrButton onClick={() => {this.setState({showAttackVideo: true, showImpactAttack: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Attack}</Text>
        </View>
                </VrButton>

                { showAttackVideo ? (
                <VideoContainerAttackCatacomb stopVideo={() => this.setState({showAttackVideo: false})}/>
                ) : (
                  null
                )}

                { showImpactAttack ? (
                <ImpactAttackCatacomb hideImpact={() => this.setState({showImpactAttack: false})}/>
                ) : (
                  null
                  )}

        </View>
        );
      }

  }
};

class CatacombMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You arrive at the church's catacomb.\r\n You can see a light on your left that can be interesting to investigate.\nIt does not seem normal.\r\n In front of you there is a shady figure,\n it seems to be a ghost of some sort.\n Wandering souls are often more lost than evil,\n maybe you can talk some sense in it.\r\n Or maybe you can just destroy it with your holy sword ?\n §" , showMessage: true, placeholder: "What will you choose ?"};
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
            fontSize: 0.3,
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
            fontSize: 0.4,
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