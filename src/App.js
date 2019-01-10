import React, { Component } from 'react';
//import logo from './logo.svg';
import './scss/main.scss';
import logo from './images/descarga.svg';
import Footer from './components/Footer';
// import PropTypes from "prop-types";
import logoUndefined from './images/undefined-logo.svg';
import logoAdalab from './images/logo-adalab.svg';
<<<<<<< HEAD
import Form from './components/Form';
=======
import Card from './components/Card';
>>>>>>> 9ccd82a65cf24eca903c1a04ba200cd0eed8dd24

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-index">
          <a className="header-logo" href="index.html">
            <img className="logo_awesome" src={logo} />
          </a>
        </header>
<<<<<<< HEAD
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

=======
        <main className="main__container">
          <Card />

          <section className="card__section2">
            <ul className="section2__list">
              <li className="section2__list--collapsible first_block open">
                <div id="first_child" className="collapsible">
                  <h2 className="section2__list--h2"><i className="far fa-object-ungroup icon__card-page"></i> Design</h2>
                  <div><i className="fas fa-chevron-down icon__arrow--card-page"></i></div>
                </div>
                <div className="content">
                  <div className="section2__colors--wrapper">
                    <div className="section2__design--titles">Colors</div>
                    <form id="color-form">
                      <label for="palette__green" className="palette__green">
                        <input checked="checked" className="formdesign__circle" id="palette__green" type="radio"
                          value="color__green" name="palette__color" />
                        <div className="palette__triple--box">
                          <div className="palette__dimensions palette__green--dark"></div>
                          <div className="palette__dimensions palette__green--medium"></div>
                          <div className="palette__dimensions palette__green--light"></div>
                        </div>
                      </label>
                      <label for="palette__red" className="palette__red">
                        <input className="formdesign__circle" id="palette__red" type="radio" value="color__red"
                          name="palette__color" />
                        <div className="palette__triple--box">
                          <div className="palette__dimensions palette__red--dark"></div>
                          <div className="palette__dimensions palette__red--medium"></div>
                          <div className="palette__dimensions palette__red--light"></div>
                        </div>
                      </label>
                      <label for="palette__gray" className="palette__gray">
                        <input className="formdesign__circle" id="palette__gray" type="radio" value="color__gray"
                          name="palette__color" />
                        <div className="palette__triple--box">
                          <div className="palette__dimensions palette__gray--dark"></div>
                          <div className="palette__dimensions palette__gray--medium"></div>
                          <div className="palette__dimensions palette__gray--light"></div>
                        </div>
                      </label>
                    </form>
                  </div>

                  <div className="fonts__container">
                    <div className="section2__design--titles">Fonts</div>
                    <div className="fontfamily__types">
                      <form id="font-form">
                        <label for="font__option--1" className="fontfamily__options">
                          <input className="formdesign__circle" id="font__option--1" type="radio" value="Ubuntu"
                            name="fontfamily__option" />
                          <span className="ubuntu">Ubuntu</span>
                        </label>
                        <label for="font__option--2" className="fontfamily__options">
                          <input checked="checked" className="formdesign__circle" id="font__option--2" type="radio"
                            value="Comic Sans" name="fontfamily__option" />
                          <span className="comic-sans">Comic Sans</span>
                        </label>
                        <label for="font__option--3" className="fontfamily__options">
                          <input className="formdesign__circle" id="font__option--3" type="radio" value="Montserrat"
                            name="fontfamily__option" />
                          <span className="montserrat">Montserrat</span>
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li className="section2__list--collapsible second_block">
                <div id="second_child" className="collapsible">
                  <h2 className="section2__list--h2"><i className="fas fa-keyboard icon__card-page"></i> Complete</h2>
                  <div><i className="fas fa-chevron-down icon__arrow--card-page"></i></div>
                </div>
                <div className="content">
                  <form action="" id="form">
                    <div className="titles__complete-form"><label for="email">Full name</label></div>
                    <div><input className="section2__completeform--input" placeholder="Ex: Sally Hill" id="name-input"
                      type="text" name="name" required /></div>

                    <div className="titles__complete-form"><label for="email">Job position</label></div>
                    <div><input className="section2__completeform--input" placeholder="Ex: Front-end unicorn" id="job-input"
                      type="text" name="job" required /></div>

                    <div className="titles__complete-form"><label for="image">Profile image</label></div>
                    <div className="formcomplete__container--addimage">
                      <button className="button__add--image">Add image</button>
                      <input type="file" name="" id="img-selector" className="action__hiddenField" />
                      <div className="formcomplete__imagepreview profile__image"></div>
                    </div>

                    <div className="titles__complete-form"><label for="email">Email</label></div>
                    <div><input className="section2__completeform--input" placeholder="Ex: sally.hill@gmail.com" id="email-input"
                      type="email" name="email" required /></div>

                    <div className="titles__complete-form"><label for="telf_movil">Telephone number</label></div>
                    <div><input className="section2__completeform--input" placeholder="Ex: 555-55-55-55" id="telf_movil"
                      type="tel" name="telf_movil" pattern="^6[0-9]{8}$" required /></div>

                    <div className="titles__complete-form"><label for="email">LinkedIn</label></div>
                    <div><input className="section2__completeform--input" placeholder="Ex: linkedin.com/in/sally-hill"
                      id="linkedin-input" type="email" name="linkedin" required /></div>

                    <div className="titles__complete-form"><label for="email">GitHub</label></div>
                    <div><input className="section2__completeform--input" placeholder="Ex: github.com/sally-hill"
                      id="github-input" type="email" name="github" required /></div>

                    <div className="titles__complete-form"><label for="skills">Skills (max 3)</label></div>
                    <div id="container-checkboxes" className="titles__complete-form"></div>
                  </form>
                </div>
              </li>
              <li className="section2__list--collapsible third_block">
                <div id="third_child" className="collapsible">
                  <h2 className="section2__list--h2"><i className="fas fa-share-alt icon__card-page"></i> Share</h2>
                  <div><i className="fas fa-chevron-down icon__arrow--card-page"></i></div>
                </div>
                <div className="content button_container">
                  <button className="button__create-card">
                    <i className="far fa-id-card"></i>
                    <a> Create visit card</a>
                  </button>
                  <div className="create__mesage">
                    <div className="title__card--created">The card has been created</div>
                    <a className="title__card--link">Share the card with your friends!</a>
                    <button className="button__twitter">
                      <i className="fab fa-twitter"></i>
                      <a className="twitter"> Share on twitter</a>
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
>>>>>>> 9ccd82a65cf24eca903c1a04ba200cd0eed8dd24

    );
  }
}

export default App;