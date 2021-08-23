// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../Menu'
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#2176AE',
    color: '#FCF7F8',
    maxHeight: '8.5vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navLinks: {
    marginTop: theme.spacing(3.5),
    display: 'flex'
  },
  title: {
    flexGrow: 1,
  },
  titleLink: {
    marginLeft: theme.spacing(5),
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '30px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '22px',
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(1)
  },
  finalNavLink: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '22px',
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(1),
    display: 'flex'
  }
}));

const TopBar = () => {
  const classes = useStyles();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <CssBaseline />
        {isMobile ? (
          <>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to='/' className={classes.titleLink}>
                Jacob Zavita - Full Stack Developer
              </Link>
            </Typography>
          </>
        ) : (
          <div className={classes.navLinks}>
            <Typography variant="h6" className={classes.title}>
              <Link to='/' className={classes.titleLink}>
                Jacob Zavita - Full Stack Developer
              </Link>
            </Typography>
            <Link to='/' className={classes.link}>
              About Me
            </Link>
            <Link to='/portfolio' className={classes.link}>
              Portfolio
            </Link>
            <Link to='/contact' className={classes.link}>
              Contact
            </Link>
            <Link to='/resume' className={classes.finalNavLink}>
              Resume
            </Link>
          </div>
        )}
        <Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar