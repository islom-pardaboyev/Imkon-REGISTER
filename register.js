// VARIABlE
const elFirstSection = document.querySelector('.first-div')
const elInputs = document.querySelector('.inputs')
const newForm = document.createElement('form')
const newInvalid1 = document.createElement('p')
const newInvalid2 = document.createElement('p')
const newInvalid3 = document.createElement('p')
const newH1 = document.createElement('h1')
const newDiv1 = document.createElement('div')
const newDiv1Div1 = document.createElement('div')
const newDiv1Div2 = document.createElement('div')
const newLabel1 = document.createElement('label')
const newInput1 = document.createElement('input')
const newLabel2 = document.createElement('label')
const newInput2 = document.createElement('input')
const newDiv2 = document.createElement('div')
const newLabel3 = document.createElement('label')
const newInput3 = document.createElement('input')
const newDiv3 = document.createElement('div')
const newDiv3Div1 = document.createElement('div')
const newDiv3Div2 = document.createElement('div')
const newDiv3Div3 = document.createElement('div')
const newLabel4 = document.createElement('label')
const newSelect1 = document.createElement('select')
const newSelect1Option1 = document.createElement('option')
const newSelect1Option2 = document.createElement('option')
const newSelect1Option3 = document.createElement('option')
const newSelect2 = document.createElement('select')
const newSelect2Option1 = document.createElement('option')
const newSelect2Option2 = document.createElement('option')
const newSelect2Option3 = document.createElement('option')
const newSelect3 = document.createElement('select')
const newSelect3Option1 = document.createElement('option')
const newSelect3Option2 = document.createElement('option')
const newSelect3Option3 = document.createElement('option')
const newLabel5 = document.createElement('label')
const newDiv4 = document.createElement('div')
const newRadioBtn1 = document.createElement('input')
const newRadioBtn2 = document.createElement('input')
const newRadioLabel1 = document.createElement('label')
const newRadioLabel2 = document.createElement('label')
const newBtn = document.createElement('button')
const newDiv5 = document.createElement('div')
const newLink1 = document.createElement('a')
const newPText1 = document.createElement('p')

// TEXT CONTENT
newH1.textContent = "Ro'yxatdan o'tish"
newLabel1.textContent = 'Ism'
newLabel2.textContent = 'Familiya'
newLabel3.textContent = 'Elektron pochtangiz'
newLabel4.textContent = "Tu'gilgan kuningiz"
newLabel5.textContent = "Jinsingiz"
newSelect1Option1.textContent = "1"
newSelect1Option2.textContent = "2"
newSelect1Option3.textContent = "3"
newSelect2Option1.textContent = 'Yanvar'
newSelect2Option2.textContent = 'Fevral'
newSelect2Option3.textContent = 'Mart'
newSelect3Option1.textContent = "2010"
newSelect3Option2.textContent = "2011"
newSelect3Option3.textContent = "2012"
newRadioLabel1.textContent = "Erkak"
newRadioLabel2.textContent = "Ayol"
newBtn.textContent = "Ro'yxatdan O'tish"
newLink1.textContent = 'Kirish'
newPText1.textContent = 'Akkauntingiz bormi?'



