var roomPriceTotal = 0;
var taxTotal = 0;
var cleaningTotal = 0;
var PaymentTotal = 0;
var bookingPage = document.querySelector(".booking");
var userStartData;
var userendData;
// var detailNav = detailPage.querySelector(".detail-nav");
function loadingBookingPage() {

    var reviewWrap = bookingPage.querySelector(".review");
    //init 
    reviewWrap.innerHTML = "";


    var newReviewImg = document.createElement("img");
    newReviewImg.src = targetHouse.smallImg;
    reviewWrap.appendChild(newReviewImg);
    var newReviewtext = document.createElement("div");
    newReviewtext.classList.add("text");
    newReviewtext.innerHTML = '<div>' + userInfor.booking.name + '</div><div><span>$' + userInfor.booking.price + '</span>/night</div><div>' + userInfor.booking.bed + '<img src="./imgs/icon/04-booking-call.svg" alt=""></div>';
    reviewWrap.appendChild(newReviewtext);
    // update rewvie times
    userStartData = userInfor.startDate.slice(0, 10);
    userendData = userInfor.endDate.slice(0, 10);
    bookingPage.querySelector("#detail-checkin").innerText = userStartData;
    bookingPage.querySelector("#detail-checkout").innerText = userendData;
    bookingPage.querySelector("#detail-person").innerHTML = '' + userInfor.adult + 'Adults ';
    //loading price breakdown section
    roomPriceTotal = userInfor.booking.price * userInfor.dateLong;
    roomPriceTotal = parseFloat(roomPriceTotal.toFixed(2));
    taxTotal = roomPriceTotal * 0.15;
    taxTotal = parseFloat(taxTotal.toFixed(2));
    cleaningTotal = roomPriceTotal * 0.1;
    cleaningTotal = parseFloat(cleaningTotal.toFixed(2));
    PaymentTotal = roomPriceTotal + taxTotal + cleaningTotal;
    bookingPage.querySelector(".bg-wrap").innerHTML = ' <div><span>' + userInfor.dateLong + ' Nights</span> <span>$' + roomPriceTotal + '</span></div><div> <span>Cleaning fee(10%)</span> <span>$' + cleaningTotal + '</span></div><div> <span>Taxes(15%)</span> <span>$' + taxTotal + '</span></div><div> <span>Total Payment</span> <span>$' + PaymentTotal + '</span></div>';
}


var inputAll = bookingPage.querySelectorAll("input");

inputAll.forEach(ele => {
    ele.addEventListener("focus", e => { goPayBtn.classList.add("disable-btn"); })
    ele.addEventListener("blur", e => {

        //verify the wrong
        var haveWrong = false;
        var wrong = bookingPage.querySelector(".invalid");
        if (wrong) {
            haveWrong = true;
        }

        //verify noll
        var haveEmpty = 4;
        var inputAll = bookingPage.querySelectorAll("input");
        inputAll.forEach(ele => {
            if (ele.value) {
                haveEmpty--;
            }
        });
        //PD
        if (haveEmpty == 0 && haveWrong == false) {
            goPayBtn.classList.remove("disable-btn");
        }
    })
});



var goPayBtn = bookingPage.querySelector("#confir-booking-btn");
goPayBtn.addEventListener('click', e => {
    var firstName = bookingPage.querySelector("#first_name").value;
    var lastname = bookingPage.querySelector("#last_name").value;
    userInfor.userName = firstName + ' ' + lastname;
    userInfor.userEmail = bookingPage.querySelector("#email").value;
    userInfor.userTel = bookingPage.querySelector("#icon_telephone").value;


    // update price 
    userInfor.payment.roomPriceTotal = roomPriceTotal;
    userInfor.payment.PaymentTotal = PaymentTotal;
    userInfor.payment.serviceTotal = cleaningTotal + taxTotal;
    console.table(userInfor.payment);

    pageChange(e);
});