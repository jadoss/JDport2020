import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bio from './Pages/AboutMe';
import Home from './Pages/Home';
import Portfolio from'./Pages/PortfolioPage';

const Content = () => {
    return (
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path="/About" component={Bio} />
            <Route exact path="/Portfolio" component={Portfolio} />
        </Switch>    
    )
}

export default Content;