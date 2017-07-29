/**
 * Created by nathan on 2017-07-17.
 */
import Vue from 'vue'

let bus = new Vue({})
let store = {}

bus.store = store
bus.getStore = function (name) {
  return store[name]
}
bus.setStore = function (name, val) {
  store[name] = val
}

export default bus
