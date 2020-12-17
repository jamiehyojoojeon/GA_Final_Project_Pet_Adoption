import React from 'react';
import PetCarouselImage1 from '../css/images/pet-adoption1.jpg'
import PetCarouselImage2 from '../css/images/pet-adoption2.jpg'
import PetCarouselImage3 from '../css/images/pet-adoption3.jpg'

class PetImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [PetCarouselImage1, PetCarouselImage2, PetCarouselImage3],
            currentImage: 0,
        }
    }

    SlideRight() {
        let newIndex = this.state.currentImage + 1;
        if (newIndex >= this.state.images.length) {
            newIndex = 0;
        }
        this.setState({
            images: this.state.images,
            currentImage: newIndex,
        });
    }

    SlideLeft() {
        let newIndex = this.state.currentImage - 1;
        if (newIndex < 0) {
            newIndex = this.state.images.length - 1;
        }
        this.setState({
            images: this.state.images,
            currentImage: newIndex,
        });
    }

    render() {
        return (
            <section class="main-top-contents">
                <div class="slideshow-container">
                    <LeftButton
                        SlideLeft={() => this.SlideLeft()}
                    />
                    <div class="slideshow-images">
                        <img id="slideImages" src={this.state.images[this.state.currentImage]} />
                    </div>
                    <RightButton
                        SlideRight={() => this.SlideRight()}
                    />
                </div>
            </section>
        );
    }
}

class LeftButton extends React.Component {
    render() {
        return (
            <div class="slideshow-btn prev"
                onClick={() => this.props.SlideLeft()}>
                <div>
                    <i class="fas fa-angle-left"></i>
                </div>
            </div>
        )
    }
}

class RightButton extends React.Component {
    render() {
        return (
            <div class="slideshow-btn next"
                onClick={() => this.props.SlideRight()}>
                <div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}

export default PetImageCarousel;