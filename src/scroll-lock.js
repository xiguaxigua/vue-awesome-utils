import Vue from 'vue'

let $el = null

function onChildMouseWheel (event) {
  if (event.type === 'mousewheel') {
    let scrollTgt = event.deltaY
    if (scrollTgt) {
      event.preventDefault()
      $el.scrollTop += scrollTgt
    }
  }
}

Vue.directive('scroll-lock', {
  bind (el) {
    $el = el
    el.addEventListener('mousewheel', onChildMouseWheel)
  },

  unbind (el) {
    $el = null
    el.removeEventListener('mousewheel', onChildMouseWheel)
  }
})
