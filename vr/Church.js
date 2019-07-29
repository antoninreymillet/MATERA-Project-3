import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer from './VideoContainer';
import VideoContainerAttackChurch from './VideoContainerAttackChurch';
import VideoContainerPrayChurch from './VideoContainerPrayChurch';
import VideoContainerSneakChurch from './VideoContainerSneakChurch';
import ImpactAttackChurch from './ImpactAttackChurch';
import ImpactPrayChurch from './ImpactPrayChurch';
import ImpactSneakChurch from './ImpactSneakChurch';


import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Image,
  View,
  VrButton,
} from 'react-vr';


export default class CHURCH extends React.Component {
  render(){
    const choices = {
      Catacomb: "Catacomb",
      Attack: "Attack",
      Pray: "Pray",
      Sneak: "Sneak",
    }
    return(
<View>
        <Pano source={asset('Church.jpg')}/>
        <VideoContainer/>
        <ChurchMessage/>
        <ChurchChoices
        choices = {choices}/>
      </View>
    )
  }
}

class ChurchChoices extends React.Component {
    state = {
        route2: '',
        showAttackVideo: false,
        showImpactAttack: false,
        showPrayVideo: false,
        showImpactPray: false,
        showSneakVideo: false,
        showImpactSneakVideo: false,
    }

    redirect = route2 => {
        this.setState({route2})
    }
    handleClick() {
    this.setState({showAttackVideo: true, showPrayVideo: true, showSneakVideo: true,
                  showImpactAttack: true, showImpactPray: true, showImpactSneak: true})
  }
  render() {
    const showAttackVideo = this.state.showAttackVideo
    const showPrayVideo = this.state.showPrayVideo
    const showSneakVideo = this.state.showSneakVideo
    const showImpactAttack = this.state.showImpactAttack
    const showImpactPray = this.state.showImpactPray
    const showImpactSneak = this.state.showImpactSneak

      if (this.state.route2 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route2}/>
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
                transform: [{translate: [-0.5, 0.5, -5]}],
                layoutOrigin: [0.5, 0.1]
            }}>
                <VrButton onClick={() => this.redirect('/catacomb')}>
                    <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {this.props.choices.Catacomb}</Text>
                    </View>
                </VrButton>

                <VrButton onClick={() => {this.setState({showAttackVideo: true, showImpactAttack:true})}}>
                  <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
                    <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                      {this.props.choices.Attack}</Text>
                  </View>
                </VrButton>

                 { showAttackVideo ? (
                <VideoContainerAttackChurch stopVideo={() => this.setState({showAttackVideo: false})}/>
                 ) : (
                   null
                 )}

                 {showImpactAttack ? (
                   <ImpactAttackChurch hideImpact={() => this.setState({showImpactAttack: false})}/>
                 ) :(
                   null
                 )}


                <VrButton onClick={() => {this.setState({showPrayVideo: true, showImpactPray: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Pray}</Text>
        </View>
                </VrButton>

                { showPrayVideo ? (
                <VideoContainerPrayChurch stopVideo={() => this.setState({showPrayVideo: false})}/>
                 ) : (
                   null
                 )}

                 {showImpactPray ? (
                   <ImpactPrayChurch hideImpact={() => this.setState({showImpactPray: false})}/>
                 ) :(
                   null
                 )}

                <VrButton onClick={() => {this.setState({showSneakVideo: true, showImpactSneak: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Sneak}</Text>
        </View>
                </VrButton>

                { showSneakVideo ? (
                <VideoContainerSneakChurch stopVideo={() => this.setState({showSneakVideo: false})}/>
                 ) : (
                   null
                 )}

                 {showImpactSneak ? (
                   <ImpactSneakChurch hideImpact={() => this.setState({showImpactSneak: false})}/>
                 ) :(
                   null
                 )}

        </View>
        );
      }

  }
};

class ChurchMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You arrived at the church, \n there is no one outside,\n so without thinking an instant, you push the door. \r\n The church is well lit and on the altar is what could be an angel. \n A golden ray of light is illuminating the winged character. \n He is mumbling something, some words are clearer than others\n 'Toward the Red Sun'\r\n You stay on your guard, the angel is flickering like a vision, it can be an illusion to trap you.\n Be it an angel, illusion or not, you should bow before him. \n But in the end sneaking past him could be an option, a coward one yes, still a viable one.\n §" , showMessage: true, placeholder:"What will you choose ?"};
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
            opacity: 0.8,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0.5, -5]}],
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