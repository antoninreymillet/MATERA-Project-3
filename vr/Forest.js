import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer3 from './VideoContainer3';
import VideoContainerAttackForest from './VideoContainerAttackForest';
import VideoContainerForceForest from './VideoContainerForceForest';
import VideoContainerRuseForest from './VideoContainerRuseForest';
import ImpactAttackForest from './ImpactAttackForest';
import ImpactForceForest from './ImpactForceForest';
import ImpactRuseForest from './ImpactRuseForest';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class FOREST extends React.Component {
  render(){
    const choices = {
    Cemetery: "Cemetery",
    Attack: "Attack",
    Force: "Force",
    Ruse: "Ruse",
    }
    return(
<View>
        <Pano source={asset('ForestMonster.jpg')}/>
        <VideoContainer3/>
        <ForestMessage/>
        <ForestChoices
        choices={choices}/>
      </View>
    )
  }
}

class ForestChoices extends React.Component {
    state = {
        route7: '',
        showAttackVideo: false,
        showAttackImpact: false,
        showForceVideo: false,
        showForceImpact: false,
        showRuseVideo: false,
        showRuseImpact: false,
    }

    redirect = route7 => {
        this.setState({route7})
    }
    handleClick() {
    this.setState({showAttackVideo: true, showForceVideo: true, showRuseVideo: true, showAttackImpact: true, showForceImpact: true, showRuseImpact: true})
  }
  render() {
    const showAttackVideo = this.state.showAttackVideo
    const showForceVideo = this.state.showForceVideo
    const showRuseVideo = this.state.showRuseVideo
    const showAttackImpact = this.state.showAttackImpact
    const showForceImpact = this.state.showForceImpact
    const showRuseImpact = this.state.showRuseImpact

      if (this.state.route7 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route7}/>
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
                transform: [{translate: [0, 0, -7]}],
                layoutOrigin: [0.5, 0.1]
            }}>
                <VrButton onClick={() => this.redirect('/Cemetery')}>
                    <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {this.props.choices.Cemetery}</Text>
                    </View>
                </VrButton>


                <VrButton onClick={() => {this.setState({showAttackVideo: true, showAttackImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Attack}</Text>
        </View>
                </VrButton>

                { showAttackVideo ? (
                <VideoContainerAttackForest stopVideo={() => this.setState({showAttackVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showAttackImpact ? (
                <ImpactAttackForest hideImpact={() => this.setState({showAttackImpact: false})}/>
                 ) : (
                   null
                 )}


                <VrButton onClick={() => {this.setState({showForceVideo: true, showForceImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Force}</Text>
        </View>
                </VrButton>

                { showForceVideo ? (
                <VideoContainerForceForest stopVideo={() => this.setState({showForceVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showForceImpact ? (
                <ImpactForceForest hideImpact={() => this.setState({showForceImpact: false})}/>
                 ) : (
                   null
                 )}


                <VrButton onClick={() => {this.setState({showRuseVideo: true, showRuseImpact: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Ruse}</Text>
        </View>
                </VrButton>

                { showRuseVideo ? (
                <VideoContainerRuseForest stopVideo={() => this.setState({showRuseVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showRuseImpact ? (
                <ImpactRuseForest hideImpact={() => this.setState({showRuseImpact: false})}/>
                 ) : (
                   null
                 )}


        </View>
        );
      }

  }
};

class ForestMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You arrive at the edge of a forest.\n Sun beams are coming through the branches.\r\n There is a chill wind coming over your face.\n In front of you stands two monsters, and in their back his their tamer\n that will be a hard fight.\r\n You can try to sneak past the tamer hiding in the bushes\n Or you can force you way through by running ahead.\r\n§" , showMessage: true, placeholder:"What will you choose ?"};
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
            fontSize: 0.4,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
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
            transform: [{translate: [0, 1, -12]}],
          }}>{this.state.placeholder}</Text>
    )}
  </View>
  );
}
};