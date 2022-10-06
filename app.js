// Input and card name DOM
const nameDOM = document.querySelector("#name")
const cardNameDOM = document.querySelector("#card-name")

// Input and card number DOM
const numberDOM = document.querySelector("#card-number-input")
const cardNumberDOM = document.querySelector("#card-number")

// Input and card date DOM 
const dateMonthDOM = document.querySelector("#month")
const dateYearDOM = document.querySelector("#year")

const cardMonthDOM = document.querySelector("#card-month-span")
const cardYearDOM = document.querySelector("#card-year")
// Input and card cvc DOM
const cvcDOM = document.querySelector("#cvc")
const cardCvcDOM = document.querySelector("#card-cvc-id")

// Confirm form submit DOM
const formDOM = document.querySelector("#form")

// container DOM
const contentDOM = document.querySelector("#content")

// thanks box DOM
const thanksBoxDOM = document.querySelector("#after-submit")

// add event listener inputs
formDOM.addEventListener('submit', formHandler)
numberDOM.addEventListener('input',inputFunc)
nameDOM.addEventListener('input',inputFunc)
cvcDOM.addEventListener('input',inputFunc)
dateMonthDOM.addEventListener('input',inputFunc)
dateYearDOM.addEventListener('input',inputFunc)

let inputCounter = 0
// input function
function inputFunc(){
    if(this.id == "card-number-input"){
        if ((numberDOM.value.length+1) % 5 == 0 && numberDOM.value.length != 0){
            if (!(numberDOM.value.length+1 >= 18)){
                numberDOM.value += " "
            }
        }
        cardNumberDOM.innerHTML = numberDOM.value
        if (numberDOM.value.length <= 0){
            cardNumberDOM.innerHTML = "0000 0000 0000 0000"
        }
    }else if (this.id == "name"){
        cardNameDOM.innerHTML = nameDOM.value
        if (nameDOM.value.length <= 0){
            cardNameDOM.innerHTML = "JANE APPLESEED"
        }
    }else if (this.id == "cvc"){
        cardCvcDOM.innerHTML = cvcDOM.value
        if (cvcDOM.value.length <= 0){
            cardCvcDOM.innerHTML = "999"
        }
    }else if (this.id == "month"){
        if (Number(dateMonthDOM.value) <= 12){
            cardMonthDOM.innerHTML = dateMonthDOM.value
            if (dateMonthDOM.value.length <= 0){
                cardMonthDOM.innerHTML = "09"
            }
        }else{
            cardMonthDOM.innerHTML = "12"
            dateMonthDOM.value = "12"
        }
    }else if (this.id == "year"){
        cardYearDOM.innerHTML = dateYearDOM.value
        if (dateYearDOM.value.length <= 0){
            cardYearDOM.innerHTML = "24"
        }
    }
    if ((numberDOM.innerHTML.length >= 0) && (nameDOM.innerHTML.length >= 0) && (dateMonthDOM.innerHTML.length >= 0) && (dateYearDOM.innerHTML.length >= 0) && (cvcDOM.innerHTML.length >= 0)){
        inputCounter = 1
    }
    console.log(inputCounter)
}
function formHandler(event){
    event.preventDefault()
    console.log(inputCounter)
    if (inputCounter == 1){
        if (!(formDOM.classList.contains("hidden"))){
            formDOM.classList.add("hidden")
            thanksBoxDOM.classList.remove("hidden")
        }else{
            formDOM.classList.remove("hidden")
            thanksBoxDOM.classList.add("hidden")
        }
    }
}

