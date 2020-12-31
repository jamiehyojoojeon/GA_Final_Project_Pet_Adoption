import React from 'react';
import PetImageCarousel from './pet-image-carousel';
import MainAdoptablePetList from './main-adoptable-pet-list';
import MainIntroContent from './main-intro-content';
import '../css/style.css';
import '../css/responsive.css';
import '../css/pet-image-box.css';

class HomeMainPage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <PetImageCarousel />
                <MainAdoptablePetList />
                <MainIntroContent />
            </div>
        );
    }
}

export default HomeMainPage;