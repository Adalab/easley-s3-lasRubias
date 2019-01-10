import React from 'react';
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return (
            <header className="header-index">
                <a className="header-logo" href="index.html">
                    <img className="logo_awesome" src={this.props.logo} />
                </a>
            </header>
        );
    }
}

Header.propTypes = {
    logo: PropTypes.string.isRequired
};
export default Header;