const elMainSection = document.querySelector('.first-div')
const newForm = document.createElement('form')
const newSectionDiv = document.createElement('div')
const newHeading = document.createElement('h1')
const newDivOne = document.createElement('div')
const newLabelOne = document.createElement('label')
const newInputOne = document.createElement('input')
const newDivTwo = document.createElement('div')
const newDivTwoDivOne = document.createElement('div')
const newLabelTwo = document.createElement('label')
const newP = document.createElement('p')
const newInputTwo = document.createElement('input')
const newBtn = document.createElement('button')
const newDivThree = document.createElement('div') 
const newSpanOne = document.createElement('span')
const middleTextP = document.createElement('p')
const newSpanTwo = document.createElement('span')
const newDivFour = document.createElement('div')
const newIOne = document.createElement('i')
const newITwo = document.createElement('i')
const newIThree = document.createElement('i')
const newIFour = document.createElement('i')
const newIFive = document.createElement('i')
const newISix = document.createElement('i')
const newDivFourDivOne = document.createElement('div')
const newPTwo = document.createElement('p')
const newDivFourDivTwo = document.createElement('div')
const newPText = document.createElement("p")
const newLink = document.createElement('a')


// Texts Contents
newHeading.textContent = 'Kirish'
newLabelOne.textContent = 'Login'
newLabelTwo.textContent = 'Parol'
newP.textContent = 'Parolni unutdingizmi'
newBtn.textContent = 'Tizimga Kirish'
middleTextP.textContent = 'Yoki'
newPTwo.textContent = 'Orqali kiring'
newPText.textContent = 'Tarmoqda yangimisiz'
newLink.textContent = "Ro'yxatdan o'tish"

// Set Attributes
newInputOne.setAttribute('placeholder', 'Pochta yoki telefoningizni kiriting')
newHeading.setAttribute('class', 'font-semibold text-[20px] leading-[28px]')
newLabelOne.setAttribute('class', 'mb-[5px] font-bold text-[13px] leading-[16px]')
newLabelTwo.setAttribute('class', 'font-bold text-[13px] leading-[16px]')
newInputTwo.setAttribute('placeholder', 'Parolingizni kiriting')
newIOne.setAttribute('class', 'bg-[#707579] p-[15px] rounded-lg fa-brands fa-google')
newP.setAttribute('class', 'text-[#9FA2A5] text-[12px]')
newITwo.setAttribute('class', 'fa-brands fa-facebook-f bg-[#707579] p-[15px] rounded-lg')
newIThree.setAttribute('class', 'fa-brands fa-twitter bg-[#707579] p-[15px] rounded-lg')
newIFour.setAttribute('class', 'fa-brands fa-vk bg-[#707579] p-[15px] rounded-lg')
newIFive.setAttribute('class', 'fa-brands fa-yandex bg-[#707579] p-[15px] rounded-lg')
newISix.setAttribute('class', 'fa-brands fa-apple bg-[#707579] p-[15px] rounded-lg')
document.body.setAttribute('class', 'text-white bg-[#121B25] flex align-center pt-[10rem] h-[100vh] justify-center')
newForm.setAttribute('class', 'rounded-lg bg-[#3F474C] p-[30px] w-[500px]')
newDivTwo.setAttribute('class', 'my-[20px]')
newDivOne.setAttribute('class', 'pt-[30px] flex flex-col')
newDivTwoDivOne.setAttribute('class', 'mb-[5px] flex items-center justify-between')
newInputOne.setAttribute('class', 'bg-[#343C42] rounded-lg bg-[#2B343A] p-[10px]')
newInputTwo.setAttribute('class', 'bg-[#343C42] rounded-lg w-[100%] bg-[#2B343A] p-[10px]')
newBtn.setAttribute('class', 'btn bg-[#1285FA] w-[100%] py-[5px] font-medium text-[13px] leading-[26px]')
newSpanOne.setAttribute('class', 'h-[2px] w-[160px] bg-[#7C8083] block')
newSpanTwo.setAttribute('class', 'h-[2px] w-[160px] bg-[#7C8083] block')
middleTextP.setAttribute('class', 'text-[#9FA2A5]')
newDivThree.setAttribute('class', 'flex  items-center justify-between')
newDivFourDivOne.setAttribute('class', 'flex items-center justify-evenly')
newDivFourDivTwo.setAttribute('class', 'text-center')
newPTwo.setAttribute('class', 'mt-[10px] font-medium text-[#9FA2A5]')
newDivThree.setAttribute('class', 'my-[20px] flex items-center justify-between')
newSectionDiv.setAttribute('class', 'items-center mt-[20px] flex justify-between px-[30px] py-[20px] bg-[#3F474B] rounded-lg')
newLink.setAttribute('href', '#')
newPText.setAttribute('class', 'text-[#9EA2A6] font-regular text-[16px]')
newLink.setAttribute('class', 'text-[13px] font-medium px-[10px] py-[5px] rounded-md bg-[#384046]')


// Appends
elMainSection.append(newForm, newSectionDiv)
newForm.append(newHeading, newDivOne, newDivTwo, newBtn, newDivThree, newDivFour)
newDivOne.append(newLabelOne, newInputOne)
newDivTwo.append(newDivTwoDivOne, newInputTwo)
newDivTwoDivOne.append(newLabelTwo, newP)
newDivThree.append(newSpanOne, middleTextP, newSpanTwo)
newDivFour.append(newDivFourDivOne, newDivFourDivTwo)
newDivFourDivOne.append(newIOne, newITwo, newIThree, newIFour, newIFive, newISix)
newDivFourDivTwo.append(newPTwo)
newSectionDiv.append(newPText, newLink)