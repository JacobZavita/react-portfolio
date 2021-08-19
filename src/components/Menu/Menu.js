import React from 'react';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

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
          <Link to='/' style={styles.links}>
            About Me
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/portfolio' style={styles.links}>
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/contact' style={styles.links}>
            Contact
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/resume' style={styles.links}>
            Resume
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
