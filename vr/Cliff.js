import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import VideoContainer5 from './VideoContainer5';
import VideoContainerWrongCliff from './VideoContainerWrongCliff';
import VideoContainerRightCliff from './VideoContainerRightCliff';
import VideoContainerWrong2Cliff from './VideoContainerWrong2Cliff';
import ImpactWrongCliff from './ImpactWrongCliff';
import ImpactRightCliff from './ImpactRightCliff';
import ImpactWrong2Cliff from './ImpactWrong2Cliff';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';


export default class CLIFF extends React.Component {
  render(){
    const choices = {
    Castle: "Castle",
    Wrong: "Moonstone, Citrine, Emerald",
    Right: "Ruby, Emerald, Aquamarine",
    Wrong2: "Obsidian, Ruby, Citrine",
    }
    return(
<View>
        <Pano source={asset('Cliff.jpg')}/>
        <VideoContainer5/>
        <CliffMessage/>
        <CliffChoices
        choices={choices}/>
      </View>
    )
  }
}

class CliffChoices extends React.Component {
    state = {
        route6: '',
        showWrongVideo: false,
        showImpactWrong: false,
        showRightVideo: false,
        showImpactRight: false,
        showWrong2Video: false,
        showImpactWrong2: false,
    }

    redirect = route6 => {
        this.setState({route6})
    }
    handleClick() {
    this.setState({showWrongVideo: true, showRightVideo: true, showWrong2Video: true, showImpactWrong: true, showImpactRight: true, showImpactWrong2: true})
  }
  render() {
    const showWrongVideo = this.state.showWrongVideo
    const showRightVideo = this.state.showRightVideo
    const showWrong2Video = this.state.showWrong2Video
    const showImpactWrong = this.state.showImpactWrong
    const showImpactRight = this.state.showImpactRight
    const showImpactWrong2 = this.state.showImpactWrong2

      if (this.state.route6 !== '') {
          console.log('redirect')
          return <Redirect to={this.state.route6}/>
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
                transform: [{translate: [0, 0, -8]}],
                layoutOrigin: [0.5, 0.1]
            }}>
                <VrButton onClick={() => this.redirect('/Castle')}>
                    <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#A7B879'}}>
                        <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                            {this.props.choices.Castle}</Text>
                    </View>
                </VrButton>


                <VrButton onClick={() => {this.setState({showWrongVideo: true, showImpactWrong: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Wrong}</Text>
        </View>
                </VrButton>

                { showWrongVideo ? (
                <VideoContainerWrongCliff stopVideo={() => this.setState({showWrongVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showImpactWrong ? (
                <ImpactWrongCliff hideImpact={() => this.setState({showImpactWrong: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showRightVideo: true, showImpactRight: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Right}</Text>
        </View>
                </VrButton>

                { showRightVideo ? (
                <VideoContainerRightCliff stopVideo={() => this.setState({showRightVideo: false})}/>
                 ) : (
                   null
                 )}

                 { showImpactRight ? (
                <ImpactRightCliff hideImpact={() => this.setState({showImpactRight: false})}/>
                 ) : (
                   null
                 )}

                <VrButton onClick={() => {this.setState({showWrong2Video: true, showImpactWrong2: true})}}>
        <View style={{paddingLeft: 0.2, paddingRight: 0.2, borderRadius:0.1, margin: 0.3, height: 0.3, backgroundColor: '#F9DDBE'}}>
            <Text style={{fontSize: 0.2, color: 'black', textAlign: 'center'}}>
                {this.props.choices.Wrong2}</Text>
        </View>
                </VrButton>

                { showWrong2Video ? (
                <VideoContainerWrong2Cliff stopVideo={() => this.setState({showWrong2Video: false})}/>
                 ) : (
                   null
                 )}

                 { showImpactWrong2 ? (
                <ImpactWrong2Cliff hideImpact={() => this.setState({showImpactWrong2: false})}/>
                 ) : (
                   null
                 )}

        </View>
        );
      }
  }
};

class CliffMessage extends React.Component {
  constructor() {
    super();
    this.state={message: "You continue your journey and notice a tower and a bright blue light from afar,\nnow that you are near,\n you realize that this light is some kind of vortex,\n and besides it is a well dress fellow.\r\n He greets you and tells you that he is one of the keeper of time and space,\n he explain also a story about vampire using blood magic to bend space,\n you don’t understand everything, \n but for a reason or another he needs to ask you a question.\r\nIf you succeed he will let you use the vortex toward the 'Red Sun'.\r\nThe question is on the 6 sacred elements wheel,\n what are the 3 that allows to kill a vampire ?\n §" , showMessage: true, placeholder:"You use your knowledge to remember whats the wheel looks like.\r\n Crested in it are\n a Ruby 'Fire', an Aquamarine 'Water', an Emerald 'Earth', an Obsidian 'Dark',a Moonstone 'Light', and a Citrine 'Air'.\r\n What will you choose ?"};
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
            fontSize: 0.3,
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