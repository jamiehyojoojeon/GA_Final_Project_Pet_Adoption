import React from 'react';
import Header from './header';
import Footer from './footer';
import ContactForm from './contact-form';
import '../css/style.css';
import '../css/responsive.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default Contact;