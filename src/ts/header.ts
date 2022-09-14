"use strict";

// Header__burger
const header__burger = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
header__burger.addEventListener("click", event => { header__burger.classList.toggle("header__burger_active"); mobileMenu.classList.toggle("mobile-menu_active");} ); 


