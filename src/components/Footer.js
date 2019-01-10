import React, {Component} from 'react';
import PropTypes from "prop-types";


class Footer extends Component {
    render(){
        return (
        <footer className="footer-index @@footer">
          <div className="copyright-index">Awesome profile cards @2018</div>
          <div className="footer__logos">
            <div className="footer__logo">
                <img className="logo-undefined" src={this.props.logoTeam} alt="Undefined logo" />
            </div>
            <a class="footer__logo" href="https://adalab.es/">
                <img className="logo-adalab" src={this.props.logoAdalab} alt="Adalab logo" />
            </a>
          </div>
        </footer>
        )
    }
}

Footer.PropTypes ={
    logoTeam: PropTypes.string.isRequired,
    logoAdalab: PropTypes.string.isRequired
}
export default Footer;