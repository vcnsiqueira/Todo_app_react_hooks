import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Todo from '../components/Todo/Todo';
import About from '../components/About/About';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/todos' component={Todo} />
                <Route path='/about' component={About} />
                <Redirect from='*' to='/todos' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

