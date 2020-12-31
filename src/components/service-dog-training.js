import React from 'react';
import DogTrainingContents from './dog-training-contents';
import '../css/style.css';
import '../css/responsive.css';

class DogTraining extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <DogTrainingContents />
            </div>
        );
    }
}
export default DogTraining;
