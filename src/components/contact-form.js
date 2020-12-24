import React from 'react';
import '../css/style.css';
import '../css/responsive.css';
import contactImage from '../css/images/contact-bg.jpg';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            ContactMessage: '',
            CommentMessage: '',
            FirstNameError: '',
            LastNameError: '',
            EmailError: '',
            ContactMessageError: '',
            CommentMessageError: ''
        };
    }

    updateFirstName(e) {
        let FirstNameError;
        if (e.target.value === '') {
            FirstNameError = 'First name is required';
        } else {
            FirstNameError = '';
        }

        this.setState({
            FirstName: e.target.value,
            FirstNameError: FirstNameError
        });
    }

    updateLastName(e) {
        let LastNameError;
        if (e.target.value === '') {
            LastNameError = 'Last name is required';
        } else {
            LastNameError = '';
        }

        this.setState({
            LastName: e.target.value,
            LastNameError: LastNameError,
        });
    }

    updateEmail(e) {
        let EmailError;
        if (e.target.value === '') {
            EmailError = 'Email is required';
        } else {
            EmailError = '';
        }

        this.setState({
            Email: e.target.value,
            EmailError: EmailError
        });
    }

    updateContactMessage(e) {
        let ContactMessageError;
        if (e.target.value.length < 10) {
            ContactMessageError = 'Text must be longer than 10 characters';
        } else {
            ContactMessageError = '';
        }

        this.setState({
            ContactMessage: e.target.value,
            ContactMessageError: ContactMessageError
        });
    }
    updateCommentMessageError(e) {
        let CommentMessageError;
        if (e.target.value.length < 15) {
            CommentMessageError = 'Text must be longer than 15 characters';
        } else {
            CommentMessageError = '';
        }

        this.setState({
            CommentMessage: e.target.value,
            CommentMessageError: CommentMessageError
        });
    }

    submitButton(e) {
        e.preventDefault();

        let FirstNameError;
        if (this.state.FirstName === '') {
            FirstNameError = 'First name is required';
        } else {
            FirstNameError = '';
        }

        let LastNameError;
        if (this.state.LastName === '') {
            LastNameError = 'Last name is required';
        } else {
            LastNameError = '';
        }

        let EmailError;
        if (this.state.Email === '') {
            EmailError = 'Email is required';
        } else {
            EmailError = '';
        }

        let ContactMessageError;
        if (this.state.ContactMessage.length < 10) {
            ContactMessageError = 'Text must be longer than 10 characters';
        } else {
            ContactMessageError = '';
        }

        let CommentMessageError;
        if (this.state.CommentMessage.length < 15) {
            CommentMessageError = 'Text must be longer than 15 characters';
        } else {
            CommentMessageError = '';
        }

        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            ContactMessage: '',
            CommentMessage: '',
            FirstNameError: FirstNameError,
            LastNameError: LastNameError,
            EmailError: EmailError,
            ContactMessageError: ContactMessageError,
            CommentMessageError: CommentMessageError
        })
    }

    render() {
        return (
            <main className="main-content">
                <section className="intro">
                    <h1>Contact Us</h1>
                    <p><strong>Please allow 2 business days for us to respond to you. If you have a time-sensitive question,
                    please call our Call Center. Our Call Center is open daily from 9 a.m. - 6 p.m. to take your
						calls.</strong></p>
                    <div className="contact">
                        <div className="contact-form">
                            <form method="post" action="">
                                <div className="fname row">
                                    <input value={this.state.FirstName} onChange={(e) => this.updateFirstName(e)} type="text" placeholder="First Name" />
                                    <div className="error">
                                        {this.state.FirstNameError}
                                    </div>
                                </div>
                                <div className="lname row">
                                    <input value={this.state.LastName} onChange={(e) => this.updateLastName(e)} type="text" placeholder="Last Name" />
                                    <div className="error">
                                        {this.state.LastNameError}
                                    </div>
                                </div>
                                <div className="email row">
                                    <input value={this.state.Email} onChange={(e) => this.updateEmail(e)} type="email" placeholder="Email" />
                                    <div className="error" >
                                        {this.state.EmailError}
                                    </div>
                                </div>
                                <div className="msg1 row">
                                    <textarea value={this.state.ContactMessage} onChange={(e) => this.updateContactMessage(e)} rows="2" cols="50"
                                        placeholder="What are you contacting us about?"></textarea>
                                    <div className="error" >
                                        {this.state.ContactMessageError}
                                    </div>
                                </div>
                                <div className="msg2 row">
                                    <textarea value={this.state.CommentMessage} onChange={(e) => this.updateCommentMessageError(e)} rows="4" cols="50"
                                        placeholder="Please provide your comments or questions."></textarea>
                                    <div className="error" >
                                        {this.state.CommentMessageError}
                                    </div>
                                </div>
                                <div>
                                    <input onClick={(e) => this.submitButton(e)} className="contact-submit" type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contact-img">
                        <img src={contactImage} />
                    </div>
                </section>
            </main>
        );
    }
}


export default ContactForm;