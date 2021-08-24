import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: '15px'
  },
  media: {
    height: 200,
  },
  cardText: {
    textAlign: 'center',
  }
});

const PortCard = props => {
  const classes = useStyles();
  const [onHover, setOnHover] = useState(false)

  return(
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          image={onHover ? null : `${props.projects[props.i].image}`}
          title={props.projects.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardText}
          >
            {props.projects[props.i].title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.cardText}
          >
            {props.projects[props.i].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{ margin: 'auto' }}>
          <Button size="small" color="primary">
            <Link href={props.projects[props.i].url}>
              See it live
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link href={props.projects[props.i].github}>
              github repo
            </Link>
          </Button>
        </div>
      </CardActions>
    </Card>
  )
}

export default PortCard