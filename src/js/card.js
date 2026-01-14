'use strict';

const imageApi = document.querySelector('.js__profile-image');
const nameApi = document.querySelector('.js-name');
const workApi = document.querySelector('.js-work');
const phoneApi = document.querySelector('.js-phone');
const emailApi = document.querySelector('.js-email');
const webApi = document.querySelector('.js-web');


//Botones compartir
const shareTw = document.querySelector('.twitter');
const shareLIn = document.querySelector('.linkedin');
const shareWA = document.querySelector('.whatsapp');


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

      //Datos
      phoneApi.textContent = cardData.field1;
      nameApi.textContent = cardData.field2;
      workApi.textContent = cardData.field3;
      emailApi.textContent = cardData.field4;
      webApi.textContent = cardData.field5;

      imageApi.style.backgroundImage = `url(${cardData.photo})`;

      //Paleta
      const cardPreview = document.querySelector('.card-preview');
      cardPreview.classList.add(`card-preview--${cardData.field6}`);
      
          } else {
      console.error('Error al obtener la tarjeta:', data.error);
    }

  })

  .catch(function (error) {
    console.log('Error al recibir los datos:', error);
  })
  }


  //COMPARTIR EN REDES
  if (id) {
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
    }



