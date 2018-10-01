import React from 'react';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Row from './components/Row';
import Footer from './components/Footer';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <Row />
        <Footer />
      </div>
    );
  }
}
