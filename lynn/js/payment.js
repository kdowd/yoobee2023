var paymentPage = wrapper.querySelector(".payment");
var submitData = {
    ccNum: "",
    ccNAme: "",
    expDate: "",
    cvv: ""
};
var mySubmit = paymentPage.querySelector("#payment-btn");
var checkNum = "";
var inputNum = document.querySelector("#ccNum");
inputNum.addEventListener("input", function() {

    mySubmit.classList.add("disable-btn");
    // console.log("disable btm   ====num");
    inputNum.classList.remove("wrong");
    var value = this.value;
    var cursor = this.selectionStart;

    var matches = value.substring(0, cursor).match(/[^0-9]/g);
    if (matches) cursor -= matches.length;
    value = value.replace(/[^0-9]/g, "").substring(0, 16);
    // console.log("st value=", value);
    checkNum = value;
    var formatted = "";
    for (var i = 0, n = value.length; i < n; i++) {
        if (i && i % 4 == 0) {
            if (formatted.length <= cursor) cursor++;
            formatted += " ";
        }
        formatted += value[i];
    }
    if (formatted == this.value) return;
    this.value = formatted;
    this.selectionEnd = cursor;
    // console.log("22st value=", value);
});

inputNum.addEventListener("blur", function() {
    if (checkNum.length && checkNum.length != 16) {
        inputNum.classList.add("invalid");
        submitData.ccNum = "";
    }
    if (checkNum.length && checkNum.length == 16) {
        submitData.ccNum = checkNum;
        inputNum.classList.remove("invalid");
        // console.log("  submitData.ccNum", submitData.ccNum);
    } else {
        inputNum.classList.add("invalid");
        submitData.ccNum = "";
    }

    checkSubmitData();

});


//check the name input
var checkName;
var inputName = document.querySelector("#ccName");
inputName.addEventListener("input", function() {
    mySubmit.classList.add("disable-btn");
    // console.log("disable payment btn===  NAME");
    inputName.classList.remove("invalid");
    var value = this.value;
    var cursor = this.selectionStart;
    var matches = value.substring(0, cursor).match(/[^A-Za-z/s]/g);
    if (matches) cursor -= matches.length;
    value = value.replace(/[^A-Za-z\s]/g, "").substring(0, 20);
    this.value = value;
    checkName = value;

});
inputName.addEventListener("blur", function() {
    if (checkName) {
        submitData.ccNAme = checkName;
        // console.log("  submitData.name", submitData.ccNAme);
    } else {
        inputName.classList.add("invalid");
        submitData.ccNAme = "";
    }
    checkSubmitData();
});


//check the data input
var dataStr = "";
var inputExp = document.querySelector("#exp");
inputExp.addEventListener("input", function(e) {
    mySubmit.classList.add("disable-btn");
    // console.log("disable btm   ====exp");
    inputExp.classList.remove("invalid");
    // console.log("============");
    var value = this.value;
    var cursor = this.selectionStart;
    var matches = value.substring(0, cursor).match(/[^0-9]/g);
    if (matches) cursor -= matches.length;
    value = value.replace(/[^0-9]/g, "");
    dataStr = this.value;
    var formatted = "";
    for (var i = 0, n = value.length; i < n; i++) {
        if (i && i % 2 == 0) {
            if (formatted.length <= cursor) cursor++;
            formatted += "/";
        }
        formatted += value[i];
    }
    if (formatted == this.value) return;
    this.value = formatted;
    this.selectionEnd = cursor;

});
inputExp.addEventListener("blur", function() {

    var checkMonth = dataStr.substring(0, 2).match(/^(0?[1-9]|1[0-2])$/g);
    if (!checkMonth || dataStr.length != 5) {
        if (dataStr.length) {
            inputExp.classList.add("invalid");
            // mySubmit.classList.remove("color");
            submitData.expDate = "";
        }

    }
    if (checkMonth && dataStr.length == 5) {
        inputExp.classList.remove("invalid");
        submitData.expDate = dataStr;
        // console.log("  submitData.data", submitData.expDate);

    } else {
        inputExp.classList.add("invalid");
        submitData.expDate = "";
    }
    checkSubmitData();
});


//input css
var checkCVV;
var inputCVV = document.querySelector("#cvv");
inputCVV.addEventListener("input", function() {
    mySubmit.classList.add("disable-btn");
    // console.log("disable btm   ====cvv");
    inputCVV.classList.remove("invalid");
    var value = this.value;
    var cursor = this.selectionStart;
    var matches = value.substring(0, cursor).match(/[^0-9]/g);
    if (matches) cursor -= matches.length;
    value = value.replace(/[^0-9]/g, "");
    checkCVV = value;

    this.value = value;
});
inputCVV.addEventListener("blur", function() {

    if (checkCVV && checkCVV.length != 3) {
        inputCVV.classList.add("invalid");
        //mySubmit mySubmit.classList.remove("color");
        submitData.cvv = "";
    }
    if (checkCVV.length == 3) {
        submitData.cvv = checkCVV;


    } else {
        inputCVV.classList.add("invalid");
        submitData.cvv = "";
    }
    checkSubmitData();
});




function checkSubmitData() {
    //verify the wrong
    var haveWrong = false;
    var wrong = paymentPage.querySelector(".invalid");
    if (wrong) {
        haveWrong = true;
    }

    //verify empty
    var haveEmpty = 4;
    var inputAll = paymentPage.querySelectorAll("input");
    inputAll.forEach(ele => {
        if (ele.value) {
            haveEmpty--;
        }
    });
    //PD
    if (haveEmpty == 0 && haveWrong == false) {
        mySubmit.classList.remove("disable-btn");
    }
}

//submit
mySubmit.addEventListener("click", e => {
    console.log("submit for payment");
    //update Data

    pageChange(e);
    finishPayment();
});