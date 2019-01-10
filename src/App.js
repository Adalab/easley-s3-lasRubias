import React, { Component } from 'react';
//import logo from './logo.svg';
import './scss/main.scss';
import logo from './images/descarga.svg';
import Footer from './components/Footer';
// import PropTypes from "prop-types";
import logoUndefined from './images/undefined-logo.svg';
import logoAdalab from './images/logo-adalab.svg';

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

          <section class="card__section2">
            <ul class="section2__list">
              <li class="section2__list--collapsible first_block open">
                <div id="first_child" class="collapsible">
                  <h2 class="section2__list--h2"><i class="far fa-object-ungroup icon__card-page"></i> Design</h2>
                  <div><i class="fas fa-chevron-down icon__arrow--card-page"></i></div>
                </div>
                <div class="content">
                  <div class="section2__colors--wrapper">
                    <div class="section2__design--titles">Colors</div>
                    <form id="color-form">
                      <label for="palette__green" class="palette__green">
                        <input checked="checked" class="formdesign__circle" id="palette__green" type="radio"
                          value="color__green" name="palette__color" />
                        <div class="palette__triple--box">
                          <div class="palette__dimensions palette__green--dark"></div>
                          <div class="palette__dimensions palette__green--medium"></div>
                          <div class="palette__dimensions palette__green--light"></div>
                        </div>
                      </label>
                      <label for="palette__red" class="palette__red">
                        <input class="formdesign__circle" id="palette__red" type="radio" value="color__red"
                          name="palette__color" />
                        <div class="palette__triple--box">
                          <div class="palette__dimensions palette__red--dark"></div>
                          <div class="palette__dimensions palette__red--medium"></div>
                          <div class="palette__dimensions palette__red--light"></div>
                        </div>
                      </label>
                      <label for="palette__gray" class="palette__gray">
                        <input class="formdesign__circle" id="palette__gray" type="radio" value="color__gray"
                          name="palette__color" />
                        <div class="palette__triple--box">
                          <div class="palette__dimensions palette__gray--dark"></div>
                          <div class="palette__dimensions palette__gray--medium"></div>
                          <div class="palette__dimensions palette__gray--light"></div>
                        </div>
                      </label>
                    </form>
                  </div>

                  <div class="fonts__container">
                    <div class="section2__design--titles">Fonts</div>
                    <div class="fontfamily__types">
                      <form id="font-form">
                        <label for="font__option--1" class="fontfamily__options">
                          <input class="formdesign__circle" id="font__option--1" type="radio" value="Ubuntu"
                            name="fontfamily__option" />
                          <span class="ubuntu">Ubuntu</span>
                        </label>
                        <label for="font__option--2" class="fontfamily__options">
                          <input checked="checked" class="formdesign__circle" id="font__option--2" type="radio"
                            value="Comic Sans" name="fontfamily__option" />
                          <span class="comic-sans">Comic Sans</span>
                        </label>
                        <label for="font__option--3" class="fontfamily__options">
                          <input class="formdesign__circle" id="font__option--3" type="radio" value="Montserrat"
                            name="fontfamily__option" />
                          <span class="montserrat">Montserrat</span>
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li class="section2__list--collapsible second_block">
                <div id="second_child" class="collapsible">
                  <h2 class="section2__list--h2"><i class="fas fa-keyboard icon__card-page"></i> Complete</h2>
                  <div><i class="fas fa-chevron-down icon__arrow--card-page"></i></div>
                </div>
                <div class="content">
                  <form action="" id="form">
                    <div class="titles__complete-form"><label for="email">Full name</label></div>
                    <div><input class="section2__completeform--input" placeholder="Ex: Sally Hill" id="name-input"
                      type="text" name="name" required /></div>

                    <div class="titles__complete-form"><label for="email">Job position</label></div>
                    <div><input class="section2__completeform--input" placeholder="Ex: Front-end unicorn" id="job-input"
                      type="text" name="job" required /></div>

                    <div class="titles__complete-form"><label for="image">Profile image</label></div>
                    <div class="formcomplete__container--addimage">
                      <button class="button__add--image">Add image</button>
                      <input type="file" name="" id="img-selector" class="action__hiddenField" />
                      <div class="formcomplete__imagepreview profile__image"></div>
                    </div>

                    <div class="titles__complete-form"><label for="email">Email</label></div>
                    <div><input class="section2__completeform--input" placeholder="Ex: sally.hill@gmail.com" id="email-input"
                      type="email" name="email" required /></div>

                    <div class="titles__complete-form"><label for="telf_movil">Telephone number</label></div>
                    <div><input class="section2__completeform--input" placeholder="Ex: 555-55-55-55" id="telf_movil"
                      type="tel" name="telf_movil" pattern="^6[0-9]{8}$" required /></div>

                    <div class="titles__complete-form"><label for="email">LinkedIn</label></div>
                    <div><input class="section2__completeform--input" placeholder="Ex: linkedin.com/in/sally-hill"
                      id="linkedin-input" type="email" name="linkedin" required /></div>

                    <div class="titles__complete-form"><label for="email">GitHub</label></div>
                    <div><input class="section2__completeform--input" placeholder="Ex: github.com/sally-hill"
                      id="github-input" type="email" name="github" required /></div>

                    <div class="titles__complete-form"><label for="skills">Skills (max 3)</label></div>
                    <div id="container-checkboxes" class="titles__complete-form"></div>
                  </form>
                </div>
              </li>
              <li class="section2__list--collapsible third_block">
                <div id="third_child" class="collapsible">
                  <h2 class="section2__list--h2"><i class="fas fa-share-alt icon__card-page"></i> Share</h2>
                  <div><i class="fas fa-chevron-down icon__arrow--card-page"></i></div>
                </div>
                <div class="content button_container">
                  <button class="button__create-card">
                    <i class="far fa-id-card"></i>
                    <a> Create visit card</a>
                  </button>
                  <div class="create__mesage">
                    <div class="title__card--created">The card has been created</div>
                    <a class="title__card--link">Share the card with your friends!</a>
                    <button class="button__twitter">
                      <i class="fab fa-twitter"></i>
                      <a class="twitter"> Share on twitter</a>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </section>
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