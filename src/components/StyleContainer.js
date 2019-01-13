import React, { Component } from 'react';
// import PropTypes from "prop-types";
import Palettes from './Palettes';
import Fonts from './Fonts';




class StyleContainer extends Component {
    render() {
        return (
            <div className="content">
                <Palettes />
                <Fonts />
            </div>
        );
    }
}

export default StyleContainer;

