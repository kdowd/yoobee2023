var startDataString;
var endDataString;
var nightsCounter = 1;

//init
function homeInit() {
    var today = new Date();
    var tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    startDataString = today.toString();
    endDataString = tmr.toString();
    updataCalender();
    userInfor.startDate = startDataString;
    userInfor.endDate = endDataString;
    document.querySelector("#adult").innerHTML = "1";
}
homeInit();


var picker = new Litepicker({
    element: document.querySelector("#litepicker"),
    format: "DD-MMMM-YYYY",
    minDate: Date.now(),
    singleMode: false,
    tooltipText: {
        one: 'night',
        other: 'nights'
    },
    tooltipNumber: (totalDays) => {
        return totalDays - 1;
    },
    maxDays: 15,
    minDays: 1
});

function updataCalender() {
    var dateStartWords = startDataString.split(' ');
    var dateEndWords = endDataString.split(' ');
    document.querySelector("#litepicker").innerHTML = ' ' + dateStartWords[2] + ' &nbsp &nbsp ' + dateEndWords[2] + '';
    document.querySelector("#date-start-week").innerHTML = ' ' + dateStartWords[0] + '';
    document.querySelector("#date-start-month").innerHTML = ' ' + dateStartWords[1] + '';
    document.querySelector("#date-end-week").innerHTML = ' ' + dateEndWords[0] + '';
    document.querySelector("#date-end-month").innerHTML = ' ' + dateEndWords[1] + '';
    // document.querySelector("#adult").innerHTML = userInfor.adult;
}

picker.on("selected", (date1, date2) => {
    //get date 
    startDataString = date1.dateInstance.toString();
    endDataString = date2.dateInstance.toString();

    updataCalender();

    // updata data in page
    var theRangeInMillseconds = date2.dateInstance - date1.dateInstance;
    var numberOfMillsecondsInDay = 86400000;
    nightsCounter = theRangeInMillseconds / numberOfMillsecondsInDay;

    // console.log("Lenght of Booking = ", nightsCounter, " nights")
});

var subsractBtns = document.querySelectorAll(".subsract");
subsractBtns.forEach(element => {
    element.addEventListener("click", function(e) {
        var oriNum = e.target.nextElementSibling.innerHTML;
        var idName = e.target.nextElementSibling.id;
        var newNum = oriNum - 1;
        if (idName == "adult" && newNum <= 1) {
            newNum = 1;
        }
        if (idName == "child" && newNum <= 0) {
            newNum = 0;
        }
        e.target.nextElementSibling.innerHTML = '' + newNum + '';
    });

});

var addBtns = document.querySelectorAll(".add");
addBtns.forEach(element => {
    element.addEventListener("click", function(e) {

        var oriNum = e.target.previousElementSibling.innerHTML;
        var newNum = oriNum - 0;
        newNum = newNum + 1;
        if (newNum >= 4) {
            newNum = 4;
        }
        e.target.previousElementSibling.innerHTML = '' + newNum + '';
    });

});

var filterperson = [];
var result = [];
//seach btn function
var mainSearchBtn = document.querySelector("#home-btn");
//get user information
mainSearchBtn.addEventListener("click", function(e) {
    userInfor.adult = parseInt(document.querySelector("#adult").innerHTML);
    userInfor.startDate = startDataString;
    userInfor.endDate = endDataString;
    userInfor.dateLong = nightsCounter;
    // filter roomtype
    filterperson = [];
    result = [];
    filterperson = typeArr.filter(function(e) {
        return userInfor.adult >= e.minperson && userInfor.adult <= e.maxperson;
    });
    result = filterperson.filter(function(e) {
        return userInfor.dateLong >= e.minday && userInfor.dateLong <= e.maxday;
    });
    console.table(result);
    if (result == "") {
        console.log("====NON FIND ANY ROOM");
    } else {
        getSelectType();
        allHouseListing();
        pageChange(e);

    }
});