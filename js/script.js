document.getElementById('menu-toggle').addEventListener('click', function () {
  document.body.classList.toggle('nav-open')
})

// on click class------------------
const toggle = document.querySelector('.nav-bar__toggle')
const navigation = document.querySelector('.nav-bar__menu')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('hide')
  navigation.classList.toggle('show')
})

// -----------------on scroll events---------------

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    document.querySelector('.menu').classList.add('box')
  }

  if (window.scrollY === 0) {
    document.querySelector('.menu').classList.remove('box')
  }
})

// ------------------parallax---------------

// window.addEventListener('scroll', function () {
//   const parallax1 = document.querySelector('#parallax1')
//   let scrollPosition = window.pageYOffset
//   parallax1.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)'
// })




