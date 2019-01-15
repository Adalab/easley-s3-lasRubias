import React, { Component } from 'react';

class Card extends Component {
    chosenPalette(){
        const palette = this.props.data.palette;
        let colorCard = "";
        if(palette==="1"){
            colorCard = "green";
        }else if (palette==="2"){
            colorCard = "red";
        }else{
            colorCard = "grey";
        }
        return colorCard;
    }

    chosenFont(){
        const font = this.props.data.typography;
        let fontCard = "";
        if(font==="1"){
            fontCard = "font-ubuntu";
        }else if (font==="2"){
            fontCard = "font-comic";
        }else{
            fontCard = "font-montserrat";
        }
        return fontCard;
    }
    
    render() {
        console.log(this.props);
        const {data} = this.props;
        return (
            <section className="profile">
                <div className="profile__container">
                    <button className="profile__action">
                        <i className="far fa-trash-alt"></i>
                        <span className="profile__action-text">Reset</span>
                    </button>
                    <div className={`profile__data ${this.chosenPalette()}`}>
                        <div className="profile__data-top">
                            <div className="profile__vertical-line"></div>
                            <div className={`profile__data-group ${this.chosenFont()}`}>
                                <div id="name" className="profile__name">{data.name}</div>
                                <div id="job-card" className="profile__profession">{data.job}</div>
                            </div>
                        </div>
                        <div className="profile__picture-container profile__image">
                        </div>
                        <ul className="list_contact">
                            <li className="icon_border">
                                <a id="tel-card" className="icon-link" href={`${data.phone}`} target="_blank"><i className="fas fa-mobile-alt ico"></i></a>
                            </li>
                            <li className="icon_border">
                                <a id="email-card" className="icon-link" href={`${data.email}`} target="_blank"><i className="far fa-envelope ico"></i></a>
                            </li>
                            <li className="icon_border">
                                <a id="linkedin-card" className="icon-link" href={`${data.linkedin}`} target="_blank"><i className="fab fa-linkedin-in ico"></i></a>
                            </li>
                            <li className="icon_border">
                                <a id="github-card" className="icon-link" href={`${data.github}`} target="_blank"><i className="fab fa-github-alt ico"></i></a>
                            </li>
                        </ul>
                        <div className="border_bottom"></div>
                        <ul id="container-checkboxes-card" className="list_skills"></ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Card;