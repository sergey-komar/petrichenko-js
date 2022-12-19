'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth; // ширина без использования маржинов и падингов
const height = box.clientHeight; // высота без использования маржинов и падингов

const widtH = box.scrollWidth; // ширина полная без полосы прокрутки 
const heighT = box.scrollHeight; // высота полная с учётом всех прокруток

btn.addEventListener('click',()=>{
    box.style.height = box.scrollHeight + 'px'; 
    // console.log(box.scrollTop);
    // console.log(box.scrollLeft);
})

console.log(box.getBoundingClientRect());//Получает все координаты

console.log(document.documentElement.scrollTop);//Правильно получение scrollTop

const style = window.getComputedStyle(box);// Стили которые применяются к данному елементу



