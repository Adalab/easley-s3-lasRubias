import React, {Component} from 'react';
import logoUndefined from '../images/undefined-logo.svg';
import logoAdalab from '../images/logo-adalab.svg';


class Footer extends Component {
    render(){
        return (
        <footer className="footer-index @@footer">
          <div className="copyright-index">Awesome profile cards @2018</div>
          <div className="footer__logos">
            <div className="footer__logo">
                <img className="logo-undefined" src={logoUndefined} alt="Undefined logo" />
            </div>
            <a class="footer__logo" href="https://adalab.es/">
                <img className="logo-adalab" src={logoAdalab} alt="Adalab logo" />
            </a>
          </div>
        </footer>
        )
    }
}

export default Footer;