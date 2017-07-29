<template>
    <div class="banner-item" :style="{ 'height': height + 'px' }">
      <img class="banner-img" :src="banner.imgUrl" :alt="banner.imgAlt">
      <div class="banner-img-description" v-show="show && (!!title || !!content)" >
        <transition name="slide-fade">
          <div v-show="show && (!!title || !!content)" class="banner-img-text">
            <div class="banner-img-title">{{ banner.title }}</div>
            <div class="banner-img-body">{{ banner.content }}</div>
          </div>
        </transition>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  props: {
    'height': Number,
    'banner': {
      type: Object,
      default: {
        title: '',
        content: '',
        imgUrl: '',
        imgAlt: ''
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    'title': function () {
      return this.banner.title
    },
    'content': function () {
      return this.banner.content
    }
  },
  methods: {

  },
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 500)
  }
}
</script>
<style scoped>
  .banner-item {
    position: absolute;
  }
  .banner-img {
    width: 100%;
    height: 100%;
  }
  .banner-img-description {
    opacity: 0.7;
    background-color: #2e2e2e;
    color: white;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 101;
    height: 15%;
    min-height: 65px;
    width: 100%;
  }
  .banner-img-text {
    position: relative;
    z-index: 102;
    top: 10%;
  }
  .banner-img-title {
    padding-left: 10%;
    position: relative;
    text-align: left;
    font-size: 150%;
  }
  .banner-img-body {
    padding-left: 10%;
    position: relative;
    font-size: 100%;
    text-align: left;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
