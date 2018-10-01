import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class TopBar extends React.Component {
  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });  
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  render() {
    const { anchorEl } = this.state;

    return(
      <div>
        <AppBar color='primary' position='fixed'>
          <Toolbar>
            <IconButton
              aria-owns={anchorEl ? 'simpleMenu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simpleMenu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>SomeItem</MenuItem>
              <MenuItem onClick={this.handleClose}>SomeItem</MenuItem>
             </Menu>
          </Toolbar>
        </AppBar> 
      </div>
    );
  }
}
