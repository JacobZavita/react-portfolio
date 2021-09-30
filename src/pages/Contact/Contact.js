import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import emailjs from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '89vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(90deg, rgba(8,85,87,1) 0%, rgba(9,99,121,1) 11%, rgba(102,206,214,1) 100%)'
  },
  headerText: {
    color: '#FCF7F8',
    textAlign: 'center',
    margin: '0 0 30px 15px'
  },
  card: {
    maxWidth: 500,
    margin: '0 auto',
    padding: '20px 5px',
    boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'
  },
  text: 
  {
    color: '#FCF7F8',
    textAlign: 'center'
  },
  button: {
    background: 'linear-gradient(45deg, #2176ae 30%, #66ced6 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}))

const Contact = () => {
  const classes = useStyles()

  const sendEmail = event => {
    event.preventDefault()

    emailjs.sendForm(
      'service_wn90ahh',
      'template_zsr7mgn',
      event.target,
      'user_Yg7N7VfLmVBhFJ4yOHF0s'
    ).then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  return (
    <div className={classes.root} id='contact'>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' className={classes.headerText}>
            Let's Talk!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5'>Contact Me</Typography>
                <Typography
                  variant='body2'
                  component='p'
                  gutterBottom
                  color='textSecondary'
                >
                  You can reach me at jacobzavita@gmail.com or 1-503-710-5455.
                  Or send an email with the form below (yes, it works).
                </Typography>
                  <form onSubmit={sendEmail}>
                    <Grid container spacing={1}>
                      <Grid
                        xs={12}
                        sm={6}
                        item
                      >
                        <TextField
                          label='First Name'
                          name='firstName'
                          placeholder='Enter first name'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        item
                      >
                        <TextField
                          label='Last Name'
                          name='lastName'
                          placeholder='Enter last name'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type='email'
                          label='Email'
                          name='userEmail'
                          placeholder='Enter email address'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          label='Phone Number'
                          name='phoneNumber'
                          placeholder='Enter phone number'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          label='Message'
                          name='message'
                          multiline
                          rows={4}
                          placeholder='Type your message here'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <Button
                          type='submit'
                          variant='contained'
                          className={classes.button}
                          fullWidth
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
