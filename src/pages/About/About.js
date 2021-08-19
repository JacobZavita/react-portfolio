import '@fontsource/roboto'
// import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import { Typography, Grid, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '100vh',
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
  }
}));

const About = () => {
  const classes = useStyles()

  return (
    <>
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
            <Button className={classes.button}>
              Check out my projects
            </Button>
            <Button className={classes.button}>
              Check out my github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src='https://i.postimg.cc/Njfzsfyv/00100lr-PORTRAIT-00100-BURST20200828161547179-COVER.jpg' alt='Jacob Zavita' className={classes.mainImage} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default About
