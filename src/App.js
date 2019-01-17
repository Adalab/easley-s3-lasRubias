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
        'palette': '',
        'typography': '',
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
    this.update = this.update.bind(this);
  } 

  update(event) {
    console.log(event.target.value);
    const { value, name } = event.target;
   
    this.setState((prevState) => {
      return {
        dataObject: {
          ...prevState.dataObject, 
        [name]: value,
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Header logo={logo} />
        <main className="main__container">
          <Card data={this.state.dataObject}/>
          <Form 
          data={this.state.dataObject}
          formUpdate={this.update}
          />
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