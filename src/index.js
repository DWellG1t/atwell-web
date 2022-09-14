// SCSS
import "./scss/index.scss";
// TS
import "./ts/header.ts";
import "./ts/index.ts";
// Images
import about from "./img/about.jpg"

function addImg() {
    // About us
    const About = document.querySelector(".about__img_img");
    About.src = `${about}`;
}
addImg()