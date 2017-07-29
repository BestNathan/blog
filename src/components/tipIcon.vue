<template>
    <div>
      <div v-show="successShow"><span :style="{ 'opacity': opacity }" class="tips glyphicon glyphicon-ok"></span></div>
      <div v-show="failShow"><span :style="{ 'opacity': opacity }" class="tips glyphicon glyphicon-remove"></span></div>
    </div>
</template>
<script>
import bus from '../util/bus'

export default {
  name: 'tipIcon',
  data () {
    return {
      successShow: false,
      failShow: false,
      opacity: 0.8
    }
  },
  methods: {
    showSuccess: function () {
      this.opacity = 0.5
      this.successShow = true
      setTimeout(this.unshow, 500)
    },
    showFail: function () {
      this.opacity = 0.8
      this.failShow = true
      setTimeout(this.unshow, 500)
    },
    unshow: function () {
      if (this.opacity <= 0) {
        this.successShow = false
        this.failShow = false
      } else {
        this.opacity -= 0.1
        setTimeout(() => {
          this.unshow()
        }, 100)
      }
    }
  },
  mounted () {
    bus.$on('successShow', this.showSuccess)
    bus.$on('failShow', this.showFail)
  }
}
</script>
<style scoped>
  .tips {
    border-radius: 5px;
    padding-top: 30px;
    height: 150px;
    width: 150px;
    font-size: 80px;
    color: white;
    background-color: #282828;
    position: fixed;
    z-index: 9999;
    margin-top: -75px;
    margin-left: -75px;
    left: 50%;
    top: 50%;
    cursor: default;
  }
</style>
