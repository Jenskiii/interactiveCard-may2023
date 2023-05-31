// all inputs
let inputs = document.querySelectorAll("input");

// card values
let cardName = document.querySelector(".card__front--name");
let cardDigits = document.querySelector(".card__front--digits");
let cardMonth = document.querySelector(".card__front--month");
let cardYear = document.querySelector(".card__front--year");
let cardCvc = document.querySelector(".card__back--cvc");

// date error paragraph
const monthError = document.querySelector(".date__error--month");
const yearError = document.querySelector(".date__error--year");
// forms
const form = document.querySelector(".main__form");
const complete = document.querySelector(".complete");

// buttons
const button = document.getElementById("button");
const continueButton = document.getElementById("continue");

// checks if fields hold the correct value otherwise gives error
button.addEventListener("click", function(){
    if(checkCvcInput() === true && checkNameInput() === true && checkNumberInput() === true 
    && checkMonthInput() === true && checkYearInput() === true){
        checkNameInput();
        checkNumberInput();
        checkMonthInput();
        checkYearInput();
        checkCvcInput();
        form.style.display = "none";
        complete.style.display = "block";
    }else{
        checkNameInput();
        checkNumberInput();
        checkMonthInput();
        checkYearInput();
        checkCvcInput();
    }
});

// resets page back to normal
continueButton.addEventListener("click", () =>{
    form.style.display = "block";
    complete.style.display = "none";
    // empty's all inputs
    inputs.forEach(e =>{
        e.value = "";
    })
   // resets card values
    cardDigits.innerHTML = "0000 0000 0000 0000";
    cardName.innerHTML = "Jane Appleseed";
    cardMonth.innerHTML = "00";
    cardYear.innerHTML = "00";
    cardCvc.innerHTML = "000";
})


//name input/error handeling
function checkNameInput(){
    const nameError = document.querySelector(".name__error");

    if(inputs[0].value.match(/^[A-Za-z-\s]+$/)){
        // returns value + turns to uppercase
        cardName.innerHTML = document.getElementById("fname").value.toUpperCase();;
        inputs[0].style.borderColor = "hsl(270, 3%, 87%)";
        nameError.style.display = "none";
        return true;
// resets to default + show error
    }else{
        cardName.innerHTML = "Jane Appleseed";
        inputs[0].style.borderColor = "red";
        nameError.style.display = "flex";
        return false;
    }
}


// number input/error handeling
function checkNumberInput(){
    let digitsInput = document.getElementById("fnumber").value
    const numberError = document.querySelector(".number__error")
// check if its a number + 16 length
    if(inputs[1].value.match(/^\d+/) && digitsInput.length === 16) {
        cardDigits.innerHTML = digitsInput.match(/.{1,4}/g).join(" ");
        inputs[1].style.borderColor = "hsl(270, 3%, 87%)";
        numberError.style.display = "none";
        return true
// resets to default + show error
    }else{
        cardDigits.innerHTML = "0000 0000 0000 0000";
        inputs[1].style.borderColor = "red";
        numberError.style.display = "flex";
        return false
    }
}


// month input/error handeling
function checkMonthInput(){
    let monthInput = document.getElementById("fmonth").value
// search for number between 1-12 + lenght of 2
    if(inputs[2].value.match(/^(1[0-2]|[1-9])$/) && monthInput.length === 2) {
        cardMonth.innerHTML = monthInput;
        inputs[2].style.borderColor = "hsl(270, 3%, 87%)";
        monthError.style.display = "none"
        return true
// resets to default + show error
    }else{
        cardMonth.innerHTML = "00";
        inputs[2].style.borderColor = "red";
        monthError.style.display = "flex";
        
        return false
    }
}

// year input/error handeling
function checkYearInput(){
    let yearInput = document.getElementById("fyear").value;
// check for number between 99 + length 2
    if(inputs[3].value.match(/^(99|[1-9]?[0-9])/) && yearInput.length === 2) {
        cardYear.innerHTML = yearInput;
        inputs[3].style.borderColor = "hsl(270, 3%, 87%)";
        yearError.style.display = "none";
        return true
// resets to default + show error
    }else{
        cardYear.innerHTML = "00";
        inputs[3].style.borderColor = "red";

        /// fixes bug that wouldnt let error show if either year or month was not true
        if(inputs[2].style.display === "none"){
            yearError.style.display = "flex";
            }else if(inputs[3].style.borderColor === "red"){
                yearError.style.display = "flex";
            }
        
        return false
    }
}

// CVC input error/handeling
function checkCvcInput(){
    let cvcInput = document.getElementById("fcvc").value
    const cvcError = document.querySelector(".date__error--cvc");
// checks if number + length of 3
    if(inputs[4].value.match(/^\d+/) && cvcInput.length === 3) {
        cardCvc.innerHTML = cvcInput;
        inputs[4].style.borderColor = "hsl(270, 3%, 87%)";
        cvcError.style.display = "none";
        return true
 // resets to default + show error
    }else{
        cardCvc.innerHTML = "000";
        inputs[4].style.borderColor = "red";
        cvcError.style.display = "flex";
        return false
    }
}

