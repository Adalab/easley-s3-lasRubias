import React, { Component } from 'react';
// import PropTypes from "prop-types";

class Palettes extends Component {

    render() {
        return (
               <div className="section2__colors--wrapper">
                    <div className="section2__design--titles">Colors</div>
                    <form id="color-form">
                        <label for="palette__green" className="palette__green">
                            <input checked={this.props.colors === '1'} className="formdesign__circle" id="palette__green" type="radio"
                                value="color__green" name="palette__color" />
                            <div className="palette__triple--box">
                                <div className="palette__dimensions palette__green--dark"></div>
                                <div className="palette__dimensions palette__green--medium"></div>
                                <div className="palette__dimensions palette__green--light"></div>
                            </div>
                        </label>
                        <label for="palette__red" className="palette__red">
                            <input checked={this.props.colors === '2'} className="formdesign__circle" id="palette__red" type="radio" value="color__red"
                                name="palette__color" />
                            <div className="palette__triple--box">
                                <div class="palette__dimensions palette__red--dark"></div>
                                <div className="palette__dimensions palette__red--medium"></div>
                                <div className="palette__dimensions palette__red--light"></div>
                            </div>
                        </label>
                        <label for="palette__gray" className="palette__gray">
                            <input  checked={this.props.colors === '3'}className="formdesign__circle" id="palette__gray" type="radio" value="color__gray"
                                name="palette__color" />
                            <div className="palette__triple--box">
                                <div className="palette__dimensions palette__gray--dark"></div>
                                <div className="palette__dimensions palette__gray--medium"></div>
                                <div className="palette__dimensions palette__gray--light"></div>
                            </div>
                        </label>
                    </form>
                </div>
        );
    }
}

export default Palettes;

