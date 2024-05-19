const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    if (!searchInput.classList.contains('hidden')) {
        searchInput.focus();
    }
});

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close');
const body = document.body;

mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("left-0");
    body.classList.toggle('overflow-hidden');
    body.classList.toggle('h-screen');
});

mobileMenuCloseButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("left-0");
    body.classList.toggle('overflow-hidden');
    body.classList.toggle('h-screen');
});

let headerLink = document.querySelectorAll("#header__link");

headerLink.forEach(function (item, index) {
    item.addEventListener('click', function () {
        headerLink.forEach(function (item, index) {
            item.classList.remove("header__active");
        });
        item.classList.add("header__active")
    })
})


let filter__item = document.querySelectorAll("#filter__item");

filter__item.forEach(function (item, index) {
    item.addEventListener('click', function () {
        filter__item.forEach(function (item, index) {
            item.classList.remove("filter__active");
        });
        item.classList.add("filter__active")
    })
})

let filter__item2 = document.querySelectorAll("#filter__item-2");

filter__item2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        filter__item2.forEach(function (item, index) {
            item.classList.remove("filter__active");
        });
        item.classList.add("filter__active")
    })
})

let mobile__header = document.querySelectorAll("#mobile__header");

mobile__header.forEach(function (item, index) {
    item.addEventListener('click', function () {
        mobile__header.forEach(function (item, index) {
            item.classList.remove("header__active");
        });
        item.classList.add("header__active")
    })
})
