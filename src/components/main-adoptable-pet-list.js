import React from 'react';
import Nacho from '../css/images/nacho1.jpg'
import Willy from '../css/images/willy1.jpg'
import Hercules from '../css/images/hercules1.jpg'
import Happy from '../css/images/happy.jpg'

class MainAdoptablePetList extends React.Component {
    render() {
        return (
            // Make a reusable component for each pet 
            <section class="main-adoptable-pet">
                <div class="main-adoptable-pet-container">
                    <h1>Pets Available for Adoption</h1>
                    <ul class="main-adoptable-pet-list">
                        <PetInfo
                            image={Nacho}
                            name='Nacho'
                            breed='Bombay'
                        />
                        <PetInfo
                            image={Willy}
                            name='Willy'
                            breed='American Staffordshire Terrier'
                        />
                        <PetInfo
                            image={Hercules}
                            name='Hercules'
                            breed='German Shepherd Mix'
                        />
                        <PetInfo
                            image={Happy}
                            name='Happy'
                            breed='Domestic Short Hair'
                        />
                    </ul>
                    <AvailablePetButton />
                </div>
            </section>
        );
    }
}

// TODO: Need to fix link
class PetInfo extends React.Component {
    render() {
        return (
            <li class="main-adoptable-pet-item">
                <a href="adopt/adopt-pet/pet/?id=0">
                    <img src={this.props.image} alt="" />
                    <div class="adoptable-pet-info-container">
                        <div class="pet-info">
                            <h3>{this.props.name}</h3>
                            <p class="breed">{this.props.breed}</p>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

// TODO: Need to fix link
class AvailablePetButton extends React.Component {
    render() {
        return (
            <div class="adoptable-pet-btn">
                <a href="adopt/adopt-pet/index.html">
                    <h3>Meet more pets available</h3>
                </a>
            </div>
        );
    }
}

export default MainAdoptablePetList;