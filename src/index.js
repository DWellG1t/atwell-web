// SCSS
import "./scss/index.scss";
// TS
import "./ts/header.ts";
import "./ts/index.ts";
// Images
import about from "./img/about.jpg";
import slider from "./img/slider.jpg";
import back from "./img/back.jpg"

function addImg() {
    // Background
    const Back = document.querySelector(".back__img_img");
    Back.src = `${back}`
    // Slider 
    const Slider = document.querySelectorAll(".box__img_img");
    for(let el of Slider) 
        el.src = `${about}`;
    // About us
    const About = document.querySelector(".about__img_img");
    About.src = `${about}`;
    // Our service (4 images)
    const ServiceTable = document.querySelectorAll(".table__img_img");
    for(let el of ServiceTable) 
        el.src = `${about}`;
    // WhyWe
    const WhyWe = document.querySelectorAll(".block__img_img");
    for(let el of WhyWe) 
        el.src = `${about}`;
    // LastWork
    const LastWork = document.querySelectorAll(".lastWork__img_img");
    for(let el of LastWork) 
        el.src = `${about}`;
}
addImg()