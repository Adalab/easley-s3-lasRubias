import React, { Component } from 'react';
//import logo from './logo.svg';
import './scss/main.scss';
import logo from './images/descarga.svg';
import logoUndefined from './images/undefined-logo.svg';
import logoAdalab from './images/logo-adalab.svg';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <header class="header-index">
          <a class="header-logo" href="index.html">
            <img class="logo_awesome" src={logo} />
          </a>
        </header>
        <main class="main__container">
          <section class="profile">
            <div class="profile__container">
              <button class="profile__action">
                <i class="far fa-trash-alt"></i>
                <span class="profile__action-text">Reset</span>
              </button>
              <div class="profile__data">
                <div class="profile__data-top">
                  <div class="profile__vertical-line"></div>
                  <div class="profile__data-group">
                    <div id="name" class="profile__name">Name Surname</div>
                    <div id="job-card" class="profile__profession">Job</div>
                  </div>
                </div>
                <div class="profile__picture-container profile__image">
                </div>
                <ul class="list_contact">
                  <li class="icon_border">
                    <a id="tel-card" class="icon-link" href="" target="_blank"><i class="fas fa-mobile-alt ico"></i></a>
                  </li>
                  <li class="icon_border">
                    <a id="email-card" class="icon-link" href="" target="_blank"><i class="far fa-envelope ico"></i></a>
                  </li>
                  <li class="icon_border">
                    <a id="linkedin-card" class="icon-link" href="" target="_blank"><i class="fab fa-linkedin-in ico"></i></a>
                  </li>
                  <li class="icon_border">
                    <a id="github-card" class="icon-link" href="" target="_blank"><i class="fab fa-github-alt ico"></i></a>
                  </li>
                </ul>
                <div class="border_bottom"></div>
                <ul id="container-checkboxes-card" class="list_skills"></ul>
              </div>
            </div>
          </section>
          
        <Form />
        </main>
        </div>


    );
  }
}

export default App;