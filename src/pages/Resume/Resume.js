import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DevIcon from 'devicon-react-svg'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
// import pdf from '../../assets'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '89vh',
    backgroundColor: '#042A2B',
  },
  list: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(60),
    },
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}));

const Resume = () => {
  const classes= useStyles()

  const downloadFile = () => {
    window.location.href = "https://drive.google.com/file/d/1iCotgGpkpAR7SXlyBM-vBEzUi2sIfXgl/view"
  }

  return (
    <div className={classes.root}>
        <div className={classes.list} align='center' >
          <Paper elevation={3} style={{ margin:'15px auto', padding:'20px 5px' }}>
            <Typography variant='h4'>
              Skills
            </Typography>
            <hr></hr>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <List component="nav" >
                  <ListItem>
                    <DevIcon icon='react' style={{ fill: 'purple', width:'40px', marginRight:'5px' }} viewBox='0 0 32 32'/>
                    <Typography>React</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='mysql' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>MySQL</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='html5' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>HTML5</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='github_badge' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>GitHub</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='heroku' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>Heroku</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='npm' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>NPM</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='jquery' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>JQuery</Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6}>
                <List>
                  <ListItem>
                    <DevIcon icon='bootstrap' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>Bootstrap</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='css3' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>CSS3</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='git' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>Git</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='js_badge' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>JavaScript</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='nodejs_small' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>NodeJS</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='mongodb' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>MongoDB</Typography>
                  </ListItem>
                  <ListItem>
                    <DevIcon icon='visualstudio' style={{ fill: 'purple', width: '40px', marginRight: '5px' }} viewBox='0 0 32 32' />
                    <Typography>VSCode</Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <Button className={classes.button} onClick={downloadFile}>Download Resume</Button>
        </div>
    </div>
  )
}

export default Resume