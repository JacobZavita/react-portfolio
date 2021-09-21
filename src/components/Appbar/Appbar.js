import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Menu from '../Menu'
import { Link as LinkR } from 'react-router-dom'
import { Link } from 'react-scroll'

import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: '#2176AE',
    color: '#FCF7F8',
    maxHeight: '10.5vh',
    // marginTop: '-80px',
    display: 'flex',
    position: 'sticky',
    top: '0',
    zIndex: '999',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80px',
    zIndex: '1',
    width: '100%',
    padding: '0 24px',
    maxWidth: '1100px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mobileMenuButton: {
    maxWidth: '10vw',
    display: 'flex',
    marginLeft: '1vw',
    marginTop: '1vh'
  },
  navLinks: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  title: {
    flexGrow: 1,
    display: 'flex',
  },
  title1: {
    color: '#fff',
    justifySelf: 'flex-start',
    cursor: 'pointer',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '24px',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  titleLink: {
    marginLeft: theme.spacing(5),
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '30px',
  },
  mobileTitleLink: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '24px',
    marginTop: '-48px'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '22px',
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(1),
    display: 'flex'
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
      <AppBar className={classes.root}>
        {isMobile ? (
          <>
            <IconButton edge="start" className={classes.mobileMenuButton} color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
              <div style={{ margin: 'auto' }}>
                <Typography variant="h6" className={classes.title}>
                  <Link to='/' className={classes.mobileTitleLink}>
                    Jacob Zavita - Full Stack Developer
                  </Link>
                </Typography>
              </div>
          </>
        ) : (
          <div className={classes.navLinks}>
            <Typography variant="h6" className={classes.title}>
              <Link
                activeClass="active"
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className={classes.titleLink}
              >
                Jacob Zavita - Full Stack Developer
              </Link>
            </Typography>
            <Link
              activeClass="active"
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className={classes.link}
            >
              About Me
            </Link>
            <Link 
              activeClass="active"
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className={classes.link}
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              to='resume'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className={classes.link}
            >
              Resume
            </Link>
            <Link
              activeClass="active"
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className={classes.finalNavLink}
            >
              Contact
            </Link>
          </div>
        )}
        <Toolbar>
        </Toolbar>
        {/* </div> */}
      </AppBar>
    </div>
  );
}

export default TopBar