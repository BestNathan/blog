<template>
      <div :style="{ 'display': show ? 'block' : 'none' }" :class="{ 'in' : show }" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button @click="closeModal('cancel')" type="button" class="close"><span>&times;</span></button>
              <h4 class="modal-title text-left"><span class="glyphicon glyphicon-pushpin"></span>{{ title }}</h4>
            </div>
            <div class="modal-body text-left">
              {{ content }}
            </div>
            <div class="modal-footer">
              <button @click="closeModal('cancel')" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span>&nbsp;取消</button>
              <button @click="closeModal('confirm')" class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span>&nbsp;确认</button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'modal',
  data () {
    return {
      show: false,
      title: '',
      content: ''
    }
  },
  methods: {
    showModal: function () {
      this.show = true
    },
    closeModal: function (eventName) {
      this.show = false
      this.$emit(eventName)
    },
    onShowModal: function (info) {
      info = info || {}
      this.title = info.title || '提示'
      this.content = info.content || '你确定要继续执行此操作吗？'
      this.showModal()
    }
  }
}
</script>
<style scoped>
.modal {
  top: 20%;
}
</style>
