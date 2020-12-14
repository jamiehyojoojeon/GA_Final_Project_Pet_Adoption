import React from 'react';
import Header from './header';
import Footer from './footer';
import PetImageCarousel from './pet-image-carousel';
import MainAdoptablePetList from './main-adoptable-pet-list';
import MainIntroContent from './main-intro-content';

class HomeMainPage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <PetImageCarousel />
                <MainAdoptablePetList />
                <MainIntroContent />
                <Footer />
            </div>
        );
    }
}

export default HomeMainPage;