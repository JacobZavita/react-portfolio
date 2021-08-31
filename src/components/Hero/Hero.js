import { makeStyles } from '@material-ui/core/styles'
import Video from '../../assets/videos/video.mp4'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden'
  },
  heroContainer: {
    background: '#0c0c0c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px',
    height: '800px',
    position: 'relative',
    zIndex: '1',
  },
  heroBg: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  videoBg: {
    width: '100%',
    height: '100%',
    oObjectFit: 'cover',
    objectFit: 'cover',
    background: '#232a34'
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {/* <div className={classes.heroBg}> */}
        <video
          className={classes.videoBg}
          autoplay="autoplay"
          loop="loop"
          muted
          src={Video}
          type='video/mp4'
        />
      {/* </div> */}
    </div>
  )
}

export default Hero
