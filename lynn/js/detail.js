var selectRoomInfor;
var targetHouse;
var detailPage = document.querySelector(".detail");
var detailNav = detailPage.querySelector(".detail-nav");
// showHouseDetail(ID);
function showHouseDetail(ID) {


    //add data-target for back arrow
    // var detailArrBack = wrapper.querySelector("#detail-arrow-back");
    // detailArrBack.setAttribute("data-target", fromPage);
    loadingDetail(ID);

    var planetElement = wrapper.querySelector(".detail");
    planetChoiceObj.currentPlanet = planetElement;
    planetElement.scrollIntoView({
        behavior: "smooth",
    });
    detailNav.classList.remove("hidden");
}

function loadingDetail(ID) {
    var detailImgWrap = wrapper.querySelector(".detail-img");
    var detailTitleWrap = wrapper.querySelector(".detail-fixed");
    var descriptionWrap = wrapper.querySelector(".description");
    var aroundWrap = wrapper.querySelector(".around");
    var roomWrap = wrapper.querySelector(".select-room");

    //reset detail page
    detailImgWrap.innerHTML = "";
    detailTitleWrap.innerHTML = "";
    descriptionWrap.innerHTML = "";
    aroundWrap.innerHTML = ' <span class="subtitle">What’s around</span>';
    roomWrap.innerHTML = ' <span class="subtitle">Room Type</span>';
    // get infor from bigdata
    targetHouse = allHouse.find(item => item.houseID == ID);

    //new img
    var imgEle = document.createElement('img');
    imgEle.src = targetHouse.detailImg;
    detailImgWrap.appendChild(imgEle);
    // new fixe pard
    var titleEle = document.createElement('div');
    titleEle.innerHTML = '<h4>' + targetHouse.name + '</h4><span>$' + targetHouse.price + '</span><span>/night</span>';
    detailTitleWrap.appendChild(titleEle);
    var titleEle2 = document.createElement('div');
    titleEle2.innerHTML = '<div>' + targetHouse.add + ' </div><div class="room-rating"><div class="amenities-block"><img src="./imgs/icon/Icon feather-star.svg" alt=""><span id="rating">' + targetHouse.star + '</span></div></div>';
    detailTitleWrap.appendChild(titleEle2);
    //new description
    var descriEle = document.createElement('p');
    descriEle.innerText = targetHouse.description;
    descriptionWrap.appendChild(descriEle);

    //new around
    var aroundEle = document.createElement('ol');
    targetHouse.around.forEach(e => {
        var addli = document.createElement('li');
        addli.innerText = e;
        aroundEle.appendChild(addli);
    });
    aroundWrap.appendChild(aroundEle);

    //new room
    targetHouse.bed.forEach(e => {
        var roomEle = document.createElement('div');
        roomEle.classList.add("room-option");
        roomEle.setAttribute("data-room-index", e.bedID);
        roomEle.innerHTML = '<div><span>' + e.short + '</span></div><div><p> ' + e.roomName + '</p><p id="bed-size"> ' + e.bedSize + '</p></div><div class="switch"><label><input  type="checkbox"><span class="lever"></span></label></div>';
        roomWrap.appendChild(roomEle);
    });
    //set  room type defult
    var firstRoomName = roomWrap.querySelectorAll("input")[0];
    firstRoomName.checked = true;
    firstRoomName = roomWrap.querySelectorAll("#bed-size")[0].innerText;
    selectRoomInfor = firstRoomName;
    console.log("defult room name=", selectRoomInfor);


    //switch event
    var switchBtns = roomWrap.querySelectorAll("input");
    switchBtns.forEach(e => {
        e.addEventListener('click', ele => {
            //other btn disable 
            switchBtns.forEach(btn => {
                btn.checked = false;
            });
            ele.target.checked = true;
            //get room name
            var roomOption = ele.target.parentNode.parentNode.parentNode;
            selectRoomInfor = roomOption.children[1].children[1].innerText;
            console.log("chagen room name=", selectRoomInfor);
        });

    });
}

var detailMapBtn = wrapper.querySelector("#detail-map-btn");
detailMapBtn.addEventListener("click", e => {
    var mapWrap = detailPage.querySelector(".detail-map");
    mapWrap.classList.toggle("show");
});


var reserveBtn = wrapper.querySelector("#reserve-btn");
reserveBtn.addEventListener("click", e => {
    if (selectRoomInfor) {
        //change page and 
        pageChange(e);
        detailNav.classList.add("hidden");
        //updata userdata
        userInfor.booking.ID = targetHouse.houseID;
        userInfor.booking.name = targetHouse.name;
        userInfor.booking.price = targetHouse.price;
        userInfor.booking.bed = selectRoomInfor;

        loadingBookingPage();
    } else(alert("plees selet room type"));
});