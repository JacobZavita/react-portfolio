import '@fontsource/roboto'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core'
import PortCard from '../../components/PortCard'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(90deg, #042A2B 20%, #66ced6 100%)'
  },
  card: {
    maxWidth: 345,
    margin: '15px'
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

const projects1 = [
  {
    title: 'PawPal',
    image: 'https://i.ibb.co/fFWTw5R/Screen-Shot-2021-08-23-at-4-28-17-PM.png',
    description: "A full-stack React app to find pets up for adoption in your area via Petfinder API. Users can search, sort, and save animals they're interested in share that with friends.",
    url: 'https://paw-pal-bootcamp.herokuapp.com/',
    github: 'https://github.com/JacobZavita/paw-pal',
    techs: 'https://i.ibb.co/tMVzv0G/Paw-Pal-Tech.png'
  },
  {
    title: 'Currency Converter',
    image: 'https://i.ibb.co/fn2t0LY/currency-converter.png',
    description: 'See the value of fiat and crypto currencies in the top 40 fiat assets and crypto assets.',
    url: 'https://charlottefrancis.github.io/CurrencyConverter/index.html',
    github: 'https://github.com/CharlotteFrancis/CurrencyConverter',
    techs: 'https://i.ibb.co/pKmx6t9/Currency-Converter-Tech.png'
  },
  {
    title: 'Password Generator',
    image: 'https://i.ibb.co/Jc7TzS1/password-generator.png',
    description: "Generate a random password between 8 and 128 characters based on user's character requirements.",
    url: 'https://jacobzavita.github.io/password_generator/',
    github: 'https://github.com/jacobzavita/password_generator',
    techs: 'https://i.ibb.co/LRMPwR4/Password-Generator-Tech.png'
  }
]

const projects2 = [
  {
    title: 'ComicCol',
    image: 'https://i.ibb.co/YX6RVFm/comiccol.png',
    description: "A full stack app for comic collectors to showcase their collection with ratings and reviews.",
    url: 'https://comiccol.herokuapp.com/',
    github: 'https://github.com/jacobzavita/ComicCol',
    techs: 'https://i.ibb.co/1sH9Q4q/Comic-Col-Tech.png'
  },
  {
    title: 'eCommerce Back-End',
    image: 'https://i.ibb.co/fdJrQy3/pexels-lukas-574071.jpg',
    description: "A back end for an e-commerce website managing inventory with products, categories, and tags.",
    url: 'https://github.com/JacobZavita/E-Commerce_Back_End',
    github: 'https://github.com/JacobZavita/E-Commerce_Back_End',
    techs: 'https://i.ibb.co/PzZH5Z1/ecomtech.png'
  },
  {
    title: 'Regex Tutorial - Email Validation',
    image: 'https://i.ibb.co/1XxYtJn/pexels-luis-gomes-546819.jpg',
    description: "A GitHub gist tutorial on how to use a regex for email validation.",
    url: 'https://gist.github.com/jacobzavita/d67af6b613402e3f6ae6d9726dae0d68',
    github: 'https://gist.github.com/jacobzavita/d67af6b613402e3f6ae6d9726dae0d68',
    techs: 'https://i.ibb.co/NT4x9KN/regextech.png'
  }
]

const projects= [
  {
    title: 'PawPal',
    image: 'https://i.ibb.co/fFWTw5R/Screen-Shot-2021-08-23-at-4-28-17-PM.png',
    description: "A full-stack React app to find pets up for adoption in your area via Petfinder API. Users can search, sort, and save animals they're interested in share that with friends.",
    url: 'https://paw-pal-bootcamp.herokuapp.com/',
    github: 'https://github.com/JacobZavita/paw-pal',
    techs: 'https://i.ibb.co/tMVzv0G/Paw-Pal-Tech.png'
  },
  {
    title: 'Currency Converter',
    image: 'https://i.ibb.co/fn2t0LY/currency-converter.png',
    description: 'See the value of fiat and crypto currencies in the top 40 fiat assets and crypto assets.',
    url: 'https://charlottefrancis.github.io/CurrencyConverter/index.html',
    github: 'https://github.com/CharlotteFrancis/CurrencyConverter',
    techs: 'https://i.ibb.co/pKmx6t9/Currency-Converter-Tech.png'
  },
  {
    title: 'Password Generator',
    image: 'https://i.ibb.co/Jc7TzS1/password-generator.png',
    description: "Generate a random password between 8 and 128 characters based on user's character requirements.",
    url: 'https://jacobzavita.github.io/password_generator/',
    github: 'https://github.com/jacobzavita/password_generator',
    techs: 'https://i.ibb.co/LRMPwR4/Password-Generator-Tech.png'
  },
  {
    title: 'ComicCol',
    image: 'https://i.ibb.co/YX6RVFm/comiccol.png',
    description: "A full stack app for comic collectors to showcase their collection with ratings and reviews.",
    url: 'https://comiccol.herokuapp.com/',
    github: 'https://github.com/jacobzavita/ComicCol',
    techs: 'https://i.ibb.co/1sH9Q4q/Comic-Col-Tech.png'
  },
  {
    title: 'eCommerce Back-End',
    image: 'https://i.ibb.co/fdJrQy3/pexels-lukas-574071.jpg',
    description: "A back end for an e-commerce website managing inventory with products, categories, and tags.",
    url: 'https://github.com/JacobZavita/E-Commerce_Back_End',
    github: 'https://github.com/JacobZavita/E-Commerce_Back_End',
    techs: 'https://i.ibb.co/PzZH5Z1/ecomtech.png'
  },
  {
    title: 'Regex Tutorial - Email Validation',
    image: 'https://i.ibb.co/1XxYtJn/pexels-luis-gomes-546819.jpg',
    description: "A GitHub gist tutorial on how to use a regex for email validation.",
    url: 'https://gist.github.com/jacobzavita/d67af6b613402e3f6ae6d9726dae0d68',
    github: 'https://gist.github.com/jacobzavita/d67af6b613402e3f6ae6d9726dae0d68',
    techs: 'https://i.ibb.co/NT4x9KN/regextech.png'
  }
]

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id='portfolio'>
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
            {(projects.slice(0, 3)).map((project, i) => (
              <PortCard 
                key={i}
                projects={projects}
                i={i}
              />
            ))}
          </Grid>
          <Grid item xs={12} style={{ display: 'flex' }}>
            {projects2.map((project, i) => (
              <PortCard
                key={i}
                projects={projects2}
                i={i}
              />
            ))}
          </Grid>
        </Grid>
      </div>
   </>
  )
}

export default Portfolio