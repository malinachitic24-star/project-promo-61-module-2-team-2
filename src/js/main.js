'use strict';
//dropdown menu
const buttonDesign = document.querySelector('.menu__button-design');
const buttonForm = document.querySelector('.menu__button-form');
const buttonShare = document.querySelector('.menu__button-share');

const menuDropdownDesign = document.querySelector('.menu__dropdown-design');
const menuDropdownForm = document.querySelector('.menu__dropdown-form');
const menuDropdownShare = document.querySelector('.menu__dropdown-share');


buttonDesign.addEventListener('click', ()=>{
    menuDropdownDesign.classList.toggle('open')
})

buttonForm.addEventListener('click', ()=>{
    menuDropdownForm.classList.toggle('open')
})

buttonShare.addEventListener('click', ()=>{
    menuDropdownShare.classList.toggle('open')
})

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
  localStorage.setItem('palette', paletteValue);
}

paletteInputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    const paletteValue = event.target.value;
    applyPalette(paletteValue);
  });
});

//1.b) Choose design Local Storage
const savedPalette = localStorage.getItem('palette');

if (savedPalette) {
  applyPalette(savedPalette);

  const radioToCheck = document.querySelector(`.js-palette[value="${savedPalette}"]`);

  if (radioToCheck) {
    radioToCheck.checked = true;
  }

} else {
  const checkedInput = document.querySelector('.js-palette:checked');

  if (checkedInput) {
    applyPalette(checkedInput.value);
  }
}

//1.c) Reset 
const resetButton = document.querySelector('.button-reset');

resetButton.addEventListener('click', () => {
  localStorage.removeItem ('palette');
  location.reload();
}); 

