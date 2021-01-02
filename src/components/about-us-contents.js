import React from 'react';
import '../css/style.css';
import '../css/responsive.css';
import aboutImage from "../css/images/about-ahs.jpg";
import aboutImage2 from "../css/images/about-ahs2.jpg";
import AboutPDF1 from "../css/images/1Heartbeat_July_Cover.jpg";
import AboutPDF2 from "../css/images/2Heartbeat_Feb_Cover.jpg";
import AboutPDF3 from "../css/images/3Heartbeat_Nov_Cover.jpg";
import AboutPDF4 from "../css/images/4Heartbeat_June_Cover.jpg";
import AboutPDF5 from "../css/images/5Heartbeat_Feb18_Cover.jpg";
import AboutPDF6 from "../css/images/6Heartbeat_Fall_Cover.jpg";
import AboutPDF7 from "../css/images/7Heartbeat_Summer_Cover.jpg";
import AboutPDF8 from "../css/images/8Heartbeat_Spring_Cover.jpg";

class AboutUsContents extends React.Component {
    render() {
        return (
            <main className="main-content">
                <section className="intro">
                    <h1>About AHS</h1>
                    <div className="about-img">
                        <img src={aboutImage} alt="" />
                    </div>
                    <p><strong>Our Heart’s Set on Animals</strong></p>
                    <p>
                        The Atlanta Humane Society is a no-kill shelter providing 60,000 direct points of care to animals
                        each
                        year through sheltering and adoption, veterinary care, and community outreach. We operate out of
                        three
                        locations in metro Atlanta and help find nearly 10,000 animals loving homes each year. As one of the
                        oldest charities in Atlanta, we have been caring for our community and her animals for more than 146
                        years.
                        </p>
                    <p>
                        We believe the relationship between humans and animals has deep significance, and we call on our
                        city
                        and each other to take action. Together we put up a united front against cruelty, neglect, and
                        displacement. With a heart to better lives, we connect homeless animals with good homes and
                        neglected
                        animals with safe spaces—uplifting our community by instilling compassion.
                        </p>
                    <p>
                        We’re proud to be able to work together with animal advocates, other animal welfare organizations,
                        and
                        our community partners to save lives.
                        </p>
                </section>
                <section className="inner-content">
                    <div className="about-us-container">
                        <div className="about-us-content">
                            <h3>Mission and Vision</h3>
                            <div className="mv-img">
                                <img src={aboutImage2} alt="" />
                            </div>
                            <div className="mv-p">
                                <p>
                                    <strong>The mission</strong> of the Atlanta Humane Society is to improve animal welfare
                                        in
                                        the southeastern United States by providing quality animal services including
                                        preventative
                                        initiatives, education, advocacy and adoption of animals into permanent loving homes.
                                    </p>
                                <p>
                                    <strong>The vision</strong> of the Atlanta Humane Society is to be the premier leader
                                        and
                                        organizational resource for the welfare and protection of companion animals in the
                                        southeastern United States.
                                    </p>
                            </div>

                        </div>
                        <div className="about-us-content">
                            <h3>The Heartbeat</h3>
                            <div className="mv-p">
                                <p>
                                    The Heartbeat is our supporter newsletter and is full of inspiring stories about the
                                    lifesaving work that is made possible thanks to our community’s support.
                                    </p>
                            </div>
                            <div className="heartbeat-img">
                                <nav>
                                    <ul>
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2019/10/AHS19-Heartbeat_Newsletter_July_r4_WebVersion.pdf"
                                            image={AboutPDF1}
                                            date="July, 2019 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2019/03/2019-02-AHS-Heartbeat-web.pdf"
                                            image={AboutPDF2}
                                            date="February, 2019 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="http://support.atlantahumane.org/site/DocServer/2018-11-AHS-Heartbeat-web-7.pdf?docID=481"
                                            image={AboutPDF3}
                                            date="November, 2018 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2018/06/AHS-Newsletter-2018-06-June-v1.pdf"
                                            image={AboutPDF4}
                                            date="June, 2018 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2018/02/AHS-Newsletter-2018-02-Feb-v1.pdf"
                                            image={AboutPDF5}
                                            date="February, 2018 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2017/12/AHS-NewsletterFall2017-for-web-v3.pdf"
                                            image={AboutPDF6}
                                            date="Fall 2017 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2017/09/2017-07-july-heartbeat-web-v1.pdf"
                                            image={AboutPDF7}
                                            date="Summer 2017 (PDF)"
                                        />
                                        <AboutUsPDFFile
                                            url="https://atlantahumane.org/wp-content/uploads/2012/09/2017-03-AHS-Newsletter-The-Heartbeat.pdf"
                                            image={AboutPDF8}
                                            date="Spring 2017 (PDF)"
                                        />
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        )
    }
}

class AboutUsPDFFile extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.url}>
                    <img src={this.props.image} />
                    <h4>{this.props.date}</h4>
                </a>
            </li>
        )
    }
}

export default AboutUsContents;