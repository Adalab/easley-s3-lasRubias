import React, { Component } from 'react';
//import logo from './logo.svg';
import './scss/main.scss';
import logo from './images/descarga.svg';
import Footer from './components/Footer';
// import PropTypes from "prop-types";
import logoUndefined from './images/undefined-logo.svg';
import logoAdalab from './images/logo-adalab.svg';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-index">
          <a className="header-logo" href="index.html">
            <img className="logo_awesome" src={logo} />
          </a>
        </header>
        <main class="main__container">
         
          <Card />
        <Form />
        </main>

        <Footer 
            logoTeam={logoUndefined}
            logoAdalab={logoAdalab}
        />
      </div>

    );
  }
}

export default App;