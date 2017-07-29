<template>
    <div class="banner" >
      <div class="banner-view" :style="{ 'height' : height + 'px'}">
        <transition-group :name="transition">
          <banner-item
            v-show="$index == current"
            v-for="(banner, $index) in banners"
            :key="$index"
            :height="height"
            :banner="banner">
          </banner-item>
        </transition-group>
      </div>
      <div class="banner-btn" @click.prevent.stop="gotoRouter(routerUrl)">
        <div @click.prevent.stop="toggleBanner('slide-left', true)" class="banner-btn-left-wrapper"><span class="banner-btn-left glyphicon glyphicon-chevron-left"></span></div>
        <div @click.prevent.stop="toggleBanner('slide', false)" class="banner-btn-right-wrapper"><span class="banner-btn-right glyphicon glyphicon-chevron-right"></span></div>
        <div class="banner-spots">
          <div class="banner-spots-wrapper">
            <span @click.prevent.stop="gotoBanner(index - 1)" :style="{ 'opacity' : index - 1 == current ? '1' : '0.5' }" class="banner-spot" v-for="index in bannersLen"></span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import bannerItem from './bannerItem.vue'

export default {
  name: 'banner',
  components: {
    bannerItem
  },
  data () {
    return {
      current: 0,
      height: 500,
      transition: 'slide',
      banners: [
        {
          title: '第一张图片的标题，有标题',
          content: '第一张图片的描述 有描述',
          imgUrl: '/static/img/banner1.jpg',
          imgAlt: '',
          url: '/articles'
        },
        {
          title: '第二张图片的标题，只有标题',
          content: '',
          imgUrl: '/static/img/banner2.jpg',
          imgAlt: '',
          url: '/article/13322333'
        },
        {
          title: '',
          content: '第三张图片的描述，只有描述',
          imgUrl: '/static/img/banner1.jpg',
          imgAlt: '',
          url: '/test'
        },
        {
          title: '',
          content: '',
          imgUrl: '/static/img/banner2.jpg',
          imgAlt: '',
          url: '/editor'
        }
      ]
    }
  },
  computed: {
    bannersLen: function () {
      return this.banners.length
    },
    routerUrl: function () {
      return this.banners[this.current].url
    }
  },
  methods: {
    toggleBanner: function (transition, isLeft, goto) {
      this.transition = transition
      if (typeof goto === 'number') {
        this.current = goto
        return
      }
      if (isLeft) {
        this.current--
        this.current = this.current < 0 ? this.banners.length - 1 : this.current
      } else {
        this.current++
        this.current = this.current < this.banners.length ? this.current : 0
      }
    },
    gotoBanner: function (goto) {
      if (goto < this.current) {
        this.toggleBanner('slide-left', true, goto)
      } else if (goto > this.current) {
        this.toggleBanner('slide', false, goto)
      }
    },
    gotoRouter: function (router) {
      this.$router.push(router)
    }
  }
}
</script>
<style scoped>
  .banner {
    position: relative;
    overflow: hidden;
  }
  .banner-view {
    position: relative;
  }
  /*定义banner slide 效果*/
  .slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.2s ease-in;
  }
  .slide-left-enter {
    transform: translateX(-100%);
  }
  .slide-left-leave-to {
    transform: translateX(100%);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.2s ease-in;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  .banner-btn {
    cursor: pointer;
    z-index: 120;
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
  }
  .banner-spots {
    position: absolute;
    color: white;
    margin: auto;
    bottom: 5%;
    left: 0;
    right: 0;
  }
  .banner-spots-wrapper{
    position: absolute;
    z-index: 130;
    bottom: 5%;
    left: 0;
    right: 0;
  }
  .banner-spot {
    cursor: pointer;
    height: 0;
    width: 0;
    border: solid 7px white;
    border-radius: 7px;
    font-size: 0;
    margin: auto 6px;
  }
  .banner-btn-left-wrapper {
    cursor: pointer;
    opacity: 0.7;
    background-color: #2e2e2e;
    color: white;
    position: absolute;
    margin: auto;
    top:0;
    bottom: 0;
    left: 0;
    height: 10%;
    min-height: 40px;
    width: 1%;
    min-width: 40px;
  }
  .banner-btn-left {
    position: absolute;
    min-width: 30px;
    height: 10%;
    min-height: 30px;
    font-size: 30px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .banner-btn-right {
    position: absolute;
    min-width: 30px;
    height: 10%;
    min-height: 30px;
    font-size: 30px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .banner-btn-right-wrapper {
    cursor: pointer;
    opacity: 0.7;
    background-color: #2e2e2e;
    color: white;
    position: absolute;
    margin: auto;
    top:0;
    bottom: 0;
    right: 0;
    height: 10%;
    min-height: 40px;
    width: 1%;
    min-width: 40px;
  }
</style>
