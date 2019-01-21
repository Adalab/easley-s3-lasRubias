import React, { Component } from "react";
import Palettes from "./Palettes";
import Fonts from "./Fonts";

class StyleContainer extends Component {
    render() {
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

export default StyleContainer;
