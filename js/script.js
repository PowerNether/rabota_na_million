let scroller = document.getElementById('scroller')

scroller.addEventListener('click', function () {
    let secondscreenPosition = document.getElementById('secondscreen').getBoundingClientRect().y
    window.scrollTo({
        top: secondscreenPosition,
        behavior: "smooth"
    })
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);