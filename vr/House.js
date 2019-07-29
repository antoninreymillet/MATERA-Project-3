import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer2 from './VideoContainer2';
import VideoContainerStayHouse from './VideoContainerStayHouse';
import VideoContainerEnterHouse from './VideoContainerEnterHouse';
import VideoContainerSneakHouse from './VideoContainerSneakHouse';
import ImpactSneakHouse from './ImpactSneakHouse';
import ImpactEnterHouse from './ImpactEnterHouse';
import ImpactStayHouse from './ImpactStayHouse';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class HOUSE extends React.Component {
  render(){
    const choices = {
    Cliff: "Cliff",
    Sneak: "Sneak",
    Enter: "Enter",
    Stay: "Burn",
    }
    return(
<View>
        <Pano source={asset('House.jpg')}/>
        <VideoContainer2/>
        <HouseMessage/>
        <HouseChoices
        choices={choices}/>
      </View>
    )
  }
}

class HouseChoices extends React.Component {
    state = {
        route5: '',
        showStayVideo: false,
        showImpactStay: false,
        showEnterVideo: false,
        showImpactEnter: false,
        showSneakVideo: false,
        showImpactSneak: false,
    }

    redirect = route5 => {
        this.setState({route5})
    }
    handleClick() {
    this.setState({showStayVideo: true, showEnterVideo: true, showSneakVideo: true,
    showImpactEnter: true, showImpactSneak: true, showImpactStay: true })
  }
  render() {
    const showStayVideo = this.state.showStayVideo
    const showEnterVideo = this.state.showEnterVideo
    const showSneakVideo = this.state.showSneakVideo
    const showImpactStay = this.state.showImpactStay
    const showImpactEnter = this.state.showImpactEnter
    const showImpactSneak = this.state.showImpactSneak

      if (this.state.route5 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route5}/>
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
                transform: [{translate: [-0.5, 1, -5]}],
                layoutOrigin: [0.5, 0.1],
                }}>
                <VrButton onClick={() => this.redirect('/Cliff')}>
                    <View style={{ paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {this.props.choices.Cliff}</Text>
                    </View>
                </VrButton>


                <VrButton onClick={() => {this.setState({showSneakVideo: true, showImpactSneak: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Sneak}</Text>
        </View>
                </VrButton>

                { showSneakVideo ? (
                <VideoContainerSneakHouse stopVideo={() => this.setState({showSneakVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showImpactSneak ? (
                <ImpactSneakHouse hideImpact={() => this.setState({showImpactSneak: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showEnterVideo: true, showImpactEnter: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Enter}</Text>
        </View>
                </VrButton>

                { showEnterVideo ? (
                <VideoContainerEnterHouse stopVideo={() => this.setState({showEnterVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showImpactEnter ? (
                <ImpactEnterHouse hideImpact={() => this.setState({showImpactEnter: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showStayVideo: true, showImpactStay: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Stay}</Text>
        </View>
                </VrButton>

                { showStayVideo ? (
                <VideoContainerStayHouse stopVideo={() => this.setState({showStayVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showImpactStay ? (
                <ImpactStayHouse hideImpact={() => this.setState({showImpactStay: false})}/>
                 ) : (
                   null
                 )}

        </View>
        );
      }

  }
};

class HouseMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You journey through the valley and arrive at some abandonned houses\n the smoke is coming from here.\r\n This is not a kiln who have made that smoke, but the house itself. \r\nA part is burnt to the ground but half of the house stand still.\nYou stand on the doorstep and hear a growl from inside\r\n Running is always an option\nbut you can simply enter\n or burn everything to the ground.\n §" , showMessage: true, placeholder:"What will you choose ?"};
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