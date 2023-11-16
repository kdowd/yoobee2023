document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide');
    splide.mount();
});

var snav;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    snav = M.Sidenav.init(elems);
    console.log("snav", snav);

});
var menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener("click", function(event) {
    console.log("0000");

});