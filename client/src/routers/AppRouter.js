import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Dashboard from '../components/Dashboard/Dashboard';

 
const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);
 
export default AppRouter;