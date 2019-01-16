import React, { Component } from 'react';
// import PropTypes from "prop-types";

class Fonts extends Component {
    render() {
        return (
                <div className="fonts__container">
                    <div className="section2__design--titles">Fonts</div>
                    <div className="fontfamily__types">
                        <form id="font-form">
                            <label for="font__option--1" className="fontfamily__options">
                                <input checked={this.props.fonts === '1'} className="formdesign__circle" id="font__option--1" type="radio" value="Ubuntu"
                                    name="fontfamily__option" />
                                <span className="ubuntu">Ubuntu</span>
                            </label>
                            <label for="font__option--2" className="fontfamily__options">
                                <input checked={this.props.fonts === '2'} className="formdesign__circle" id="font__option--2" type="radio"
                                    value="Comic Sans" name="fontfamily__option" />
                                <span className="comic-sans">Comic Sans</span>
                            </label>
                            <label for="font__option--3" className="fontfamily__options">
                                <input checked={this.props.fonts === '3'} className="formdesign__circle" id="font__option--3" type="radio" value="Montserrat"
                                    name="fontfamily__option" />
                                <span className="montserrat">Montserrat</span>
                            </label>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Fonts;

