import React from 'react';

class PetImageCarousel extends React.Component {
    render() {
        return (
            <section class="main-top-contents">
                <div class="slideshow-container">
                    <div class="slideshow-btn prev">
                        <div>
                            <i class="fas fa-angle-left"></i>
                        </div>
                    </div>
                    <div class="slideshow-images">
                        <img id="slideImages" src="" />
                    </div>
                    <div class="slideshow-btn next">
                        <div>
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PetImageCarousel;