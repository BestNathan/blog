/**
 * Created by nathan on 2017-07-21.
 */
import Modal from './modal.vue'

export default {
  install (Vue) {
    const ModalCons = Vue.extend(Modal)
    const modal = new ModalCons()
    function toastModal (option) {
      modal.onShowModal(option)
      return modal
    }
    if (!modal.$el) {
      let vm = modal.$mount()
      document.querySelector('body').appendChild(vm.$el)
    }
    Vue.prototype.$toastModal = toastModal
  }
}
