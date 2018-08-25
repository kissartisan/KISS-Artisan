
var bulmaAccordion = require('bulma-extensions/bulma-accordion/dist/js/bulma-accordion');
var bulmaCalendar = require('bulma-extensions/bulma-calendar/dist/js/bulma-calendar');
var bulmaCarousel = require('bulma-extensions/bulma-carousel/dist/js/bulma-carousel');
var bulmaIconpicker = require('bulma-extensions/bulma-iconpicker/dist/js/bulma-iconpicker');
var bulmaQuickview = require('bulma-extensions/bulma-quickview/dist/js/bulma-quickview');
var bulmaSlider = require('bulma-extensions/bulma-slider/dist/js/bulma-slider');
var bulmaSteps = require('bulma-extensions/bulma-steps/dist/js/bulma-steps');
var bulmaTagsinput = require('bulma-extensions/bulma-tagsinput/dist/js/bulma-tagsinput');


// Instantiate
bulmaAccordion.attach();
bulmaCalendar.attach();
bulmaCarousel.attach();
bulmaIconpicker.attach();
bulmaQuickview.attach();
bulmaSlider.attach();
bulmaSteps.attach();
bulmaTagsinput.attach();


// Bulma NavBar Burger Script
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});