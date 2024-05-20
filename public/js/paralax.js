document.addEventListener('DOMContentLoaded', function () {
    const parallaxElements = document.querySelectorAll('[data-parallax="scroll"]');
    parallaxElements.forEach(element => {
        new Parallax(element);
    });
});
