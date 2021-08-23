import '@fontsource/roboto'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button, useMediaQuery, useTheme } from '@material-ui/core'
import { Link } from 'react-router-dom'


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
    backgroundColor: '#042A2B',
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
    margin: '5% auto',
    textAlign: 'left',
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
    textAlign: 'center'
  }
}));

const About = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      {isMobile ? (
        <div className={classes.root}>
          <img src='https://i.postimg.cc/KzRs1grn/V3au-Cbxg-400x400-modified.png' alt='Jacob Zavita' className={classes.mobileImage} />
          <Typography
            variant='h3'
            className={classes.textMobile}
          >
            Hi, I'm Jacob. I'm a...
          </Typography>
          <Typography variant='h5' className={classes.textMobile}>
            Frontend developer with a background in B2B SaaS sales. I'm certified in Full Stack Web Development by UC Irvine.
          </Typography>
          <Grid className={classes.grid} spacing={3}>
            <Grid item xs={6}>
              <Link to='/portfolio' className={classes.buttonText}>
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
        <div className={classes.root}>
          <Grid className={classes.grid} spacing={3}>
            <Grid item xs={12} md={6} className={classes.textArea}>
              <Typography
                variant='h2'
                marginBottom='20px'
                className={classes.text}
              >
                Hi, I'm Jacob. I'm a...
              </Typography>
              <Typography variant='h4' className={classes.text}>
                Frontend developer with a background in B2B SaaS sales. I'm certified in Full Stack Web Development by UC Irvine. Check out my work.
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
            <Grid item xs={12} md={6}>
              <img src='https://i.postimg.cc/Njfzsfyv/00100lr-PORTRAIT-00100-BURST20200828161547179-COVER.jpg' alt='Jacob Zavita' className={classes.mainImage} />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  )
}

export default About
