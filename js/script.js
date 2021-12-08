let scroller = document.getElementById('scroller')

scroller.addEventListener('click', function () {
    let secondscreenPosition = document.getElementById('secondscreen').getBoundingClientRect().y
    window.scrollTo({
        top: secondscreenPosition,
        behavior: "smooth"
    })
})
