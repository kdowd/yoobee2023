var resultP;
var resultday;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});
//init
var filterTypeArr = [];

//loading house listing 
function allHouseListing() {
    // reset page n icon
    document.querySelector(".card-wrapper").innerHTML = "";
    var listingIcons = document.querySelectorAll(".listing-icon");
    listingIcons.forEach(e => {
        e.classList.add("disable-icon");
        switch (e.id) {
            case "hotel":
                e.style.borderColor = "#dbdbdbc9";
                e.style.backgroundImage = "url('./imgs/filter-icon/disable-hotel.svg')";
                break;
            case "house":
                e.style.borderColor = "#dbdbdbc9";
                e.style.backgroundImage = "url('./imgs/filter-icon/disable-house.svg')";
                break;
            case 'hostel':
                e.style.borderColor = "#dbdbdbc9";
                e.style.backgroundImage = "url('./imgs/filter-icon/disable-hostel.svg')";
                break;
            case 'motel':
                e.style.borderColor = "#dbdbdbc9";
                e.style.backgroundImage = "url('./imgs/filter-icon/disable-motel.svg')";
                break;

        }
    });

    //active select icon
    result.forEach(e => {
        var typeSpan = document.querySelector(e.type);
        switch (e.type) {
            case ".hotel":
                typeSpan.classList.remove("disable-icon");
                typeSpan.style.borderColor = "grey";
                typeSpan.style.backgroundImage = "url('./imgs/filter-icon/hotel-act.svg')";
                break;
            case ".house":
                typeSpan.classList.remove("disable-icon");
                typeSpan.style.borderColor = "grey";
                typeSpan.style.backgroundImage = "url('./imgs/filter-icon/house-act.svg')";
                break;
            case '.hostel':
                typeSpan.classList.remove("disable-icon");
                typeSpan.style.borderColor = "grey";
                typeSpan.style.backgroundImage = "url('./imgs/filter-icon/hostel-act.svg')";

                break;
            case '.motel':
                typeSpan.classList.remove("disable-icon");
                typeSpan.style.borderColor = "grey";
                typeSpan.style.backgroundImage = "url('./imgs/filter-icon/motel-act.svg')";
                break;

        }

    });

    filterTypeArr.forEach(e => {
        //creat ele
        var cardItem = document.createElement("div");
        cardItem.classList.add("card-item");
        cardItem.setAttribute("data-index", e.houseID);
        cardItem.setAttribute("data-target", ".detail");
        cardItem.innerHTML = '<div class="room-img"><img src="' + e.listingImg + '" alt=""></div><div class="room-infor"><div class="room-infor-section"><div class="room-price">$' + e.price + '<span>/night</span></div></div><div class="room-infor-section"><div class="room-add">' + e.add + '</div><div class="room-rating"><div class="amenities-block"><img src="./imgs/icon/Icon feather-star.svg" alt=""><span id="rating">' + e.star + '</span></div></div></div></div>';
        document.querySelector(".card-wrapper").appendChild(cardItem);
    });
    //click to show detail
    var detailPage = document.querySelector(".all-listing");
    var cardItems = detailPage.querySelectorAll(".card-item");
    cardItems.forEach(e => {
        e.addEventListener("click", function(item) {
            var ID = this.getAttribute("data-index");
            preloading.classList.remove('noshow');
            setTimeout(function() {
                preloading.classList.add('noshow');
                showHouseDetail(ID);
            }, 500);
            // pageChange(item)
        });

    });
}

//click the type
var TypeBtns = document.querySelectorAll(".listing-icon");

TypeBtns.forEach(ele => {
    ele.addEventListener('click', e => {
        preloading.classList.remove('noshow');
        setTimeout(function() {
            preloading.classList.add('noshow');
            //acting
            var selectType = e.target.id;
            all.classList.add("unsel");
            filterTypeArr = allHouse.filter(function(ele) {
                return ele.type == selectType;
            });
            allHouseListing();
            //end action
        }, 500);
    });

});

var all = document.querySelector("#all");
all.addEventListener('click', e => {
    preloading.classList.remove('noshow');
    setTimeout(function() {
        preloading.classList.add('noshow');
        all.classList.remove("unsel");
        getSelectType();
        allHouseListing();
    }, 500);
})

function getSelectType() {
    var filteTypeAll = [];
    var filteTypeItem;
    result.forEach(element => {
        filteTypeItem = allHouse.filter(function(ele) {
            return ele.type == element.typeName;
        });
        filteTypeItem.forEach(e => {
            filteTypeAll.push(e);
        });
    });
    filterTypeArr = filteTypeAll;
}