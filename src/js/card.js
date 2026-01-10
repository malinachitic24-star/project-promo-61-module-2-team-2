'use strict';

const cardNumber = document.querySelector('.card__number');
const cardTitle = document.querySelector('.card__title');
const cardText = document.querySelector('.card__text');
const cardPhoto = document.querySelector('.card__photo');

//OBTENER UUID DE URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

  //GET
  if (id) {

  fetch(`https://dev.adalab.es/api/info/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if (data.success) {
    const cardData = data.data;

      cardNumber.textContent = cardData.field1;
      cardTitle.textContent = cardData.field2;
      cardText.textContent = cardData.field3;
      cardPhoto.src = cardData.photo;
    } else {
      console.error('Error al obtener la tarjeta:', data.error);
    }

  })

  .catch(function (error) {
    console.log('Error al recebir los datos:', error);
  })

  }else{
    console.log('No hay id');
  }