'use strict';

/* =========================
   DATOS DEL FORMULARIO
========================= */

const cardData = {
  field1: '',
  field2: '',
  field3: '',
  photo: ''
};

/* =========================
   ELEMENTOS DEL DOM
========================= */

const form = document.querySelector('.form');

const previewNumber = document.querySelector('.card__number');
const previewTitle = document.querySelector('.card__title');
const previewText = document.querySelector('.card__text');
const photoInput = document.querySelector('.js__profile-upload-btn');
const previewPhoto = document.querySelector('.card__photo');

/* =========================
   EVENTOS DEL FORMULARIO
========================= */

form.addEventListener('input', function(ev) {
  const input = ev.target;
  const name = input.name;
  const value = input.value;

  if (name != undefined && name != "") {
    cardData[name] = value;
    updatePreview();
  }
});



/* =========================
   PREVISUALIZACIÓN
========================= */

function updatePreview() {
  previewNumber.textContent = cardData.field1;
  previewTitle.textContent = cardData.field2;
  previewText.textContent = cardData.field3;

}


//YO
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log('submit funciona');

  })