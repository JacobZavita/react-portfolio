import '@fontsource/roboto'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#042A2B',
  },
  grid: {
    // justifyContent: 'center'
  },
  gridRow: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  cardText: {
    textAlign: 'center',
  },
  headerText: {
    color: '#FCF7F8',
    textAlign: 'center',
    margin: '0 0 30px 15px'
  }
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid className={classes.grid} spacing={3}>
          <Grid
            item
            xs={12}
            className={classes.gridRow}
          >
            <Typography variant='h2' className={classes.headerText}>
              Projects
            <hr></hr>
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex' }}>
            {/* 1 - Currency Converter */}
            <Card className={classes.card} style={{ margin: '15px' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/fn2t0LY/currency-converter.png"
                  title="Currency Converter"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.cardText}
                  >
                    Currency Converter
              </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                    See the value of fiat and crypto currencies in the top 40 fiat assets and crypto assets.
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href='https://charlottefrancis.github.io/CurrencyConverter/index.html'>
                    See it live
                </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href='https://github.com/CharlotteFrancis/CurrencyConverter'>
                    github repo
                </Link>
                </Button>
              </CardActions>
            </Card>
            {/* 2 - Password Generator */}
            <Card className={classes.card} style={{ margin: '15px' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/Jc7TzS1/password-generator.png"
                  title="Password Generator"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                    Password Generator
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                    Generate a random password between 8 and 128 characters based on user's character requirements.
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href='https://alwayssmellitfirst.github.io/password_generator/'>
                    See it live
                </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href='https://github.com/alwayssmellitfirst/password_generator'>
                    github repo
                </Link>
                </Button>
              </CardActions>
            </Card>
            {/* 3 - ComicCol */}
            <Card className={classes.card} style={{ margin: '15px' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/YX6RVFm/comiccol.png"
                  title="ComiCol"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                    ComicCol
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                    A full stack app for comic collectors to showcase their collection with ratings and reviews.
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href='https://comiccol.herokuapp.com/'>
                    See it live
                </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href='https://github.com/alwayssmellitfirst/ComicCol'>
                    github repo
                </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex' }}>
            {/* 4 - eComm Backend */}
              <Card className={classes.card} style={{ margin: '15px' }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ibb.co/fdJrQy3/pexels-lukas-574071.jpg"
                    title="eCommerce Back-End"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                      eCommerce Back-End
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                      A back end for an e-commerce website managing inventory with products, categories, and tags.
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href='https://charlottefrancis.github.io/CurrencyConverter/index.html'>
                      Check it out on github
                  </Link>
                  </Button>
                </CardActions>
              </Card>
            {/* 5 - Regex tutorial */}
              <Card className={classes.card} style={{ margin: '15px' }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ibb.co/1XxYtJn/pexels-luis-gomes-546819.jpg"
                    title="Regex Tutorial - Email Validation"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                      Regex Tutorial - Email Validation
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                      A GitHub gist tutorial on how to use a regex for email validation
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href='https://gist.github.com/alwayssmellitfirst/d67af6b613402e3f6ae6d9726dae0d68'>
                      Check it out on github
                  </Link>
                  </Button>
                </CardActions>
              </Card>
            {/* 6 - Code Quiz */}
              <Card className={classes.card} style={{ margin: '15px' }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.ibb.co/h880fMk/pexels-christina-morillo-1181675.jpg"
                    title="Code Quiz"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                      Code Quiz - Javascript
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                      A quiz on how to use Javascript basics
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href='https://alwayssmellitfirst.github.io/javascript_quiz/'>
                      See it live
                  </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link href='https://github.com/alwayssmellitfirst/javascript_quiz'>
                      github repo
                  </Link>
                  </Button>
                </CardActions>
              </Card>
          </Grid>
        </Grid>
      </div>
   </>
  )
}

export default Portfolio