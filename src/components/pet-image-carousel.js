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

    componentDidMount() {
        this.autoSlide();
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }

    autoSlide() {
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.SlideRight();
        }, 3000);
    }

    SlideRight() {
        this.autoSlide();
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
        this.autoSlide();
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
            <section className="main-top-contents">
                <div className="slideshow-container">
                    <LeftButton
                        SlideLeft={() => this.SlideLeft()}
                    />
                    <div className="slideshow-images">
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
            <div className="slideshow-btn prev"
                onClick={() => this.props.SlideLeft()}>
                <div>
                    <i className="fas fa-angle-left"></i>
                </div>
            </div>
        )
    }
}

class RightButton extends React.Component {
    render() {
        return (
            <div className="slideshow-btn next"
                onClick={() => this.props.SlideRight()}>
                <div>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}

export default PetImageCarousel;