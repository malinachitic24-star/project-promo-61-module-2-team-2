'use strict';

//OBJETO
const cardData = {
  field1: '',
  field2: '',
  field3: '',
  field4: '',
  field5: '',
  photo: ''
};


//ELEMENTOS
const form = document.querySelector('.form');
const previewNumber = document.querySelector('.card__number');
const previewTitle = document.querySelector('.card__title');
const previewText = document.querySelector('.card__text');
const photoInput = document.querySelector('.js__profile-upload-btn');
const previewPhoto = document.querySelector('.card__photo');
const resetBtn = document.querySelector('.reset-btn');

//RESET
resetBtn.addEventListener('click', function() {
  localStorage.removeItem('cards');
  location.reload();
});

//CARGAR TARJETA DEL LOCALSTORAGE O CREAR ARRAY SI NO HAY
let storedCards = JSON.parse(localStorage.getItem('cards')) || [];
if (storedCards.length > 0) {
const lastCard = storedCards[storedCards.length - 1];
cardData.field1 = lastCard.field1;
cardData.field2 = lastCard.field2;
cardData.field3 = lastCard.field3;
cardData.field4 = lastCard.field4;
cardData.field5 = lastCard.field5;
cardData.photo = lastCard.photo;

updatePreview();

if (cardData.photo) {
  previewPhoto.src = cardData.photo;
}

}

// ACTUALIZAR OBJETO
form.addEventListener('input', function(ev) {
  const input = ev.target;

  if (input.name === 'field1') {
    cardData.field1 = input.value;
  }

  if (input.name === 'field2') {
    cardData.field2 = input.value;
  }

  if (input.name === 'field3') {
    cardData.field3 = input.value;
  }

  if (input.name === 'field4') {
    cardData.field4 = input.value;
  }

  if (input.name === 'field5') {
    cardData.field5 = input.value;}

  updatePreview();
});




//PREVIEW
function updatePreview() {
  previewNumber.textContent = cardData.field1;
  previewTitle.textContent = cardData.field2;
  previewText.textContent = cardData.field3;

}

//FORMULARIO
form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  // console.log('submit funciona');

  //Guardar tarjeta en array
  storedCards.push(cardData);
  localStorage.setItem('cards', JSON.stringify(storedCards))
  

  //POST
  fetch('https://dev.adalab.es/api/info/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(cardData),
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
      window.open(`card.html?id=${uuid}`, '_blank');
    } else {
      console.log("Error en la creación de la tarjeta:", data.error);
    }
  })

  .catch(function (error) {
    console.log('Error al enviar los datos:', error);
  });


  });