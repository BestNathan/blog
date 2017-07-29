/**
 * Created by nathan on 2017-07-16.
 */
import Vue from 'vue'

Vue.prototype.debounce = function (fn, delay) {
  let timer = null
  let time = new Date()
  return function () {
    let args = arguments
    let timeNow = new Date()
    clearTimeout(timer)
    if (timeNow - time >= delay) {
      time = timeNow
      fn.apply(this, args)
    } else {
      timer = setTimeout(fn, delay)
    }
  }
}
