import React from 'react';
import { Link } from 'react-router-dom';
import PetInfoList from './pet-data.js'
import '../css/style.css';
import '../css/responsive.css';

class PetAdoption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AnimalType: 'All',
            Age: 'All',
            Gender: 'All',
            Location: 'All'
        }
    }

    AnimalTypeFilter(e) {
        this.setState({
            AnimalType: e.target.value
        })
    }

    AgeFilter(e) {
        this.setState({
            Age: e.target.value
        })
    }

    GenderFilter(e) {
        this.setState({
            Gender: e.target.value
        })
    }

    LocationFilter(e) {
        this.setState({
            Location: e.target.value
        })
    }

    // this function gets passed an Pet object and the animalType dropdown value
    // it returns true if Pet object is allowed by the animalType dropdown value
    // it returns false otherwise
    CheckAnimalType(petObj, animalTypeValue) {
        if (petObj.animalType === animalTypeValue) {
            return true;
        }
        if (animalTypeValue === 'All') {
            return true;
        }
        return false;
    }

    // this fuction gets passed on Pet object and the age dropdown value
    // it returns true if Pet object is allowed by the age dropdown value 
    // example1: if Kitten/Puppy dropdown value is selected, it checks if Pet object is Kitten or Puppy, then return true.
    // example2: if All dropdown value is selected, return true
    // it returns false otherwise
    CheckAge(petObj, AgeValue) {
        if (petObj.lifeStage === AgeValue) {
            return true;
        }
        if ((petObj.lifeStage === 'Kitten' || petObj.lifeStage === 'Puppy') && AgeValue === 'Kitten/Puppy') {
            return true;
        }
        if (AgeValue === 'All') {
            return true;
        }
        return false;
    }

    CheckGender(petObj, GenderValue) {
        if (petObj.gender === GenderValue) {
            return true;
        }
        if (GenderValue === 'All') {
            return true;
        }
        return false;
    }
    CheckLocation(petObj, LocationValue) {
        if (petObj.location === LocationValue) {
            return true;
        }
        if (LocationValue === 'All') {
            return true;
        }
        return false;
    }

    render() {
        let filterList = [];
        for (let i = 0; i < PetInfoList.length; i++) {
            if (this.CheckAnimalType(PetInfoList[i], this.state.AnimalType)) {
                // animal type matches the current animal
                if (this.CheckAge(PetInfoList[i], this.state.Age)) {
                    // age matches the current animal
                    if (this.CheckGender(PetInfoList[i], this.state.Gender)) {
                        // gender matches the current animal
                        if (this.CheckLocation(PetInfoList[i], this.state.Location)) {
                            // location matches the current animal
                            filterList.push(PetInfoList[i]);
                        }
                    }
                }
            }
        }

        return (
            <main className="main-content">
                <section className="intro">
                    <h1>Adopt</h1>
                    <p>Adoptable dogs and puppies at the Atlanta Humane Society. Find the perfect dog or puppy by searching or
                    browsing our adoptable pets below. Why buy a dog or puppy when you can adopt your new best friend? All of our
                    adoptable dogs and puppies below have had a complete veterinary checkup, come spayed or neutered, updated on
                shots, insured, microchipped, and with a free bag of Purina One.</p>
                </section>
                <section className="adoption-search-section">
                    <form className="adoption-search-form" method="post" action="">
                        <fieldset>
                            <ul>
                                <li>
                                    <label>Animal Type</label>
                                    <select value={this.state.AnimalType} onChange={(e) => this.AnimalTypeFilter(e)}>
                                        <option>All</option>
                                        <option>Dog</option>
                                        <option>Cat</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Age</label>
                                    <select value={this.state.Age} onChange={(e) => this.AgeFilter(e)}>
                                        <option>All</option>
                                        <option>Kitten/Puppy</option>
                                        <option>Young</option>
                                        <option>Adult</option>
                                        <option>Senior</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Gender</label>
                                    <select value={this.state.Gender} onChange={(e) => this.GenderFilter(e)}>
                                        <option>All</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Location</label>
                                    <select value={this.state.Location} onChange={(e) => this.LocationFilter(e)}>
                                        <option>All</option>
                                        <option>Duluth Highway</option>
                                        <option>Howell Mill Road</option>
                                        <option>Mansell Road</option>
                                    </select>
                                </li>
                            </ul>
                        </fieldset>
                    </form>
                </section>
                <section className="inner-content-section">
                    <div className="inner-content">
                        <div className="adoptable-pet-list" id="filterable-animal-list">
                            <PetList
                                PetList={filterList}
                            />
                        </div>
                    </div>
                </section>
            </main>
        )
    }

}

class PetList extends React.Component {
    render() {
        return (
            <span>
                {
                    this.props.PetList.length === 0 ?
                        <h1>No pets found</h1>
                        :
                        this.props.PetList.map((PetInfo) => {
                            return (
                                <PetListItem
                                    PetInfo={PetInfo}
                                />
                            )
                        })
                }
            </span>
        );
    }
}

class PetListItem extends React.Component {
    render() {
        return (
            <div className="adoptable-pet-item">
                <Link to={"/adopt/pet-adoption/" + this.props.PetInfo.id}>
                    <img src={this.props.PetInfo.images[0]} />
                    <div className="adoptable-pet-info-container">
                        <div className="pet-info">
                            <h3>{this.props.PetInfo.name}</h3>
                            <p className="breed">{this.props.PetInfo.breed}</p>
                            <p className="age">{this.props.PetInfo.lifeStage}</p>
                            <p className="gender">{this.props.PetInfo.gender}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PetAdoption;