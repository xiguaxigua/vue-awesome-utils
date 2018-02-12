import Vue from 'vue'

let $el = null
let $options = null
let $clientTop = null
let $cloneEl = null
let switcher = false
console.log($options)

function scrollHandler () {
  // console.log('scroll')
  const top = window.scrollY
  // const top = $el.getBoundingClientRect().top
  // console.log('top: ', top)
  // console.log('position: ', position)
  // console.log('top', top)
  // console.log('clientTop', $clientTop)
  if (top >= $clientTop && !switcher) {
    switcher = true
    document.body.appendChild($cloneEl)
  } else if (top < $clientTop && switcher) {
    switcher = false
    document.body.removeChild($cloneEl)
  }
}

Vue.directive('scroll-fixed', {
  bind (el, options) {
    $el = el
    $options = options
    window.addEventListener('scroll', scrollHandler)
  },

  inserted () {
    console.log($el.getBoundingClientRect())
    $clientTop = $el.offsetTop
    $cloneEl = $el.cloneNode(true)
    // copyComputedStyle($el, $cloneEl, ['margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop'])
    $cloneEl.style.cssText = window.getComputedStyle($el).cssText
    $cloneEl.style.position = 'fixed'
    $cloneEl.style.top = 0
    $cloneEl.style.margin = 0
    console.log($cloneEl)
  },

  unbind () {
    console.log('unbind')
    $el = null
    $options = null
    window.removeEventListener('scroll', scrollHandler)
  },

  scrollHandler () {
    console.log('1')
    if (!this.el || !this.options) return
    console.log('el-position', this.el.getBoundClientRect())
  }
})
