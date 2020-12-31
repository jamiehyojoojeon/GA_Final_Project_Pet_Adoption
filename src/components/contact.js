import React from 'react';
import ContactForm from './contact-form';
import '../css/style.css';
import '../css/responsive.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ContactForm />
            </div>
        );
    }
}

export default Contact;