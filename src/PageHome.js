import React, { Component, Fragment } from 'react';
import logo from './images/descarga.svg';
import logoUndefined from './images/undefined-logo.svg';
import logoAdalab from './images/logo-adalab.svg';
import { Link } from 'react-router-dom';

class PageHome extends Component {
    render() {
        return (
            <Fragment>
                <header className="header-index">
                    <img className="logo_awesome" src={logo} alt="" />
                </header>
                <main className="main-index">
                    <div className="text_create-card">
                        <h1 className="h1-index">Create your visit card</h1>
                        <p className="p-index">Create better business contacts easily and comfortably.</p>
                    </div>
                    <nav className="nav-index">
                        <ul className="ul-index">
                            <li className="li-index">
                                <i className="fas fa-object-ungroup"></i>
                                <h2 className="h2-index">Design</h2>
                            </li>
                            <li className="li-index">
                                <i className="fas fa-keyboard"></i>
                                <h2 className="h2-index">Complete</h2>
                            </li>
                            <li className="li-index">
                                <i className="fas fa-share-alt"></i>
                                <h2 className="h2-index">Share</h2>
                            </li>
                        </ul>
                    </nav>
                    <div className="btn-start_center">
                        <Link to="/main">
                            <button className="btn-start">START</button>
                        </Link>
                    </div>
                </main>
                <footer className="footer-index @@footer">
                    <div className="copyright-index">Awesome profile cards @2018</div>
                    <div className="footer__logos">
                        <div className="footer__logo"><img className="logo-undefined" src={logoUndefined} alt="Undefined logo" /></div>
                        <a className="footer__logo" href="https://adalab.es/"><img className="logo-adalab" src={logoAdalab} alt="Adalab logo" /></a>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default PageHome;