// SET ATTRIBUTES
document.body.setAttribute('class', 'bg-[#121B25]')
newH1.setAttribute('class', 'font-semibold text-[26px] mb-[30px] leading-[28px]')
newRadioBtn1.setAttribute('type', 'radio')
newRadioBtn2.setAttribute('type', 'radio')
newRadioBtn1.setAttribute('id', 'radio1')
newRadioLabel1.setAttribute('for', 'radio1')
newRadioLabel1.setAttribute('class', 'hover:text-[#8e9ba8] duration-200 mr-[30px]')
newLink1.setAttribute('href', './index.html')
newRadioLabel2.setAttribute('class', 'hover:text-[#8e9ba8] duration-200')
newRadioBtn2.setAttribute('id', 'radio2')
newRadioLabel2.setAttribute('for', 'radio2')
newSelect1Option1.setAttribute('value', 1)
newSelect1Option2.setAttribute('value', 2)
newSelect1Option3.setAttribute('value', 3)
newSelect2Option1.setAttribute('value', 'Yanvar')
newSelect2Option2.setAttribute('value', 'Fevral')
newSelect2Option3.setAttribute('value', 'Mart')
newSelect3Option1.setAttribute('value', '2010')
newSelect3Option2.setAttribute('value', '2011')
newSelect3Option3.setAttribute('value', '2012')
newSelect1.setAttribute('class', 'w-[10rem] mr-[15px] p-2 rounded-md text-[#f8fafc] bg-[#343C42]')
newSelect2.setAttribute('class', 'w-[10rem] mr-[15px] p-2 rounded-md text-[#f8fafc] bg-[#343C42]')
newSelect3.setAttribute('class', 'w-[10rem] text-[#f8fafc] p-2 rounded-md  bg-[#343C42]')
newForm.setAttribute('class', 'text-left bg-[#3F474C] p-[30px] rounded-lg')
newInput1.setAttribute('placeholder', 'Ismingiz')
newLabel1.setAttribute('class', 'font-medium text-[13px] mb-[5px] leading-[16px]')
newRadioBtn1.setAttribute('name', 'jins')
newRadioBtn2.setAttribute('name', 'jins')
newRadioBtn1.setAttribute('class', 'mr-[5px]')
newRadioBtn2.setAttribute('class', 'mr-[5px]')
newDiv3.setAttribute('class', 'mb-[20px]')
newDiv3Div1.setAttribute('class', 'inline')
newDiv3Div2.setAttribute('class', 'inline')
newDiv3Div3.setAttribute('class', 'inline')
newLabel2.setAttribute('class', 'font-medium text-[13px] mb-[5px] leading-[16px]')
newLabel3.setAttribute('class', 'font-medium mb-[3px] text-[13px] leading-[16px]')
newLabel4.setAttribute('class', 'block font-medium text-[13px] mb-[5px] leading-[16px]')
newLabel5.setAttribute('class', 'block font-medium text-[13px] mb-[5px] leading-[16px]')
newInput2.setAttribute('placeholder', 'Familiyangiz')
newInput3.setAttribute('placeholder', 'info@imkon.uz')
newInput3.setAttribute('type', 'email')
newInput1.setAttribute('class', 'focus:outline-none focus:border-[#387CDF] w-[16rem] rounded-md py-[5px] px-[15px] inputs bg-[#343C42] focus:bg-[#2B343A]')
newInput3.setAttribute('class', 'inputs focus:outline-none focus:border-[#387CDF] py-[5px] rounded-md px-[15px] bg-[#343C42] focus:bg-[#2B343A] rounded-lg')
newInput2.setAttribute('class', 'focus:outline-none focus:border-[#387CDF] w-[16rem] py-[5px] rounded-md px-[15px] inputs bg-[#343C42] focus:bg-[#2B343A]')
newDiv1.setAttribute('class', 'flex gap-[1rem] mb-[20px]')
newDiv1Div1.setAttribute('class', 'flex flex-col')
newDiv1Div2.setAttribute('class', 'flex flex-col')
newDiv2.setAttribute('class', 'flex flex-col mb-[20px]')
newBtn.setAttribute('class', 'bg-[#1285FA] w-[100%] py-[5px] text-[13px] font-medium leading-[20px] rounded-md hover:brightness-90 duration-200 mt-[20px]')
newInvalid1.setAttribute('class', 'text-[12px]')
newInvalid2.setAttribute('class', 'text-[12px]')
newInvalid3.setAttribute('class', 'text-[12px]')
newDiv5.setAttribute('class', 'mt-[30px] flex py-[15px] rounded-md px-[30px] items-center justify-between bg-[#3F474B]')
newPText1.setAttribute('class', 'text-[#A0A4A9] font-normal text-[16px] leading-[16px] ')
newLink1.setAttribute('class', 'font-medium hover:bg-[#545a62] duration-200 bg-[#384046] text-[13px] leading-[16px] px-[20px] py-[10px] rounded-md')


