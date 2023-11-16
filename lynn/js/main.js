var wrapper = document.querySelector(".wrapper");
var preloading = document.querySelector(".preloading");
// set up global data to show the current section
var planetChoiceObj = {
    currentPlanet: "",
};


//init page
var planetElement = wrapper.querySelector(".home");
planetChoiceObj.currentPlanet = planetElement;
planetElement.scrollIntoView({
    behavior: "smooth",
});


//listener all back arrow icon 
var backArrs = document.querySelectorAll(".icon-back");
backArrs.forEach(function(element) {
    element.addEventListener("click", function(e) {
        pageChange(e);
    });
});


//page chage
function pageChange(event) {

    preloading.classList.remove('noshow');
    setTimeout(function() {
        preloading.classList.add('noshow');
        //act

        var dataTargetElement = event.target.getAttribute("data-target");
        if (dataTargetElement == ".detail") {
            detailNav.classList.remove("hidden");
        } else {
            detailNav.classList.add("hidden");
        }
        var planetElement = wrapper.querySelector(dataTargetElement);
        planetChoiceObj.currentPlanet = planetElement;
        planetElement.scrollIntoView({
            behavior: "smooth",
        });
        // end act



    }, 500);
}



var sideNavHomeBtn = document.querySelector("#nav-home-icon");
sideNavHomeBtn.addEventListener("click", e => {
    //go to home page 
    var planetChoiceObj = {
        currentPlanet: "",
    };
    var planetElement = wrapper.querySelector(".home");
    planetChoiceObj.currentPlanet = planetElement;
    planetElement.scrollIntoView({
        behavior: "smooth",
    });
    detailNav.classList.add("hidden");
    //reset data

});