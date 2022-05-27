import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import TodoSelection from './TodoSelection';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';

const NavigationRouter = () => {
    return(
        <Router>
            <Navigation />
            <Switch>
                <Route exact path='/home'>
                    <TodoSelection />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )
}

export default NavigationRouter;