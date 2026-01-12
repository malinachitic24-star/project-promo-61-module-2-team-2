'use strict';

const cardNumber = document.querySelector('.card__number');
const cardTitle = document.querySelector('.card__title');
const cardText = document.querySelector('.card__text');
const cardPhoto = document.querySelector('.card__photo');

//Botones compartir
const shareTw = document.querySelector('.twitter');
const shareLIn = document.querySelector('.linkedin');
const shareWA = document.querySelector('.whatsapp');



// const container = document.querySelector('.saved-cards');

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
    console.log('Error al recibir los datos:', error);
  })
  }


  //COMPARTIR EN REDES
  const cardURL =  window.location.origin + "/card.html?id=" + id;
  const shareText = encodeURIComponent('¡Mira la tarjeta que he creado!');

  //Twitter
  shareTw.addEventListener('click', function() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${shareText}&url=${cardURL}`;
    window.open(twitterURL, '_blank');
  })

  //LinkedIn
  shareLIn.addEventListener('click', function() {
    const linkedinURL = `https://www.linkedin.com/shareArticle?url=${cardURL}`;
    window.open(linkedinURL, '_blank');
  })

  //WhatsApp
  shareWA.addEventListener('click', function() {
    const whatsappURL = `https://wa.me/?text=${shareText}%20${cardURL}`;
    window.open(whatsappURL, '_blank');
  })


// const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
// if (storedCards.length > 0 && container) {
//   storedCards.forEach(card => {
//     const div = document.createElement('div');
//     div.innerHTML = `
//       <img src="${card.photo}" alt="Foto">
//       <h3>${card.field2}</h3>
//       <p>${card.field3}</p>
//     `;
//     container.appendChild(div);
//   });
//   }