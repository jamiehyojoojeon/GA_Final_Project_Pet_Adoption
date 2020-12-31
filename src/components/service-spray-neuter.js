import React from 'react';
import SprayNeuterContents from './spray-neuter-contents';
import '../css/style.css';
import '../css/responsive.css';

class SprayNeuter extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <SprayNeuterContents />
            </div>
        );
    }
}
export default SprayNeuter;