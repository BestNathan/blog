/**
 * Created by nathan on 2017-07-20.
 */
import Loading from './loading.vue'

export default {
  install (Vue) {
    const LoadingCons = Vue.extend(Loading)
    const loading = new LoadingCons()
    if (!loading.$el) {
      let vm = loading.$mount()
      document.querySelector('body').appendChild(vm.$el)
    }
    Vue.prototype.$begin = loading.begin
    Vue.prototype.$complete = loading.complete
  }
}
