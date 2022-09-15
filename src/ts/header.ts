"use strict";

// dependencies
import "./dependencies/types.ts"

// Header__burger
const header__burger: el = document.querySelector(".header__burger");
const mobileMenu: el = document.querySelector(".mobile-menu");
header__burger?.addEventListener("click", event => { header__burger.classList.toggle("header__burger_active"); mobileMenu?.classList.toggle("mobile-menu_active");} ); 

// Header animation
let lastYOffset: Number = 0;
const Header: el = document.querySelector('.header');
document.addEventListener("scroll", event => {
    if (lastYOffset >= window.pageYOffset) {
        console.log("up");
        Header?.classList.remove("header_active")
    } else {
        console.log("down");
        Header?.classList.add("header_active")
    }
    lastYOffset = window.pageYOffset
})


