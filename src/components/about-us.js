import React from 'react';
import Header from './header';
import Footer from './footer';
import AboutUsContents from './about-us-contents';
import '../css/style.css';
import '../css/responsive.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <AboutUsContents />
                <Footer />
            </div>
        )
    }
}

export default AboutUs;