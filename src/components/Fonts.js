import React, { Component } from "react";
import PropTypes from 'prop-types';

class Fonts extends Component {
   
    render() {
        
        return (
            <div className="fonts__container">
                <div className="section2__design--titles">Fonts</div>
                <div className="fontfamily__types">
                    <form id="font-form">
                        <label htmlFor="font__option--1" className="fontfamily__options">
                            <input
                                onChange={this.props.handleFontChange}
                                className="formdesign__circle checkbox"
                                id="font__option--1"
                                type="radio"
                                value="1"
                                name="fontfamily__option"
                            />
                            <span className="ubuntu">Ubuntu</span>
                        </label>
                        <label htmlFor="font__option--2" className="fontfamily__options">
                            <input
                                onChange={this.props.handleFontChange}
                                className="formdesign__circle checkbox"
                                id="font__option--2"
                                type="radio"
                                value="2"
                                name="fontfamily__option"
                            />
                            <span className="comic-sans">Comic Sans</span>
                        </label>
                        <label htmlFor="font__option--3" className="fontfamily__options">
                            <input
                                onChange={this.props.handleFontChange}
                                className="formdesign__circle checkbox"
                                id="font__option--3"
                                type="radio"
                                value="3"
                                name="fontfamily__option"
                            />
                            <span className="montserrat">Montserrat</span>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

Fonts.propTypes = {
    fonts: PropTypes.object.isRequired,
    handleFontChange: PropTypes.func.isRequired,
  };

export default Fonts;
