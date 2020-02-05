import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import AppliedRoute from "./components/AppliedRoute";


export default function Routes({appProps}) {
    return (
        <Switch>
            <AppliedRoute path = "/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}