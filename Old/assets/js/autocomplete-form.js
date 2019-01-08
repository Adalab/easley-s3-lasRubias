'use strict';

// Update localStorage
const updateDataObject = (key, value) => dataObject[key] = value;
const updateLocalStorage = () => localStorage.setItem('dataObject', JSON.stringify(dataObject));

// Logic to complite the NAME:

let fullNameInput = document.body.querySelector('#name-input');
let fullNameLabel = document.body.querySelector('#name');


const updateFullName = (event) => {
  fullNameLabel.innerText = event.target.value;
  updateDataObject('name', event.target.value);
  updateLocalStorage();
};

fullNameInput.addEventListener('keyup', updateFullName);


// Logic to complite the JOB:

let jobPositionInput = document.body.querySelector('#job-input');
let jobPositionLabel = document.body.querySelector('#job-card');


const updateJobPosition = (event) => {
  jobPositionLabel.innerText = event.target.value;
  updateDataObject('job', event.target.value);
  updateLocalStorage();
};
jobPositionInput.addEventListener('keyup', updateJobPosition);


// Logic to complite the EMAIL:

let emailInput = document.body.querySelector('#email-input');
let emailLabel = document.querySelector('#email-card');

const updateEmail = (event) => {
  emailLabel.href = `mailto:${event.currentTarget.value}`;
  updateDataObject('email', event.currentTarget.value);
  updateLocalStorage();
};
emailInput.addEventListener('keyup', updateEmail);

// Logic to complite the TELEPHONE NUMBER 

let telInput = document.body.querySelector('#telf_movil');
let telLabel = document.querySelector('#tel-card');

const updateTelephone = (event) => {
  telLabel.href = `tel:${event.currentTarget.value}`;
  updateDataObject('phone', event.currentTarget.value);
  updateLocalStorage();
};

telInput.addEventListener('keyup', updateTelephone);

// Here starts LinkedIn JavaScript:

let linkedinInput = document.body.querySelector('#linkedin-input');
let linkedinLabel = document.querySelector('#linkedin-card');

const updateLinkedin = (event) => {
  linkedinLabel.href = `https://www.${event.currentTarget.value}`;
  updateDataObject('linkedin', event.currentTarget.value);
  updateLocalStorage();
};

linkedinInput.addEventListener('keyup', updateLinkedin);

// Logic to complite the GitHub:

let githubInput = document.body.querySelector('#github-input');
let githubLabel = document.querySelector('#github-card');

const updateGithub = (event) => {
  githubLabel.href = `https://${event.currentTarget.value}`;
  updateDataObject('github', event.currentTarget.value);
  updateLocalStorage();
};
githubInput.addEventListener('keyup', updateGithub);

//Color palette

let inputGreen = document.querySelector('#palette__green');
let inputRed = document.querySelector('#palette__red');
let inputGray = document.querySelector('#palette__gray');

function savePalette() {
  if (inputGreen.checked === true) {
    console.log('green');
    dataObject.palette = '1';
    updateDataObject('palette', '1');
  } else if (inputRed.checked === true) {
    console.log('red');
    dataObject.palette = '2';
    updateDataObject('palette', '2');
  } else if (inputGray.checked === true) {
    console.log('gray');
    dataObject.palette = '3';
    updateDataObject('palette', '3');
  } else {
    console.log('green');
  }
  updateLocalStorage();
}
inputGreen.addEventListener('click', savePalette);
inputRed.addEventListener('click', savePalette);
inputGray.addEventListener('click', savePalette);

//Typography

let inputUbuntu = document.querySelector('#font__option--1');
let inputComicSans = document.querySelector('#font__option--2');
let inputMontserrat = document.querySelector('#font__option--3');

function saveTypography() {
  if (inputUbuntu.checked === true) {
    console.log('ubuntu');
    dataObject.typography = 'u';
    updateDataObject('typography', 'u');
  } else if (inputComicSans.checked === true) {
    console.log('ComicSans');
    dataObject.typography = 'c';
    updateDataObject('typography', 'c');
  } else if (inputMontserrat.checked === true) {
    console.log('Montserrat');
    dataObject.typography = 'm';
    updateDataObject('typography', 'm');
  } else {
    console.log('ComicSans');
  }
  updateLocalStorage();
}
inputUbuntu.addEventListener('click', saveTypography);
inputComicSans.addEventListener('click', saveTypography);
inputMontserrat.addEventListener('click', saveTypography);



// Logic to complite the SKILLS:

let skillsList = document.querySelector('#container-checkboxes');
let skillsCard = document.querySelector('#container-checkboxes-card');

let skills = [];

const updateSkills = () => {
  let counter = 0;
  let MAX_SKILLS = 3;
  let skillsDataForLocalStorage = [];
  let checkboxListItems = skillsList.querySelectorAll('li');

  skillsCard.innerHTML = '';
  for (const checkboxListItem of checkboxListItems) {
    let checkbox = checkboxListItem.querySelector('input');
    if (counter < MAX_SKILLS && checkbox.checked) {
  

      let cardListItemElem = document.createElement('li');
      cardListItemElem.classList.add('list_item');

      let cardListItemContent = document.createTextNode(`${checkboxListItem.textContent}`);
      cardListItemElem.appendChild(cardListItemContent);
      skillsDataForLocalStorage.push(checkbox.value);

      skillsCard.appendChild(cardListItemElem);
      counter++;

      // Condition for keep the same tags color
      if (dataObject.palette === '1') {
        cardListItemElem.classList.add('green');
      } else if (dataObject.palette === '2') {
        cardListItemElem.classList.add('red');
      } else if (dataObject.palette === '3') {
        cardListItemElem.classList.add('gray');
      }
      
    } else {
      checkbox.checked = false;
    }
  }
  updateDataObject('skills', skillsDataForLocalStorage);
  updateLocalStorage();
};

const init = () => {
  let localStorageSkills = dataObject['skills'];

  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      let skillsArr = data.skills;
      console.log(skillsArr);
      let skillsList = document.querySelector('#container-checkboxes');

      // Reseteamos contenido de lista de skills
      skillsList.innerHTML = '';

      // Print de las skills en el FORMULARIO
      for (let i = 0; i < skillsArr.length; i++) {
        // Objeto de skill
        let currentSkill = skillsArr[i];

        console.log(currentSkill);

        // Creamos un elemento <li> 
        let listItemElem = document.createElement('li');

        // Para poner checkbox delante de cada skill
        let listItemCheckbox = document.createElement('input');
        listItemCheckbox.type = 'checkbox';
        listItemCheckbox.value = currentSkill;
        listItemCheckbox.addEventListener('click', updateSkills);

        // Determinamos si el nombre de la skill actual está en la lista almacenada en el array del localStorage
        // Si la skill no está, indexOf devolverá -1. Si está, devolverá un número distinto de -1, que será la posición
        // en el array de dicho skill.
        if (localStorageSkills.indexOf(currentSkill) !== -1) {
          listItemCheckbox.checked = true;
        } else {
          listItemCheckbox.checked = false;
        }

        listItemElem.appendChild(listItemCheckbox);
        listItemElem.style = `list-style-type: none; margin-left: 6px;`; // Para quitar el punto de cada 'li' que sale por defecto.

        // Añadimos el nombre de la skill como texto hijo del <li>
        let listItemContent = document.createTextNode(`${currentSkill}`);
        listItemElem.appendChild(listItemContent);

        // Finalmente, añadimos el <li> a la lista
        skillsList.appendChild(listItemElem);
      }
    });
};


// Here starts the API call

//Logic to post in backend the data from page
let url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
let button = document.querySelector('.button__create-card');
const cardLink = document.querySelector('.title__card--link');
const tweetbutton = document.querySelector('.twitter');

function apiCall(json) {
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(dataObject), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(response => {

      cardLink.innerHTML = response.cardURL;

      tweetbutton.href = 'https://twitter.com/intent/tweet?text=I%20have%20created%20this%20card%20using%20Awesome%20Profile%20Card%20from%20undefined-team!%20✨' + response.cardURL + "✨" + "%20feeling%20more%20curious?%20👀If%20you%20are%20a%20junior%20front-end%20develop%20don't%20hesitate%20to%20improve%20our%20current%20code!👉👉👉" + "%20https://github.com/Adalab/easley-s2-undefined";
    })
    .catch(error => console.error('Error:', error));
}

button.addEventListener('click', apiCall);


