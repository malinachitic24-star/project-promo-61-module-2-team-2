'use strict';
//dropdown menu
const buttonDesign = document.querySelector('.menu__button-design');
const buttonForm = document.querySelector('.menu__button-form');

const menuDropdownDesign = document.querySelector('.menu__dropdown-design');
const menuDropdownForm = document.querySelector('.menu__dropdown-form');


buttonDesign.addEventListener('click', ()=>{
    menuDropdownDesign.classList.toggle('open')
})

buttonForm.addEventListener('click', ()=>{
    menuDropdownForm.classList.toggle('open')
})


//Formulario Rellena
const companyName=document.querySelector('.companyname');
const parrafoName=document.querySelector('.card-preview__title.js-name');
const companyWork=document.querySelector('.work-company');
const parrafoWork=document.querySelector('.card-preview__subtitle.ja-business-sector');
const companyPhone=document.querySelector('.phone-company');
const parrafoPhone=document.querySelector('.js-phone');
const companyEmail=document.querySelector('.email-company');
const parrafoEmail=document.querySelector('.js-email');
const companyWeb=document.querySelector('.web-company');
const parrafoWeb=document.querySelector('.js-web');

//Declaración formulario
const cardForm = document.querySelector('.complete');


//Objeto 
const cardData = {
  name: '',
  work: '',
  phone: '',
  email: '',
  rrss: '',
  palette: '',
  photo: ''
};


//Guardar en localStorage
function saveInStorage() {
  localStorage.setItem('cardData', JSON.stringify(cardData));
}

//Cargar desde localStorage
function loadFromStorage() {
  const storedData = localStorage.getItem('cardData');
  if (!storedData) {
    return;
  }

  //Coger los datos de localStorage y los pasa a cardData
  const parsedData = JSON.parse(storedData);
  cardData.name = parsedData.name || '';
  cardData.work = parsedData.work || '';
  cardData.phone = parsedData.phone || '';
  cardData.email = parsedData.email || '';
  cardData.rrss = parsedData.rrss || '';
  cardData.palette = parsedData.palette || '';
  cardData.photo = parsedData.photo || '';

  //Autorrellenar formulario
  companyName.value = cardData.name;
  companyWork.value = cardData.work;
  companyPhone.value = cardData.phone;
  companyEmail.value = cardData.email;
  companyWeb.value = cardData.rrss;

  //Autorrellenar preview
  parrafoName.textContent = cardData.name || 'Nimalog';
  parrafoWork.textContent = cardData.work || 'Marketing';
  parrafoPhone.textContent = cardData.phone || '911-234-567';
  parrafoEmail.textContent = cardData.email || 'nimalog@gmail.com';
  parrafoWeb.textContent = cardData.rrss || 'www.nimalog.com';

  //Autorrellenar imagen
  const profileImage = document.querySelector('.js__profile-image');
  const profilePreview = document.querySelector('.js__profile-preview');

  if (cardData.photo) {
    profileImage.style.backgroundImage = `url(${cardData.photo})`;
    profilePreview.style.backgroundImage = `url(${cardData.photo})`;
  }
}


companyName.addEventListener('input', function(){
    parrafoName.textContent=companyName.value || 'Nimalog';
    cardData.name = companyName.value;
    saveInStorage();
});

companyWork.addEventListener('input', function(){
    parrafoWork.textContent=companyWork.value || 'Marketing';
    cardData.work = companyWork.value;
    saveInStorage();
});

companyPhone.addEventListener('input', function(){
    parrafoPhone.textContent=companyPhone.value || '911-234-567';
    cardData.phone = companyPhone.value;
    saveInStorage();
});

companyEmail.addEventListener('input', function(){
    parrafoEmail.textContent=companyEmail.value || 'nimalog@gmail.com';
    cardData.email = companyEmail.value;
    saveInStorage();
});

companyWeb.addEventListener('input', function(){
    parrafoWeb.textContent=companyWeb.value || 'www.nimalog.com';
    cardData.rrss = companyWeb.value;
    saveInStorage();
});

// 1.a) choose design
const cardPreview = document.querySelector('.card-preview');
const paletteInputs = document.querySelectorAll('.js-palette');

const paletteClasses = [
  'card-preview--classic',
  'card-preview--classic-reverse',
  'card-preview--business',
  'card-preview--retro',
  'card-preview--delicate',
  'card-preview--cute',
];

function applyPalette(paletteValue) {
  cardPreview.classList.remove(...paletteClasses);
  cardPreview.classList.add(`card-preview--${paletteValue}`);

  cardData.palette = paletteValue;

  saveInStorage();
}

paletteInputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    const paletteValue = event.target.value;
    applyPalette(paletteValue);
  });
});

// //1.b) Choose design Local Storage
// const savedPalette = localStorage.getItem('palette');

// if (savedPalette) {
//   applyPalette(savedPalette);

//   const radioToCheck = document.querySelector(`.js-palette[value="${savedPalette}"]`);

//   if (radioToCheck) {
//     radioToCheck.checked = true;
//   }

// } else {
//   const checkedInput = document.querySelector('.js-palette:checked');

//   if (checkedInput) {
//     applyPalette(checkedInput.value);
//   }
// }

//
//1.c) Reset 
const resetButton = document.querySelector('.button-reset');

resetButton.addEventListener('click', () => {
  localStorage.removeItem ('cardData');
  location.reload();
}); 

//SUBMIT FORMULARIO
cardForm.addEventListener('submit', function (ev) {
  ev.preventDefault();
  console.log('submit ok');

  //Fetch
  fetch('https://dev.adalab.es/api/info/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    field1: Number(cardData.phone),
    field2: cardData.name,
    field3: cardData.work,
    field4: cardData.email,
    field5: cardData.rrss,
    field6: cardData.palette,
    photo: cardData.photo
  })
})

  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    if (data.success) {

      //Guardamos el infoID en uuid
      const uuid = data.infoID;
      console.log("Data success:", uuid);

      //Abrimos en una nueva página
      window.location.href = `card.html?id=${uuid}`;
    } else {
      console.log("Error en la creación de la tarjeta:", data.error); 
    }
  })

  .catch(function (error) {
    console.log('Error al enviar los datos:', error);
  });
});

loadFromStorage();

