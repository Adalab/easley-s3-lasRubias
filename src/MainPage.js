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

const fr = new FileReader();

const defaultDataObject = {
  'palette': {},
  'typography': {},
  'name': '',
  'job': '',
  'phone': '',
  'email': '',
  'linkedin': '',
  'github': '',
  'photo': '/static/media/default_picture.2a640627.jpg',
  'skills': []
}
const twitterModel = "https://twitter.com/intent/tweet?text=I%20have%20created%20this%20card%20using%20Awesome%20Profile%20Card%20from%20undefined-team!%20✨";


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkills: [],
      dataObject: this.getSavedData(),
      shareBtnClass: "",
      linkTwitter: "",
      linkShare: ""
    }
    this.fileInput = React.createRef();
    
    this.getSkills();
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
    this.resetState = this.resetState.bind(this);
    this.unCheck = this.unCheck.bind(this)
    //Here start binds for image logic
    this.imageClick = this.imageClick.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    //Here start binds for radiobuttons
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleFontChange = this.handleFontChange.bind(this);
    //Here starts binds for backend
    this.sendToBackend = this.sendToBackend.bind(this);
  }

  getSavedData() {
    const objectFromLocalStorage = localStorage.getItem('dataObject');

    if (objectFromLocalStorage !== null) {
      return JSON.parse(objectFromLocalStorage);
    } else {
      return defaultDataObject
    }
  }

  saveData(data) {
    localStorage.setItem('dataObject', JSON.stringify(data));
  }

  sendToBackend() {
    const backendUrl = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
    const dataFromObject = this.state.dataObject;
    fetch(backendUrl, {
      method: 'POST',
      body: JSON.stringify(dataFromObject),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw (res);
        }
        return res.json();
      })
      .then(response => {
        const createdCardURL = response.cardURL;
        let twitterHref = "";

        if (createdCardURL !== null) {
          twitterHref = twitterModel + createdCardURL;
        }
        this.setState({
          shareBtnClass: "add_height",
          linkTwitter: twitterHref,
          linkShare: createdCardURL
        })
      })
      .catch(err => console.log('error', err));

  }

  imageClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }

  writeImage() {
    const url = fr.result;
    this.setState((prevState) => {


      const newDataObject = {
        ...prevState.dataObject,
        photo: url
      };

      this.saveData(newDataObject);
      
      return {
        dataObject: newDataObject
      }
    })


  }

  handleImageChange(event) {
    const myImage = event.currentTarget.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myImage);
  }

  handleColorChange(e) {
    const checkedColor = parseInt(e.currentTarget.value);
    this.setState((prevState) => {

      const newDataObject = {
        ...prevState.dataObject,
        palette: checkedColor
      }

      this.saveData(newDataObject);
      
      return {
        dataObject: newDataObject
      }
    })
  }

  handleFontChange(e) {
    const checkedFont = parseInt(e.currentTarget.value);
    this.setState((prevState) => {

      const newDataObject = {
        ...prevState.dataObject,
        typography: checkedFont
      }

      this.saveData(newDataObject);
      
      return {
        dataObject: newDataObject
      }
    })
  }

  //fetch para obtener las skills
  getSkills() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then(response => response.json())
      .then(dataSkills => this.setState(
        {
          allSkills: dataSkills.skills
        }
      ))
  }

  //metodo para seleccionar y des-seleccionar las skills
  handleChange(event) {
    const skillValue = event.target.value;
    const { dataObject } = this.state;
    if (dataObject.skills.length === 3) {
      event.target.checked = false;
    }
    this.setState((prevState) => {
      let auxList = prevState.dataObject.skills;
      let index = auxList.indexOf(skillValue);

      if (index > -1) {
        auxList.splice(index, 1);
      } else {
        if (auxList.length < 3) {
          auxList.push(skillValue);
        }
      }

      const newDataObject = {
        ...prevState.dataObject,
        skills: auxList
      }

      this.saveData(newDataObject);

      return {
        dataObject: newDataObject
      }
    })
  }

  update(event) {
    const { value, name } = event.target;
    this.setState((prevState) => {

      const newDataObject = {
        ...prevState.dataObject,
        [name]: value,
      }

      this.saveData(newDataObject);

      return {
        dataObject: newDataObject
      }
    });
  }

  //resetar los inputs tipo check
  unCheck = () => {
    let checkEl = document.getElementsByClassName('checkbox');
    const myArray = Array.from(checkEl);
    myArray.map(el =>
      el.checked = false
    )
  }

  //resetear la tarjeta
  resetState() {
    this.unCheck();
    defaultDataObject.skills = [];
    localStorage.clear('dataObject');
    this.setState({
      dataObject: {
        ...defaultDataObject
      }
    });
  }

  render() {
    const { dataObject, allSkills, shareBtnClass, linkTwitter, linkShare } = this.state;
    return (
      <div>
        <Header logo={logo} />
        <main className="main__container">
          <Card
            data={dataObject}
            imageBg={{ backgroundImage: `url(${dataObject.photo})` }}
            reset={this.resetState}
          />
          <Form
            data={dataObject}
            skills={allSkills}
            handleChange={this.handleChange}
            formUpdate={this.update}

            //Here start props for image logic
            imageLoad={this.imageClick}
            handleImageChange={this.handleImageChange}
            refForInput={this.fileInput}
            imageBg={{ backgroundImage: `url(${dataObject.photo})` }}

            //Here start props for radiobuttons
            handleColorChange={this.handleColorChange}
            handleFontChange={this.handleFontChange}
            //Logic to create card and backend
            sendToBackend={this.sendToBackend}
            openShareBtn={shareBtnClass}
            linkTwitter={linkTwitter}
            linkShare={linkShare}
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

export default MainPage;