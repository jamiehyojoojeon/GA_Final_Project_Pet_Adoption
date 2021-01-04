import React from 'react';
import { Link } from 'react-router-dom';

class MainIntroContent extends React.Component {
    render() {
        return (
            <div className="section-background">
                <section className="main-more-info">
                    <div className="left-info">
                        <h1>Welcome</h1>
                        <iframe className="main-video" width="560" height="315" src="https://www.youtube.com/embed/EaJokxMeF_E"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="right-info">
                        <h1>About AHS</h1>
                        <p className="main-about-us">
                            The Atlanta Humane Society is a no-kill shelter serving more than 30,000 of
                            Atlanta’s animals each year through various services. We stand strong today, as we have for more than
                            146
                years, in defense of the vulnerable.<br />
                  We believe the relationship between humans and animals has deep significance, and we call on our city
                  and
                  each other to take action. Together we put up a united front against cruelty, neglect, and
                  displacement.
                  With a heart to better lives, we connect homeless animals with good homes and neglected animals with
                  safe
                  spaces—uplifting our community by instilling compassion.
                  <Link className="dot-color" to="/about-us">
                                [...]
                  </Link>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainIntroContent;