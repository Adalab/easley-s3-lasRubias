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


class App extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.state = {
      allSkills: [],
      dataObject: {
        ...defaultDataObject
      },
      shareBtnClass: "",
      linkTwitter: ""
    }
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
      .then( response => {
        const createdCardURL = response.cardURL;
        console.log(createdCardURL);
        let twitterHref = "";
        
        if(createdCardURL !== null) {
          twitterHref = twitterModel + createdCardURL;
        }
        this.setState({
          shareBtnClass: "add_height",
          linkTwitter: twitterHref
        })
      })

      .catch(err => console.log('error', err));
     
  }

/*   .then(res => res.json())
    .then(response => {

      cardLink.innerHTML = response.cardURL;

      tweetbutton.href = 'https://twitter.com/intent/tweet?text=I%20have%20created%20this%20card%20using%20Awesome%20Profile%20Card%20from%20undefined-team!%20✨' + response.cardURL + "✨" + "%20feeling%20more%20curious?%20👀If%20you%20are%20a%20junior%20front-end%20develop%20don't%20hesitate%20to%20improve%20our%20current%20code!👉👉👉" + "%20https://github.com/Adalab/easley-s2-undefined";
    }) */




  imageClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }

  writeImage() {
    const url = fr.result;
    this.setState((prevState) => {
      return {
        dataObject: {
          ...prevState.dataObject,
          photo: url
        }
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
      return {
        dataObject: {
          ...prevState.dataObject,
          palette: checkedColor
        }
      }
    })
  }

  handleFontChange(e) {
    const checkedFont = parseInt(e.currentTarget.value);
    this.setState((prevState) => {
      return {
        dataObject: {
          ...prevState.dataObject,
          typography: checkedFont
        }
      }
    })
  }


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
    if (this.state.dataObject.skills.length === 3) {
      event.target.checked = false;
    }
    this.setState((prevState) => {
      let auxList = prevState.dataObject.skills;
      let index = auxList.indexOf(skillValue);
      console.log(index);

      if (index > -1) {
        auxList.splice(index, 1);
      } else {
        if (auxList.length < 3) {
          auxList.push(skillValue);
        }
      }
      console.log(auxList);
      return {
        dataObject: {
          ...prevState.dataObject,
          skills: auxList
        }
      }
    })
    console.log('skills', defaultDataObject.skills);

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

  unCheck = () => {
    let checkEl = document.getElementsByClassName('checkbox');
    const myArray = Array.from(checkEl);
    myArray.map(el =>
      //console.log('ELEMENT', el);
      el.checked = false
    )
    //console.log('checkel', checkEl);
  }

  resetState() {
    this.unCheck();
    defaultDataObject.skills = [];
    this.setState({
      dataObject: {
        ...defaultDataObject
      }
    });
  }

  render() {
    return (
      <div>
        <Header logo={logo} />
        <main className="main__container">
          <Card
            data={this.state.dataObject}
            imageBg={{ backgroundImage: `url(${this.state.dataObject.photo})` }}
            reset={this.resetState}
          />
          <Form
            data={this.state.dataObject}
            skills={this.state.allSkills}
            handleChange={this.handleChange}
            formUpdate={this.update}

            //Here start props for image logic
            imageLoad={this.imageClick}
            handleImageChange={this.handleImageChange}
            refForInput={this.fileInput}
            imageBg={{ backgroundImage: `url(${this.state.dataObject.photo})` }}

            //Here start props for radiobuttons
            handleColorChange={this.handleColorChange}
            handleFontChange={this.handleFontChange}
            //Logic to create card and backend
            sendToBackend={this.sendToBackend}
            openShareBtn={this.state.shareBtnClass}
            linkTwitter={this.state.linkTwitter}
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

export default App;