//Function to read Local Storage and fill the page
const colorForName = document.querySelector('.profile__data');
const fontForName = document.querySelector('.profile__data-group');
const getLocalStorage = () => {
  let myLocalStorage = localStorage.getItem('dataObject');
  let myLocalStorageObject = JSON.parse(myLocalStorage);

  if (myLocalStorageObject !== null) {

    dataObject = myLocalStorageObject;

    fullNameInput.value = dataObject.name;
    fullNameLabel.innerHTML = dataObject.name;

    jobPositionLabel.innerHTML = dataObject.job;
    jobPositionInput.value = dataObject.job;

    if (dataObject.name === '') {
      fullNameLabel.innerText = 'Name Surname';
    }
    if (dataObject.job === '') {
      jobPositionLabel.innerText = 'Job';
    }

    if (dataObject.typography === 'c') {
      fontForName.classList.add('font-comic');
      fontForName.classList.remove('font-montserrat','font-ubuntu');
      inputComicSans.checked = true;
    } else if (dataObject.typography === 'm') {
      fontForName.classList.add('font-montserrat');
      fontForName.classList.remove('font-comic', 'font-ubuntu');
      inputMontserrat.checked = true;
    } else if (dataObject.typography === 'u') {
      fontForName.classList.add('font-ubuntu');
      fontForName.classList.remove('font-montserrat', 'font-comic');
      inputUbuntu.checked = true;
    }

    if (dataObject.palette === '1') {
      colorForName.classList.add('green');
      colorForName.classList.remove('red', 'gray');
      inputGreen.checked = true;
    } else if (dataObject.palette === '2') {
      colorForName.classList.add('red');
      colorForName.classList.remove('gray', 'green');
      inputRed.checked = true;
    } else if (dataObject.palette === '3') {
      colorForName.classList.add('gray');
      colorForName.classList.remove('red', 'green');
      inputGray.checked = true;
    }



    emailInput.value = dataObject.email;
    emailLabel.href = dataObject.email;

    linkedinInput.value = dataObject.linkedin;
    linkedinLabel.href = dataObject.linkedin;

    telInput.value = dataObject.phone;
    telLabel.href = dataObject.phone;

    githubInput.value = dataObject.github;
    githubLabel.href = dataObject.github;

    if (dataObject.photo !== '') {
      for (const cardImage of profileImages) {
        cardImage.style.backgroundImage = `url(${dataObject.photo})`;
      }
    }

    // Get skills list from localstorage
    const chosenSkillsList = document.querySelector('.list_skills');
    const chosenSkillsArray = dataObject.skills;
    for (const eachChosenSkill of chosenSkillsArray) {
      let cardListItemElem = document.createElement('li');
      cardListItemElem.classList.add('list_item');
      const putstuffinside = document.createTextNode(`${eachChosenSkill}`);
      cardListItemElem.appendChild(putstuffinside);
      chosenSkillsList.appendChild(cardListItemElem);
      if (dataObject.palette === '1') {
        cardListItemElem.classList.add('green');
      } else if (dataObject.palette === '2') {
        cardListItemElem.classList.add('red');
      } else if (dataObject.palette === '3') {
        cardListItemElem.classList.add('gray');
      }
    }
  }
}

getLocalStorage();
init();


//Function to handle reset button
const resetBtn = document.querySelector('.profile__action');
const form = document.querySelector('#form');
const colorForm = document.querySelector('#color-form');
const fontForm = document.querySelector('#font-form');
const containerSkills = document.querySelector('#container-checkboxes-card');
console.log('lista', containerSkills);
const resetAll = () => {
  dataObject = {
    'palette': '',
    'typography': '',
    'name': '',
    'job': '',
    'phone': '',
    'email': '',
    'linkedin': '',
    'github': '',
    'photo': '',
    'skills': ['', '', '']
  };
  updateLocalStorage();
  cardLink.innerHTML = 'Share the card with your friends!';
  tweetbutton.href = '';
  form.reset();
  colorForm.reset();
  fontForm.reset();
  colorForName.classList.add('green');
  colorForName.classList.remove('red', 'gray');
  fontForName.classList.add('font-comic');
  fontForName.classList.remove('font-montserrat','font-ubuntu');
  fullNameLabel.innerText = 'Name Surname';
  jobPositionLabel.innerText = 'Job';
  profileImages[0].style.backgroundImage = dataObject.photo;
  profileImages[1].style.backgroundImage = dataObject.photo;
  containerSkills.innerHTML = '';
};
resetBtn.addEventListener('click', resetAll);
