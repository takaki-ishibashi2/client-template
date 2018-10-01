import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopPage from './pages/TopPage';
import ProfilePage from './pages/ProfilePage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}
