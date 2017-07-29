<template>
  <div>
    <div v-show="show" class="loading" :style="{ 'width' : width + '%', 'background-color' : bgColor}"></div>
  </div>
</template>
<script>
import bus from '../../util/bus'

export default {
  name: 'loading',
  data () {
    return {
      show: true,
      loadSuccess: false,
      width: 0,
      bgColor: 'deepskyblue'
    }
  },
  methods: {
    begin: function () {
      this.bgColor = 'deepskyblue'
      this.show = true
      this.width = 0
      this.loading()
    },
    loading: function () {
      var width = this.width
      if (width < 100) {
        this.width += 2
        setTimeout(this.loading, 60)
      } else {
        if (this.loadSuccess) {
          setTimeout(() => { this.show = false }, 500)
          bus.$emit('successShow')
        } else {
          this.bgColor = 'red'
          bus.$emit('failShow')
        }
      }
    },
    complete: function () {
      this.width = 100
      this.loadSuccess = true
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.loading {
  height: 3px;
  position: fixed;
  z-index: 9999;
  top: 0px;
}
</style>
