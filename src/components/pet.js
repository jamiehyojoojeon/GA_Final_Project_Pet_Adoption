import React from 'react';
import { Link } from 'react-router-dom';
import PetInfoList from './pet-data'
import '../css/style.css';
import '../css/responsive.css';

class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbImageindex: 0
        }
    }

    ShowFullImage(index) {
        this.setState({
            thumbImageindex: index
        })
    }

    render() {
        let petID = parseInt(this.props.match.params.petID, 10);
        let petObj = PetInfoList[petID];
        if (petObj == undefined) {
            return (<h1>No Pet Found</h1>)
        } else {
            return (
                <main className="main-content">
                    <div className="go-back">
                        <div className="go-back-btn">
                            <Link to="/adopt/pet-adoption"><i className="fas fa-angle-left"></i> Pet Search</Link>
                        </div>
                    </div>
                    <section className="intro">
                        <div className="pet-image-box">
                            <div id="full-image-box">
                                <img id="full-image" src={petObj.images[this.state.thumbImageindex]} />
                            </div>
                            <div className="gallery" id="gallery">
                                {
                                    petObj.images.map((currentPetImage, index) => {
                                        return (
                                            // Single image
                                            <img src={currentPetImage} onClick={() => this.ShowFullImage(index)} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="pet-desc-box">
                            <h3>{petObj.name}</h3>
                            <div className="pet-desc-1">
                                <p>
                                    {petObj.desc}
                                </p>
                            </div>
                            <div className="pet-desc-2">
                                <p><span className="pet-desc-title">Breed :</span>
                                    <span>{petObj.breed}</span>
                                </p>
                                <p><span className="pet-desc-title">Life stage :</span>
                                    <span>{petObj.lifeStage}</span>
                                </p>
                                <p><span className="pet-desc-title">Gender :</span>
                                    <span>{petObj.gender}</span>
                                </p>
                                <p><span className="pet-desc-title">Location :</span>
                                    <span>{petObj.location}</span>
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            );
        }


    }
}

export default Pet;