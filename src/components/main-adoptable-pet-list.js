import React from 'react';

class MainAdoptablePetList extends React.Component {
    render() {
        return (
            <section class="main-adoptable-pet">
                <div class="main-adoptable-pet-container">
                    <h1>Pets Available for Adoption</h1>
                    <ul class="main-adoptable-pet-list">
                        <li class="main-adoptable-pet-item one">
                            <a href="adopt/adopt-pet/pet/?id=0">
                                <img src="css/images/nacho1.jpg" alt="" />
                                <div class="adoptable-pet-info-container">
                                    <div class="pet-info">
                                        <h3>Nacho</h3>
                                        <p class="breed">Bombay</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="main-adoptable-pet-item two">
                            <a href="adopt/adopt-pet/pet/?id=1">
                                <img src="css/images/willy1.jpg" alt="" />
                                <div class="adoptable-pet-info-container">
                                    <div class="pet-info">
                                        <h3>Willy</h3>
                                        <p class="breed">American Staffordshire Terrier</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="main-adoptable-pet-item three">
                            <a href="adopt/adopt-pet/pet/?id=2">
                                <img src="css/images/hercules1.jpg" alt="" />
                                <div class="adoptable-pet-info-container">
                                    <div class="pet-info">
                                        <h3>Hercules</h3>
                                        <p class="breed">German Shepherd Mix</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="main-adoptable-pet-item four">
                            <a href="adopt/adopt-pet/pet/?id=3">
                                <img src="css/images/happy.jpg" alt="" />
                                <div class="adoptable-pet-info-container">
                                    <div class="pet-info">
                                        <h3>Happy</h3>
                                        <p class="breed">Domestic Short Hair</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="adoptable-pet-btn">
                        <a href="adopt/adopt-pet/index.html">
                            <h3>Meet more pets available</h3>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainAdoptablePetList;