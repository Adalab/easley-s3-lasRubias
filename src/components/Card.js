import React, { Component } from "react";
import "../scss/main.scss";
import PropTypes from 'prop-types';

class Card extends Component {
  
  chosenPalette() {
    const palette = this.props.data.palette;
    let colorCard = "";
    if (palette === 1) {
      colorCard = "green";
    } else if (palette === 2) {
      colorCard = "red";
    } else if (palette === 3) {
      colorCard = "gray";
    }
    return colorCard;
  }

  chosenFont() {
    const font = this.props.data.typography;
    let fontCard = "";
    if (font === 1) {
      fontCard = "font-ubuntu";
    } else if (font === 2) {
      fontCard = "font-comic";
    } else if (font === 3) {
      fontCard = "font-montserrat";
    }
    return fontCard;
  }

  render() {
    
    const { data, imageBg } = this.props;
   
    return (
      
      <section className="profile">
        <div className="profile__container">
          <button className="profile__action" onClick={this.props.reset}>
            <i className="far fa-trash-alt" />
            <span className="profile__action-text">Reset</span>
          </button>
          <div className={`profile__data ${this.chosenPalette()}`}>
            <div className="profile__data-top">
              <div className="profile__vertical-line" />
              <div className={`profile__data-group ${this.chosenFont()}`}>
                <div id="name" className="profile__name">
                  {data.name || "Name Surname"}
                </div>
                <div id="job-card" className="profile__profession">
                  {data.job || "Job"}
                </div>
              </div>
            </div>
            <div
              style={imageBg}
              className="profile__picture-container profile__image"
            />
            <ul className="list_contact">
              <li className="icon_border">
                <a
                  id="tel-card"
                  className="icon-link"
                  href={`tel:${data.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-mobile-alt ico" />
                </a>
              </li>
              <li className="icon_border">
                <a
                  id="email-card"
                  className="icon-link"
                  href={`mailto:${data.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope ico" />
                </a>
              </li>
              <li className="icon_border">
                <a
                  id="linkedin-card"
                  className="icon-link"
                  href={`https://www.linkedin.com/in/${data.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in ico" />
                </a>
              </li>
              <li className="icon_border">
                <a
                  id="github-card"
                  className="icon-link"
                  href={`https://github.com/${data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt ico" />
                </a>
              </li>
            </ul>
            <div className="border_bottom" />
            <ul id="container-checkboxes-card" className="list_skills">
              {data.skills.map(skill => (
                <li className="list_item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  imageBg: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired
};
export default Card;
