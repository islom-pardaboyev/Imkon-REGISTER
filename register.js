const elForm = document.getElementById("form")
const elInput1 = document.getElementById("inputOne")
const elInput2 = document.getElementById("inputTwo")
const elInput3 = document.getElementById("inputThree")
const alertP1 = document.getElementById("alert-p1")
const alertP2 = document.getElementById("alert-p2")
const alertP3 = document.getElementById("alert-p3")

function  validateInput(inputEl1,inputEl2, inputEl3) {
    const inputValue1 = inputEl1.value.trim()
    const inputValue2 = inputEl2.value.trim()
    const inputValue3 = inputEl3.value.trim()

    if(inputValue1 === ""){
        alertP1.classList.add("error-p")
        alertP1.textContent = "Birinchi inputni to'ldiring"
    }else if(inputValue1.value !== ""){
        alertP1.classList.remove("error-p");
        alertP1.classList.add("correct-p");
        alertP1.textContent = "Birinchi inputni to'g'ri to'ldirdingiz"
    }
    if(inputValue2 === ""){
        alertP2.classList.add("error-p")
        alertP2.textContent = "Ikkinchi inputni to'ldiring"
    }else if(inputValue2.value !== ""){
        alertP2.classList.remove("error-p");
        alertP2.classList.add("correct-p");
        alertP2.textContent = "Ikkinchi inputni to'g'ri to'ldirdingiz"
    }else{
        alertP2.classList.remove("error-p");
        alertP2.classList.add("correct-p");
        alertP2.textContent = "Ikkinchi inputni to'g'ri to'ldirdingiz"
    }
    if(inputValue3 === ""){
        alertP3.classList.add("error-p")
        alertP3.textContent = "Ikkinchi inputni to'ldiring"
    }else if(inputValue3.value !== ""){
        alertP3.classList.remove("error-p");
        alertP3.classList.add("correct-p");
        alertP3.textContent = "Uchinchi inputni to'g'ri to'ldirdingiz"
    }else{
        alertP3.classList.remove("error-p");
        alertP3.classList.add("correct-p");
        alertP3.textContent = "Uchinchi inputni to'g'ri to'ldirdingiz"
    }
}

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateInput(elInput1, elInput2, elInput3)
})