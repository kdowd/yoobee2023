/**
 * description of module here
 * @module sideNav
 */


var snav;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    snav = M.Sidenav.init(elems);
});
var menuBtns = document.querySelectorAll('.icon-menu');
menuBtns.forEach(function(element) {
    element.addEventListener("click", function(e) {
        console.log("home page nav btn");
    })
});