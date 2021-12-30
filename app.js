let elems = document.getElementsByClassName('anime')
elems = Array.from(elems)
let lines = document.getElementsByClassName('saske')
lines = Array.from(lines)

window.addEventListener('scroll', function() {
  console.clear()

  const height = document.documentElement.clientHeight

  for (let indexElement in elems) {
    const obj = elems[indexElement]

    if (obj.getBoundingClientRect().top < height - 200) {
      obj.classList.add('naruto')

    } else {
      obj.classList.remove('naruto')
    }
  }

  for (let indexElement in lines) {
    const line = lines[indexElement]
    console.log(line.dataset.percent)

    if (line.getBoundingClientRect().top < height - 200) {
      line.style.width = line.dataset.percent
    } else {
      line.style.width = 0
    }
  }
});