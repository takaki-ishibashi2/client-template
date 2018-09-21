import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className={'col-s-3 col-l-3 menu'}>
        <ul>
          <li>menu one</li>
          <li>menu two</li>
          <li>menu three</li>
        </ul>
      </div>
    );
  }
}
