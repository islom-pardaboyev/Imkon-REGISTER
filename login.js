const elForm = document.getElementById("form")
const elInput1 = document.getElementById("inputOne")
const elInput2 = document.getElementById("inputTwo")
const alertP2 = document.getElementById("alert-p2")
const alertP1 = document.getElementById("alert-p1")
const elCountries = document.getElementById("countries")
const elBtn = document.getElementById("elBtn")

const containerEl = document.querySelector(".containerr");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

elBtn.addEventListener('click', () => {
    if (elInput1.value.length === 17 && elInput2.value.length === 8) {
        containerEl.classList.add("active");
        popupContainerEl.classList.remove("active");
    }
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});

function countries(input1) {
    if (input1.value.length === 17) {
        input1.value = "+998";
    }
}

countries(elInput1)

function validateInput(inputEl1, inputEl2) {
    const inputValue1 = inputEl1.value.trim();
    const inputValue2 = inputEl2.value.trim(); 

    if (inputValue1 === "") {
        elInput1.classList.add("error-input")
        alertP1.classList.add("error-p");
        alertP1.textContent = "Birinchi inputni to'ldiring";
    } else if (inputValue1.length !== 17) {
        alertP1.classList.add("error-p");
        alertP1.textContent = "Birinchi inputni 17 ta belgili to'ldiring";
    } else {
        alertP1.classList.remove("error-p");
        alertP1.classList.add("correct-p");
        alertP1.textContent = "Birinchi inputni to'g'ri to'ldirganiz";
    }
    if (inputValue2 === "") {
        alertP2.classList.add("error-p");
        alertP2.textContent = "Ikkinchi inputni to'ldiring";
    } else if (inputValue2.length !== 8) {
        alertP2.classList.add("error-p");
        alertP2.textContent = "Ikkinchi inputni 8 ta belgili to'ldiring";
    } else {
        alertP2.classList.remove("error-p");
        alertP2.classList.add("correct-p");
        alertP2.textContent = "Ikkinchi inputni to'g'ri to'ldirganiz";
    }if(inputValue1.value === 17 && inputValue2.value === 8){
        containerEl.classList.add("active");
        popupContainerEl.classList.remove("active")
    }
}

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateInput(elInput1, elInput2)
})



document.getElementById('show-password').addEventListener('change', function () {
    var passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});



// Show Password
let eyeicon = document.getElementById("eyeicon")
        let password = document.getElementById("password")

        eyeicon.onclick = function () {
            if(password.type === "password"){
                password.type = "text";
                eyeicon.src = "eye_open.svg"
            }else{
                password.type = "password";
                eyeicon.src = "eye_closed.svg"
            }
        }


