"use strict";

// dependencies
import "./dependencies/types.ts"

// slider
const sliderBoxArr = document.querySelectorAll(".slider__box");
const sliderMenuArr = document.querySelectorAll(".slider__menu_op");
for (let i = 0; i != 4; i++) {
    sliderMenuArr[i].addEventListener("click", event => {  


    sliderBoxArr.forEach(element => {
        element.classList.remove("slider__box_active");
    });
    sliderMenuArr.forEach(element => {
        element.classList.remove("slider__menu_op_active");
    }); 

    sliderBoxArr[i].classList.add("slider__box_active");
    sliderMenuArr[i].classList.add("slider__menu_op_active") ;

    })
}