// APPENDS
elFirstSection.append(newForm, newDiv5)
newDiv5.append(newPText1, newLink1)
newForm.append(newH1, newDiv1, newDiv2, newDiv3, newDiv4, newBtn)
newDiv4.append(newLabel5, newRadioBtn1, newRadioLabel1, newRadioBtn2, newRadioLabel2)
newDiv1.append(newDiv1Div1, newDiv1Div2)
newDiv1Div1.append(newLabel1, newInput1, newInvalid1)
newDiv1Div2.append(newLabel2, newInput2, newInvalid2)
newDiv2.append(newLabel3, newInput3, newInvalid3)
newDiv3.append(newLabel4, newDiv3Div1, newDiv3Div2, newDiv3Div3)
newDiv3Div1.append(newSelect1)
newSelect1.append(newSelect1Option1, newSelect1Option2, newSelect1Option3)
newDiv3Div2.append(newSelect2)
newSelect2.append(newSelect2Option1, newSelect2Option2, newSelect2Option3)
newDiv3Div3.append(newSelect3)
newSelect3.append(newSelect3Option1, newSelect3Option2, newSelect3Option3)

// DOM
function validateInput(inputElement) {
    const inputValue = inputElement.value;
    if (inputValue === '') {
        inputElement.classList.add('inputs-error');
    }
    else{
        inputElement.classList.remove('inputs-error')
    }
}

newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput(newInput1);
    validateInput(newInput2);
    validateInput(newInput3);
});

function validateInput(inputElement) {
    const inputValue = inputElement.value;
    if (inputValue === '') {
        inputElement.classList.add('inputs-error');
        newInvalid1.classList.add('error-invalid')
        newInvalid1.textContent = "Iltimos, ismingizni kiriting!"
        newInvalid2.classList.add('error-invalid')
        newInvalid2.textContent = "Iltimos, familiyangizni kiriting"
        newInvalid3.classList.add('error-invalid')
        newInvalid3.textContent = "Iltimos, elektron pochtangizni kiriting"
    }else if(inputValue !== ""){
        inputElement.classList.remove('inputs-error')
    }
}

newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput(newInput1);
    validateInput(newInput2);
    validateInput(newInput3);
});

function invalids(invalid){
    const input = invalid.value;
    if(input !== ''){
        newInvalid1.classList.add('correct-invalid')
        newInvalid1.textContent = 'Yaxshi!'
    }   
}

function inputCorrect1(inputCorrect1){
    if(inputCorrect1 !== ''){
        inputCorrect1.classList.remove('inputs-error')
    }

}
    
newForm.addEventListener("input", (e) => {
    e.preventDefault

    inputCorrect1(newInput1)
})

function inputCorrect2(inputCorrect2){
    if(inputCorrect2 !== ''){
        inputCorrect2.classList.remove('inputs-error')
    }

}

const containerEl = document.querySelector(".containerr")
const popupContainerEl = document.querySelector(".popup-container")
const closeIconEl = document.querySelector(".close-icon")

newBtn.addEventListener('click', () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active")
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
  });

newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput(newInputOne);
    validateInput(newInputTwo);
});


newForm.addEventListener("input", (e) => {
    e.preventDefault

    inputCorrect2(newInput2)
})
    

newForm.addEventListener("input", (e) => {
    e.preventDefault()

    invalids(newInput1)
})

function invalidss(invalid){
    const input = invalid.value;
    if(input !== ''){
        newInvalid2.classList.add('correct-invalid')
        newInvalid2.textContent = 'Yaxshi!'
    }   
}

newForm.addEventListener("input", (e) => {
    e.preventDefault()

    invalidss(newInput2)
})

function invalid3(invalid){
    const input = invalid.value;
    if(input !== ''){
        newInvalid3.classList.add('correct-invalid')
        newInvalid3.textContent = 'Yaxshi!'
    }   
}

newForm.addEventListener("input", (e) => {
    e.preventDefault()

    invalid3(newInput3)
})





