import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/nav/nav';
import Home from './Components/home/home';
import About from './Components/about/about';
import CalendarView from './Components/calendar/calendar';
import Video from './Components/video/video';

function App() {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/video' component={Video} />
          <Route path='/calendar' component={CalendarView} />
        </Switch>
      </Navigation>
    </Router>
  );
}

export default App;
