// Header animation
let lastYOffset: Number = 0;
const Header: Element | null = document.querySelector('.header');
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

