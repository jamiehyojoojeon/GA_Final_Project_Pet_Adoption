import React from 'react';
import AboutUsContents from './about-us-contents';
import '../css/style.css';
import '../css/responsive.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <AboutUsContents />
            </div>
        )
    }
}

export default AboutUs;