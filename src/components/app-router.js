import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeMainPage from './home-main-page';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeMainPage} />
            </Switch>
        );
    }
}

export default AppRouter;