import React from 'react';
import campusImage1 from '../css/images/footer-1.jpg';
import campusImage2 from '../css/images/footer-2.jpg';
import campusImage3 from '../css/images/footer-3.jpg';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <div className="footer-list">
                            <div className="footer-location duluth">
                                <h3>DULUTH CAMPUS</h3>
                                <img src={campusImage1}
                                    width="200" height="100" />
                            </div>
                            <div className="footer-location howellmill">
                                <h3>HOWELL MILL CAMPUS</h3>
                                <img src={campusImage2}
                                    width="200" height="100" />
                            </div>
                            <div className="footer-location mansell">
                                <h3>MANSELL CAMPUS</h3>
                                <img src={campusImage3} width="200"
                                    height="100" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-content-right">
                        <div className="social-media">
                            <h2 className="footer-h2">Connect With Us</h2>
                            <i className="social-icons fab fa-facebook-f fa-lg"></i>
                            <i className="social-icons fab fa-instagram fa-lg"></i>
                            <i className="social-icons fab fa-youtube fa-lg"></i>
                            <i className="social-icons fab fa-twitter fa-lg"></i>
                        </div>
                        <div className="rated-by">
                            <h2 className="footer-h2">Rated by</h2>
                            <img className="img1" src="https://atlantahumane.org/wp-content/uploads/2016/05/gximage2-platinum.png" />
                            <img className="img2"
                                src="https://secure2.convio.net/ahsoc/images/content/pagebuilder/charity-navigator-109x109.jpg"
                                width="auto" height="109" />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        Copyright
                        &copy;
                        2020 Jamie Jeon
            </p>
                </div>
            </footer>
        );
    }
}

export default Footer;