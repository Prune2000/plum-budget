import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Dashboard from '../components/Dashboard/Dashboard';

 
const AppRouter = () => (
    <BrowserRouter>
        <div className='container-main'>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;