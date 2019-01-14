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
    super(props);
    this.state = {
      skills: [],
    }
    this.getSkills();
  }

  getSkills() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(response => response.json())
      .then(dataSkills => this.setState(
        {
          skills: dataSkills.skills
        }
      ))
    }

  render() {
    return (
      <div>
        <Header logo={logo} />
        <main className="main__container">
          <Card />
          <Form
            skills={this.state.skills}
          />
        </main>
        <Footer
          logoTeam={logoUndefined}
          logoAdalab={logoAdalab}
        />
      </div >
    );
  }
}

export default App;