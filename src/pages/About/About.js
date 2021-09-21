import '@fontsource/roboto'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button, useMediaQuery, useTheme } from '@material-ui/core'
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '89vh',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundImage: 'linear-gradient(90deg, rgba(8,85,87,1) 0%, rgba(9,99,121,1) 11%, rgba(102,206,214,1) 100%)'
  },
  mobileRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '70vh',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundImage: 'linear-gradient(90deg, rgba(8,85,87,1) 0%, rgba(9,99,121,1) 11%, rgba(102,206,214,1) 100%)'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#66CED6',
    margin: ' 15px 10px'
  },
  text: {
    color: '#FCF7F8',
  },
  buttonText: {
    textDecoration: 'none'
  },
  textArea: {
    maxWidth: '1100px',
    margin: '5% auto',
    textAlign: 'center',
    padding: '120px',
  },
  imageArea: {
    position: 'relative'
  },
  mainImage: {
    borderRadius: '10px',
    position: 'absolute',
    top: '20%',
    left: '57%'
  },
  mobileImage: {
    maxWidth: '85vw'
  },
  textMobile: {
    color: '#FCF7F8',
    textAlign: 'center',
    marginBottom: '-10vh'
  },
  headerTextMobile: {
    color: '#FCF7F8',
    textAlign: 'center',
    marginTop: '5vh',
    marginBottom: '-10vh'
  },
  videoBg: {
    zIndex: '0',
    width: '100%',
    height: '100%',
    oObjectFit: 'cover',
    objectFit: 'cover',
    background: '#232a34'
  },
}));

const About = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      {isMobile ? (
        <div className={classes.mobileRoot} id='about'>
          <Typography
            variant='h3'
            className={classes.headerTextMobile}
          >
            Hi, I'm Jacob Zavita. I'm a...
          </Typography>
          <Typography variant='h5' className={classes.textMobile}>
            Frontend developer with a background in B2B SaaS sales certified in Full Stack Web Development by UC Irvine.
          </Typography>
          <Grid className={classes.grid} spacing={3}>
            <Grid item xs={6}>
              <Link to='portfolio' smooth={true} duration={1000} className={classes.buttonText}>
                <Button className={classes.button}>
                  projects
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to='' className={classes.buttonText}>
                <Button className={classes.button}>
                  github
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.root} id='about'>
          <Grid className={classes.grid} container spacing={3}>
            <Grid
              item
              xs={12}
              className={classes.textArea}
            >
              <Typography
                variant='h2'
                marginBottom='20px'
                className={classes.text}
              >
                Hi, I'm Jacob Zavita. I'm a...
              </Typography>
              <Typography variant='h4' className={classes.text}>
                Frontend developer with a background in B2B SaaS sales certified in Full Stack Web Development by UC Irvine. Check out my work.
              </Typography>
              <Link to='/portfolio' className={classes.buttonText}>
                <Button className={classes.button}>
                  check out my projects
                </Button>
              </Link>
              <Link to='' className={classes.buttonText}>
                <Button className={classes.button}>
                  check out my github
                </Button>
              </Link>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <img src='https://i.postimg.cc/Njfzsfyv/00100lr-PORTRAIT-00100-BURST20200828161547179-COVER.jpg' alt='Jacob Zavita' className={classes.mainImage} />
            </Grid> */}
          </Grid>
        </div>
      )}
    </>
  )
}

export default About
