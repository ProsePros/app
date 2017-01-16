import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory} from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

ReactStormpath.init();

ReactDOM.render(
    <Router history={browserHistory}>
        <HomeRoute path='/' component={MasterPage}>
            <IndexRoute component={IndexPage /}>
            <LoginRoute path='/login' component={LoginPage} />
            <Route path='/register' component={RegistrationPage} />
            <AuthenticatedRoute>
                <HomeRoute path='/profile' component={ProfilePage} />
            </AuthenticatedRoute>
        </HomeRoute>
    </Router>,
    document.getElementById('app-container')
);
