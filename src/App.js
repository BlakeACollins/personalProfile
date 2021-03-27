import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Router>
        <Menu/>
        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        
      </Router>
    </>
  );
}
export default App;
