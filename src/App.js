import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'

function App() {
  return (
    <>
    <Router>
    <Particles
    className='tsparticles-canvas'
      params={{
        particles:{
          number:{
            value: 30,
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape:{
            type: "circle",
            stroke:{
              width: 6,
              color: "#04e03b"
            }
          }
        }
      }}
    
    />
      <Navbar />
      <Header />
      <About /> 
      <Services />
    </Router>
    </>
  );
}

export default App;
