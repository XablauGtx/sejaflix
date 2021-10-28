let time = 2000,
  currentImageIndex = 0,
  images = document.querySelectorAll('#slides img')
max = images.length

function nextImage() {
  currentImageIndex++

  images[currentImageIndex].classList.add('slide-image')
}

function start() {
  setInterval(() => {}, time)
}
window.addEventListener('load', start)
