import React from 'react';
import {MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import Matera from './vr/matera.js';
import CHURCH from './vr/Church';
import HOUSE from './vr/House';
import FOREST from './vr/Forest';
import CATACOMB from './vr/catacomb';
import CLIFF from './vr/Cliff';
import CEMETERY from './vr/Cemetery';
import CASTLE from './vr/castle';
import END from './vr/End';
import LOGOPage from './vr/LOGO';
import EXPLAIN from './vr/EXPLAIN';
import EXPLANATION from './vr/EXPLANATION';
import RULES from './vr/RULES';
import PROLOGUE from './vr/PROLOGUE';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  VideoPano,
  Sound,
} from 'react-vr';

export default class RouteList extends React.Component {
  render(){
    return(
<Router>
    <View>
      <Sound  volume={1}
              loop={true}
              source={{mp3: asset('Bloodborne.mp3')}} />
      <Switch>
        <Route exact path="/" component={LOGOPage} />
        <Route exact path="/Explain" component={EXPLAIN} />
        <Route exact path="/EXPLANATION" component={EXPLANATION}/>
        <Route exact path="/RULES" component={RULES}/>
        <Route exact path="/PROLOGUE" component={PROLOGUE}/>
        <Route exact path="/Home" component={Matera} />
        <Route exact path="/Church" component={CHURCH} />
        <Route exact path="/House" component={HOUSE} />
        <Route exact path="/Forest" component={FOREST} />
        <Route exact path="/Catacomb" component={CATACOMB} />
        <Route exact path="/Cliff" component={CLIFF} />
        <Route exact path="/Cemetery" component={CEMETERY} />
        <Route exact path="/Castle" component={CASTLE} />
        <Route exact path="/End" component={END} />
      </Switch>
    </View>
  </Router>

    )
  }
}

AppRegistry.registerComponent('MATERA', () => RouteList);
