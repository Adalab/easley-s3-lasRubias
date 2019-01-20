import React, { Component } from "react";
// import PropTypes from "prop-types";
import Collapsable from "./Collapsable";
import StyleContainer from "./StyleContainer";
import ListSkills from "./ListSkills";

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCollapsible: 'first_block',
    }
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }

  handleCollapsible (event) {
      const selectedBlock = event.currentTarget;
      const classes = selectedBlock.classList;
      let openEl;

      if(classes.contains('first_block')){
        openEl = 'first_block';
      } else if (classes.contains('second_block')){
        openEl = 'second_block';
      } else if (classes.contains('third_block')){
        openEl = 'third_block';
      }

      this.setState({
        activeCollapsible: openEl
      })
  }

  render() {
    console.log(this.props);
    const dataObject = this.props.data;
    
    let open_first = false;
    let open_second = false;
    let open_third = false;

    if (this.state.activeCollapsible === 'first_block') {
      open_first = true;
    } else if (this.state.activeCollapsible === 'second_block'){
      open_second = true;
    } else if (this.state.activeCollapsible === 'third_block'){
      open_third = true;
    }

    return (
      <section className="card__section2">
        <ul className="section2__list">
          <Collapsable
            block="first_block"
            numberChild="first_child"
            icoSection="far fa-object-ungroup icon__card-page"
            titleSection="design"
            isOpen={open_first}
            isSelected={this.handleCollapsible}
          >
            <StyleContainer 
            dataObject={dataObject} 
            handleColorChange={this.props.handleColorChange}
            handleFontChange={this.props.handleFontChange}
            />
          </Collapsable>
          <Collapsable
            block="second_block"
            numberChild="second_child"
            icoSection="fas fa-keyboard icon__card-page"
            titleSection="complete"
            isOpen={open_second}
            isSelected={this.handleCollapsible}
          >
            <div className="content">
              <form action="" id="form">
                <div className="titles__complete-form">
                  <label for="email">Full name</label>
                </div>
                <div>
                  <input
                    onChange={this.props.formUpdate}
                    className="section2__completeform--input"
                    placeholder="Ex: Sally Hill"
                    id="name-input"
                    type="text"
                    name="name"
                    value={`${dataObject.name}`}
                    required
                  />
                </div>

                <div className="titles__complete-form">
                  <label for="email">Job position</label>
                </div>
                <div>
                  <input
                    onChange={this.props.formUpdate}
                    className="section2__completeform--input"
                    placeholder="Ex: Front-end unicorn"
                    id="job-input"
                    type="text"
                    name="job"
                    value={`${dataObject.job}`}
                    required
                  />
                </div>

                <div className="titles__complete-form">
                  <label for="image">Profile image</label>
                </div>
                <div className="formcomplete__container--addimage">
                  <button className="button__add--image">Add image</button>
                  <input
                    type="file"
                    name=""
                    id="img-selector"
                    className="action__hiddenField"
                  />
                  <div className="formcomplete__imagepreview profile__image" />
                </div>

                <div className="titles__complete-form">
                  <label for="email">Email</label>
                </div>
                <div>
                  <input
                    onChange={this.props.formUpdate}
                    className="section2__completeform--input"
                    placeholder="Ex: sally.hill@gmail.com"
                    id="email-input"
                    type="email"
                    name="email"
                    value={`${dataObject.email}`}
                    required
                  />
                </div>

                <div className="titles__complete-form">
                  <label for="telf_movil">Telephone number</label>
                </div>
                <div>
                  <input
                    onChange={this.props.formUpdate}
                    className="section2__completeform--input"
                    placeholder="Ex: 555-55-55-55"
                    id="telf_movil"
                    type="tel"
                    name="phone"
                    pattern="^6[0-9]{8}$"
                    value={`${dataObject.phone}`}
                    required
                  />
                </div>

                <div className="titles__complete-form">
                  <label for="email">LinkedIn</label>
                </div>
                <div>
                  <input
                    onChange={this.props.formUpdate}
                    className="section2__completeform--input"
                    placeholder="Ex: sally-hill"
                    id="linkedin-input"
                    type="email"
                    name="linkedin"
                    value={`${dataObject.linkedin}`}
                    required
                  />
                </div>

                <div className="titles__complete-form">
                  <label for="email">GitHub</label>
                </div>
                <div>
                  <input
                    onChange={this.props.formUpdate}
                    className="section2__completeform--input"
                    placeholder="Ex: sally-hill"
                    id="github-input"
                    type="email"
                    name="github"
                    value={`${dataObject.github}`}
                    required
                  />
                </div>

                <div className="titles__complete-form">
                  <label for="skills">Skills (max 3)</label>
                </div>
                <div
                  id="container-checkboxes"
                  className="titles__complete-form"
                  onChange={this.props.handleChange}
                >
                  <ul>
                    {this.props.skills.map(skill => (
                      <ListSkills skill={skill} />
                    ))}
                  </ul>
                </div>
              </form>
            </div>
          </Collapsable>

          <Collapsable
            block="third_block"
            numberChild="third_child"
            icoSection="fas fa-share-alt icon__card-page"
            titleSection="share"
            isOpen={open_third}
            isSelected={this.handleCollapsible}
          >
            <div className="content button_container">
              <button className="button__create-card">
                <i className="far fa-id-card" />
                <a> Create visit card</a>
              </button>
              <div className="create__mesage">
                <div className="title__card--created">
                  The card has been created
                </div>
                <a className="title__card--link">
                  Share the card with your friends!
                </a>
                <button className="button__twitter">
                  <i className="fab fa-twitter" />
                  <a className="twitter"> Share on twitter</a>
                </button>
              </div>
            </div>
          </Collapsable>
        </ul>
      </section>
    );
  }
}

export default Form;
