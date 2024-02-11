import React from 'react'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import Home from './components/Home.jsx/Home';
import About from './components/about/About';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
// import Footer from './components/common/footer/Footer';
import LogIn from './components/logIn/LogIn';

const App = () => {

  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/team' exact component={Team} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/login' exact component={LogIn} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
