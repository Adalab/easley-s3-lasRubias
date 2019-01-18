import React, { Component } from 'react';
// import PropTypes from "prop-types";
import Palettes from './Palettes';
import Fonts from './Fonts';




class StyleContainer extends Component {
    render() {
        // console.log(this.props);
        const colors = this.props.dataObject.palette;
        const fonts = this.props.dataObject.typography;
        // console.log(colors,  fonts);
        return (
            <div className="content">
                <Palettes 
                  colors={colors} 
                  handleColorChange={this.props.handleColorChange} 
                />
                <Fonts fonts={fonts} />
            </div>
        );
    }
}

export default StyleContainer;

