var bookingLog = [];
var receiptPage = wrapper.querySelector(".receipt");

function finishPayment() {
    //show in page
    receiptPage.querySelector('#receipt-name').innerHTML = userInfor.userName;
    receiptPage.querySelector('#receipt-night').innerHTML = userInfor.dateLong;
    receiptPage.querySelector('#receipt-email').innerHTML = userInfor.userEmail;
    receiptPage.querySelector('#receipt-checkin').innerHTML = userStartData;
    receiptPage.querySelector('#receipt-checkout').innerHTML = userendData;
    receiptPage.querySelector('#receipt-roompay').innerHTML = userInfor.payment.roomPriceTotal;
    receiptPage.querySelector('#receipt-taxpay').innerHTML = userInfor.payment.serviceTotal;
    receiptPage.querySelector('#receipt-totalpay').innerHTML = userInfor.payment.PaymentTotal;

}

function resetBookingData() {
    userInfor.startDate = "";
    userInfor.endDate = "";
    userInfor.dateLong = 1;
    userInfor.userName = "";
    userInfor.userEmail = "";
    userInfor.adult = 1;
    userInfor.booking.ID = 0;
    userInfor.booking.name = "";
    userInfor.booking.price = 0;
    userInfor.booking.bed = "";
    userInfor.payment.roomPriceTotal = 0;
    userInfor.payment.serviceTotal = 0;
    userInfor.payment.PaymentTotal = 0;
}

var backHomeBtn = document.querySelector("#backhomebtn");
backHomeBtn.addEventListener("click", e => {
    //  console.log('userInfor=', userInfor);
    bookingLog = Object.assign({}, userInfor);
    //  console.log(bookingLog);
    //reset
    resetBookingData();
    //   console.log(bookingLog);
    picker.clearSelection();
    homeInit();
    pageChange(e);

});