const arrowsR1 = document.querySelectorAll('.arrowR1')
const arrowsL1 = document.querySelectorAll('.arrowL1')
const movielist = document.querySelectorAll('.line1')

arrowsR1.forEach((arrowR1,i) => {
 arrowR1.addEventListener('click', () => {
    movielist[i].style.transform = 'translateX(-1345px)'
  })
})

arrowsL1.forEach((arrowL1,i) => {
  arrowL1.addEventListener('click', () => {
     movielist[i].style.transform = 'translateX(0px)'
   })
 })
