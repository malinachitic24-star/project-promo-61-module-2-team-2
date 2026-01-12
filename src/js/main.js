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
const companyWork=document.querySelector('.work-company')
const parrafoWork=document.querySelector('.card-preview__subtitle.ja-business-sector')
const companyPhone=document.querySelector('.phone-company')
const parrafoPhone=document.querySelector('.js-phone')
const companyEmail=document.querySelector('.email-company')
const parrafoEmail=document.querySelector('.js-email')
const companyWeb=document.querySelector('.web-company')
const parrafoWeb=document.querySelector('.js-web')

companyName.addEventListener('input', function(){
    parrafoName.textContent=companyName.value || 'Nimalog';
});

companyWork.addEventListener('input', function(){
    parrafoWork.textContent=companyWork.value || 'Marketing';
});

companyPhone.addEventListener('input', function(){
    parrafoPhone.textContent=companyPhone.value || '911-234-567';
});

companyEmail.addEventListener('input', function(){
    parrafoEmail.textContent=companyEmail.value || 'nimalog@gmail.com';
});

companyWeb.addEventListener('input', function(){
    parrafoWeb.textContent=companyWeb.value || 'www.nimalog.com';
});

