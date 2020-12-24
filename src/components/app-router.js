import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeMainPage from './home-main-page';
import SprayNeuter from './service-spray-neuter';
import DogTraining from './service-dog-training';
import AboutUs from './about-us';
import Contact from './contact';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeMainPage} />
                <Route path='/service/spray-neuter' component={SprayNeuter} />
                <Route path='/service/dog-training' component={DogTraining} />
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        );
    }
}

export default AppRouter;