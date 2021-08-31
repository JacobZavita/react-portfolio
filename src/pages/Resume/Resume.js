import { makeStyles } from '@material-ui/core/styles'
import DevIcon from 'devicon-react-svg'
import { Grid, Paper, Typography, List, ListItem, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '89vh',
    backgroundImage: 'linear-gradient(90deg, #042A2B 20%, #66ced6 100%)'
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
    background: 'linear-gradient(45deg, #2176ae 30%, #66ced6 90%)',
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
    <div className={classes.root} id='resume'>
        <div className={classes.list} align='center' >
          <Paper elevation={3} style={{ margin:'15px auto', padding:'20px 5px 50px' }}>
            <Typography variant='h4'>
              Skills
            </Typography>
            <hr></hr>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <List component="nav" style={{ margin: '0px 0px 0px 90px' }}>
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
                <List style={{ margin: '0px 0px 0px 90px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <Button className={classes.button} onClick={downloadFile}>
                Download Resume
              </Button>
            </div>
          </Paper>
        </div>
    </div>
  )
}

export default Resume