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

//Formulario Rellena
const companyName=document.querySelector('.companyname')
const parrafoName=document.querySelector('.card-preview__title.js-name')

companyName.addEventListener('input', function(){
    parrafoName.textContent=companyName.value || 'Nimalog';
});
