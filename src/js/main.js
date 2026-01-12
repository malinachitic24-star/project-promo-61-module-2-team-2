'use strict';
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

// 1) Seleccionamos elementos del DOM
const cardPreview = document.querySelector('.card-preview');
const paletteInputs = document.querySelectorAll('.js-palette');

// 2) Lista de clases de paleta que controlamos (para poder limpiar bien)
const PALETTE_CLASSES = [
  'card-preview--classic',
  'card-preview--classic-reverse',
  'card-preview--business',
  'card-preview--retro',
  'card-preview--delicate',
  'card-preview--cute',
];

// 3) Función que aplica una paleta a la preview
function applyPalette(paletteValue) {
  // Quita cualquier paleta anterior
  cardPreview.classList.remove(...PALETTE_CLASSES);

  // Añade la nueva paleta (mismo nombre que el value del input)
  cardPreview.classList.add(`card-preview--${paletteValue}`);

  // Guardar en localStorage para mantener la selección al recargar (opcional pero útil)
  localStorage.setItem('palette', paletteValue);
}

// 4) Listener: cuando el usuario cambia el radio, aplicamos esa paleta
paletteInputs.forEach((input) => {
  input.addEventListener('change', (ev) => {
    applyPalette(ev.target.value);
  });
});

// 5) Al cargar la página: aplicar la paleta guardada (si existe) o la marcada por defecto
const savedPalette = localStorage.getItem('palette');

if (savedPalette) {
  applyPalette(savedPalette);

  // Marcamos el radio correspondiente si existe
  const radioToCheck = document.querySelector(`.js-palette[value="${savedPalette}"]`);
  if (radioToCheck) radioToCheck.checked = true;
} else {
  // Si no hay nada guardado, usa el checked del HTML
  const checkedInput = document.querySelector('.js-palette:checked');
  if (checkedInput) applyPalette(checkedInput.value);
}
