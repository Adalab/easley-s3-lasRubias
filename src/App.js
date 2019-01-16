import React, { Component } from 'react';
import './scss/main.scss';
import logo from './images/descarga.svg';
import Footer from './components/Footer';
// import PropTypes from "prop-types";
import logoUndefined from './images/undefined-logo.svg';
import logoAdalab from './images/logo-adalab.svg';
import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataObject: {
        'palette': '2',
        'typography': '1',
        'name': '',
        'job': '',
        'phone': '',
        'email': '',
        'linkedin': '',
        'github': '',
        'photo': '',
        'skills': ['', '', '']
      }
    }
  } 
  render() {
    return (
      <div>
        <Header logo={logo} />
        <main className="main__container">
          <Card data={this.state.dataObject}/>
          <Form data={this.state.dataObject}/>
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