import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Appbar />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
