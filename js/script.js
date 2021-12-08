window.addEventListener('load', function () {
    if (window.innerWidth < 768) {
        new fullpage('#fullpage', {
            sectionsColor : ['#fff', '#fff', '#fff', '#fff'],
        });
    }
});
