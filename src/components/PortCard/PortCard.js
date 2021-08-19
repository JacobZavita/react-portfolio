import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  cardText: {
    textAlign: 'center'
  }
})

const PortCard = () => {
  cosnt classes = useStyles()

  return (
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
  )
}