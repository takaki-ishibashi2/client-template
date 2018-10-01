import React from 'react';

import TopBar from './components/TopBar';
import Row from './components/Row';
import Footer from './components/Footer';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Row />
        <Footer />
      </div>
    );
  }
}
