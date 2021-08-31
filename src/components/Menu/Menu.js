import React from 'react'
import { Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    links: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }

  return (
    <div>
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link 
            activeClass="active"
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={styles.links}
          >
            About Me
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link 
            activeClass="active"
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={styles.links}
          >
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            activeClass="active"
            to='resume'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={styles.links}
          >
            Resume
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            activeClass="active"
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={styles.links}
          >
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
