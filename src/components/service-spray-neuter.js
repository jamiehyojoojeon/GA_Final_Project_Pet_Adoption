import React from 'react';
import Header from './header';
import Footer from './footer';
import '../css/style.css';
import '../css/responsive.css';

class SprayNeuter extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />

                <Footer />
            </div>
        );
    }
}
export default SprayNeuter;