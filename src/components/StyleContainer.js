import React, { Component } from "react";
import Palettes from "./Palettes";
import Fonts from "./Fonts";
import PropTypes from 'prop-types';

class StyleContainer extends Component {
    render() {
        console.log(this.props);
        const colors = this.props.dataObject.palette;
        const fonts = this.props.dataObject.typography;
        return (
            <div className="content">
                <Palettes
                    colors={colors}
                    handleColorChange={this.props.handleColorChange}
                />
                <Fonts 
                    fonts={fonts} 
                    handleFontChange={this.props.handleFontChange}
                />
            </div>
        );
    }
}

StyleContainer.propTypes ={
    block: PropTypes.string.isRequired,
    numberChild: PropTypes.string.isRequired,
    icoSection: PropTypes.string.isRequired,
}

export default StyleContainer;
