import React, { Component } from "react";

class Palettes extends Component {
    render() {
        return (
            <div className="section2__colors--wrapper">
                <div className="section2__design--titles">Colors</div>
                <form id="color-form">
                    <label htmlFor="palette__green" className="palette__green">
                        <input
                            onChange={this.props.handleColorChange}
                            className="formdesign__circle checkbox"
                            id="palette__green"
                            type="radio"
                            value="1"
                            name="palette__color"
                        />
                        <div className="palette__triple--box">
                            <div className="palette__dimensions palette__green--dark" />
                            <div className="palette__dimensions palette__green--medium" />
                            <div className="palette__dimensions palette__green--light" />
                        </div>
                    </label>
                    <label htmlFor="palette__red" className="palette__red">
                        <input
                            onChange={this.props.handleColorChange}
                            className="formdesign__circle checkbox"
                            id="palette__red"
                            type="radio"
                            value="2"
                            name="palette__color"
                        />
                        <div className="palette__triple--box">
                            <div class="palette__dimensions palette__red--dark" />
                            <div className="palette__dimensions palette__red--medium" />
                            <div className="palette__dimensions palette__red--light" />
                        </div>
                    </label>
                    <label htmlFor="palette__gray" className="palette__gray">
                        <input
                            onChange={this.props.handleColorChange}
                            className="formdesign__circle checkbox"
                            id="palette__gray"
                            type="radio"
                            value="3"
                            name="palette__color"
                        />
                        <div className="palette__triple--box">
                            <div className="palette__dimensions palette__gray--dark" />
                            <div className="palette__dimensions palette__gray--medium" />
                            <div className="palette__dimensions palette__gray--light" />
                        </div>
                    </label>
                </form>
            </div>
        );
    }
}

export default Palettes;
