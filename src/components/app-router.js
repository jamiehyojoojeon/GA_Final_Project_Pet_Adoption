import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import HomeMainPage from './home-main-page';
import PetAdoption from './pet-adoption';
import AdoptionProcess from './adoption-process';
import SprayNeuter from './service-spray-neuter';
import DogTraining from './service-dog-training';
import AboutUs from './about-us';
import Contact from './contact';

class AppRouter extends React.Component {
    render() {
        return (
            <span>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomeMainPage} />
                    <Route path='/adopt/pet-adoption' component={PetAdoption} />
                    <Route path='/adopt/adoption-process' component={AdoptionProcess} />
                    <Route path='/service/spray-neuter' component={SprayNeuter} />
                    <Route path='/service/dog-training' component={DogTraining} />
                    <Route exact path='/about-us' component={AboutUs} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
                <Footer />
            </span>
        );
    }
}

export default AppRouter;