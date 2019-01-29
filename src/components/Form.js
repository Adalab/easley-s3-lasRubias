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

  handleCollapsible(event) {
    const selectedBlock = event.currentTarget;
    const classes = selectedBlock.classList;
    let openEl;
    if (classes.contains('first_block')) {
      openEl = 'first_block';
    } else if (classes.contains('second_block')) {
      openEl = 'second_block';
    } else if (classes.contains('third_block')) {
      openEl = 'third_block';
    }

    this.setState({
      activeCollapsible: openEl
    })
  }

  render() {
    const dataObject = this.props.data;
    const { imageLoad, handleImageChange, handleColorChange, handleFontChange, refForInput, imageBg, formUpdate, handleChange, openShareBtn, sendToBackend, linkShare, linkTwitter } = this.props;

    let open_first = false;
    let open_second = false;
    let open_third = false;

    if (this.state.activeCollapsible === 'first_block') {
      open_first = true;
    } else if (this.state.activeCollapsible === 'second_block') {
      open_second = true;
    } else if (this.state.activeCollapsible === 'third_block') {
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
              handleColorChange={handleColorChange}
              handleFontChange={handleFontChange}
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
                <div className="titles__complete-form"><label htmlFor="email">Full name</label></div>
                <div><input onChange={formUpdate} className="section2__completeform--input" placeholder="Ex: Sally Hill" id="name-input" type="text" name="name" value={`${dataObject.name}`} /></div>

                <div className="titles__complete-form"><label htmlFor="email">Job position</label></div>
                <div><input onChange={formUpdate} className="section2__completeform--input" placeholder="Ex: Front-end unicorn" id="job-input"
                  type="text" name="job" value={`${dataObject.job}`} /></div>

                <div className="titles__complete-form"><label htmlFor="image">Profile image</label></div>
                <div className="formcomplete__container--addimage">
                  <button onClick={imageLoad} className="button__add--image">Add image</button>
                  <input ref={refForInput} onChange={handleImageChange} type="file" name="" id="img-selector" className="action__hiddenField" />
                  <div style={imageBg} className="formcomplete__imagepreview profile__image"></div>
                </div>

                <div className="titles__complete-form"><label htmlFor="email">Email</label></div>
                <div><input onChange={formUpdate} className="section2__completeform--input" placeholder="Ex: sally.hill@gmail.com" id="email-input"
                  type="email" name="email" value={`${dataObject.email}`} /></div>

                <div className="titles__complete-form"><label htmlFor="telf_movil">Telephone number</label></div>
                <div><input onChange={this.props.formUpdate} className="section2__completeform--input" placeholder="Ex: 555-55-55-55" id="telf_movil"
                  type="tel" name="phone" pattern="^6[0-9]{8}$" value={`${dataObject.phone}`} /></div>

                <div className="titles__complete-form"><label htmlFor="email">LinkedIn</label></div>
                <div><input onChange={this.props.formUpdate} className="section2__completeform--input" placeholder="Ex: sally-hill"
                  id="linkedin-input" type="email" name="linkedin" value={`${dataObject.linkedin}`} /></div>

                <div className="titles__complete-form"><label htmlFor="email">GitHub</label></div>
                <div><input onChange={formUpdate} className="section2__completeform--input" placeholder="Ex: sally-hill"
                  id="github-input" type="email" name="github" value={`${dataObject.github}`} /></div>

                <div className="titles__complete-form"><label htmlFor="skills">Skills (max 3)</label></div>
                <div id="container-checkboxes" className="titles__complete-form">
                  <ul>
                    {this.props.skills.map((skill, i) => (
                      <ListSkills skill={skill} key={i} handleChange={handleChange} />
                    )
                    )}
                  </ul></div>
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
            openShareBtn={openShareBtn}
          >
            <div className="content button_container">
              <button className="button__create-card" onClick={sendToBackend}>
                <i className="far fa-id-card" />
                <span> Create visit card</span>
              </button>
              <div className="create__mesage">
                <div className="title__card--created">
                  The card has been created
                </div>
                <a className="title__card--link" href={linkShare} target="_blank" rel="noopener noreferrer">
                  {linkShare}
                </a>
                <button className="button__twitter">
                  <i className="fab fa-twitter" />
                  <a className="twitter" href={linkTwitter} target="_blank" rel="noopener noreferrer"> Share on twitter</a>
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
