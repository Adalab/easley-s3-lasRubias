import React from 'react';
import PropTypes from "prop-types";


class Form extends React.Component {
    render () {
        return (
          <section className="card__section2">
          <ul className="section2__list">
          <Collapsable/>
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
                        <div class="palette__dimensions palette__red--dark"></div>
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
        );
    }
}





export default Form;

