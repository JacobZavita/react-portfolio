import{ makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: '#2176AE',
    color: '#FCF7F8',
    minHeight: '5vh',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  link: {
    color: '#FCF7F8',
    margin: '10px 10px 7px'
  },
  copyright: {
    marginBottom: '10px'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer>
      <Grid container className={classes.box}>
        <Grid
          item
          xs={12}
          className={classes.row}
        >
              <Link href='https://github.com/JacobZavita' className={classes.link}>
                <GitHubIcon></GitHubIcon>
              </Link>
              <Link href='https://www.linkedin.com/in/jacob-zavita/' className={classes.link}>
                <LinkedInIcon></LinkedInIcon>
              </Link>
              <Link href='https://twitter.com/JacobZavita' className={classes.link}>
                <TwitterIcon></TwitterIcon>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.row}
            >
              <Typography className={classes.copyright}>
            Jacob Zavita <span style={{ color: '#F5F0F6' }}>©2021</span>
              </Typography>
            </Grid>
          </Grid>
    </footer>
  )
}

export default Footer