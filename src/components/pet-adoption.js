import React from 'react';
import '../css/style.css';
import '../css/responsive.css';

class PetAdoption extends React.Component {
    render() {
        return (
            <main class="main-content">
                <section class="intro">
                    <h1>Adopt</h1>
                    <p>Adoptable dogs and puppies at the Atlanta Humane Society. Find the perfect dog or puppy by searching or
                    browsing our adoptable pets below. Why buy a dog or puppy when you can adopt your new best friend? All of our
                    adoptable dogs and puppies below have had a complete veterinary checkup, come spayed or neutered, updated on
                shots, insured, microchipped, and with a free bag of Purina One.</p>
                </section>
                <section class="adoption-search-section">
                    <form class="adoption-search-form" method="post" action="">
                        <fieldset>
                            <ul>
                                <li>
                                    <label>Animal Type</label>
                                    <select name="animal-type" id="animal-type" onChange="filterList()">
                                        <option>All</option>
                                        <option>Dog</option>
                                        <option>Cat</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Age</label>
                                    <select name="age" id="age" onChange="filterList()">
                                        <option>All</option>
                                        <option>Kitten/Puppy</option>
                                        <option>Young</option>
                                        <option>Adult</option>
                                        <option>Senior</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Gender</label>
                                    <select name="gender" id="gender" onChange="filterList()">
                                        <option>All</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Location</label>
                                    <select name="location" id="location" onChange="filterList()">
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
                <section class="inner-content-section">
                    <div class="inner-content">
                        <div class="adoptable-pet-list" id="filterable-animal-list">
                            <PetListItem />
                        </div>
                    </div>
                </section>
            </main>
        )
    }

}

class PetListItem extends React.Component {
    render() {
        return (
            <div className="adoptable-pet-item">
                <a href="">
                    <img src="../../css/images/nacho1.jpg" />
                    <div class="adoptable-pet-info-container">
                        <div class="pet-info">
                            <h3>Nacho</h3>
                            <p class="breed">Bombay</p>
                            <p class="age">Adult</p>
                            <p class="gender">Male</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default PetAdoption;