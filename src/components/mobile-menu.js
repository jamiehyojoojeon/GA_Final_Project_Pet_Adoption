import React from 'react';
import '../css/style.css';
import '../css/responsive.css';

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMobileMenu: false,
        }
    }

    switchMobileMenu() {
        this.state({
            displayMobileMenu: !this.state.displayMobileMenu,
        })
    }

    render() {
        return (
            <span></span>
        )
    }
}

export default MobileMenu;
