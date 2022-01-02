const labelSB = document.querySelector("label[for='SimpleBookmarking']")
const labelSS = document.querySelector("label[for='SpeedySearching']")
const labelES = document.querySelector("label[for='EasySharing']")
const contSB = document.getElementById('SB-cont')
const contSS = document.getElementById('SS-cont')
const contES = document.getElementById('ES-cont')

labelSB.addEventListener('click', () => {
  contSB.classList.add('active')
  if(contSS.classList.contains('active') || contES.classList.contains('active')) {
    contSS.classList.remove('active')
    contES.classList.remove('active')
  }
})
labelSS.addEventListener('click', () => {
  contSS.classList.add('active')
  if(contES.classList.contains('active') || contSB.classList.contains('active')) {
    contES.classList.remove('active')
    contSB.classList.remove('active')
  }
})
labelES.addEventListener('click', () => {
  contES.classList.add('active')
  if(contSS.classList.contains('active') || contSB.classList.contains('active')) {
    contSS.classList.remove('active')
    contSB.classList.remove('active')
  }
})


console.log(contSB)