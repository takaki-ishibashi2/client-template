import React from 'react';

import Menu from './Menu';
import Introduction from './Introduction';
import Description from './Description';
export default class Row extends React.Component {
  render() {
    return (
      <div className={'row'}>
        <Menu />
        <Introduction />
        <Description />
      </div>
    );
  }
}
