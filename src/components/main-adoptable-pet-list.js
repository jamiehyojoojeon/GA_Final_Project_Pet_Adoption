import React from 'react';
import { Link } from 'react-router-dom';
import Nacho from '../css/images/nacho1.jpg'
import Willy from '../css/images/willy1.jpg'
import Hercules from '../css/images/hercules1.jpg'
import Happy from '../css/images/happy.jpg'

class MainAdoptablePetList extends React.Component {
    render() {
        return (
            // Make a reusable component for each pet 
            <section className="main-adoptable-pet">
                <div className="main-adoptable-pet-container">
                    <h1>Pets Available for Adoption</h1>
                    <ul className="main-adoptable-pet-list">
                        <PetInfo
                            image={Nacho}
                            id='0'
                            name='Nacho'
                            breed='Bombay'
                        />
                        <PetInfo
                            image={Willy}
                            id='1'
                            name='Willy'
                            breed='American Staffordshire Terrier'
                        />
                        <PetInfo
                            image={Hercules}
                            id='2'
                            name='Hercules'
                            breed='German Shepherd Mix'
                        />
                        <PetInfo
                            image={Happy}
                            id='3'
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


class PetInfo extends React.Component {
    render() {
        return (
            <li className="main-adoptable-pet-item">
                <Link to={"/adopt/pet-adoption/" + this.props.id}>
                    <img src={this.props.image} alt="" />
                    <div className="adoptable-pet-info-container">
                        <div className="pet-info">
                            <h3>{this.props.name}</h3>
                            <p className="breed">{this.props.breed}</p>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}


class AvailablePetButton extends React.Component {
    render() {
        return (
            <div className="adoptable-pet-btn">
                <Link to="/adopt/pet-adoption">
                    <h3>Meet more pets available</h3>
                </Link>
            </div>
        );
    }
}

export default MainAdoptablePetList;