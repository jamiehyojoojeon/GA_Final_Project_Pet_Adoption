import React from 'react';
import PetAdoption from './pet-adoption';
import AdoptionProcess from './adoption-process';
import '../css/style.css';
import '../css/responsive.css';

class Adopt extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <PetAdoption />
                <AdoptionProcess />
            </div>
        )
    }
}

export default Adopt;