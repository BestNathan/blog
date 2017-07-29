<template>
    <div @scroll="scrolled" class="list-group" :style="{ 'margin-top': cateToTop + 'px'}">
      <div class="list-group-item text-left active">文章类别</div>
      <a class="list-group-item text-left" href="" v-for="cate in categories"><span class="badge">{{ countsForCategory[cate] }}</span>{{ cate === 'all' ? '全部分类' : cate}}</a>
    </div>
</template>
<script>
export default {
  name: 'category',
  props: ['categories'],
  data () {
    return {
      countsForCategory: {
        '全部': 10,
        'Java': 8,
        'JavaScript': 2
      },
      cateToTop: 30
    }
  },
  methods: {
    scrolled: function (event) {
      let distance = document.body.scrollTop + 30 - this.cateToTop
      let step
      let up = distance < 0
      distance = Math.abs(distance)
      step = distance / 3
      step === 0 ? this.cateToTop = document.body.scrollTop + 70 : up ? this.cateToTop -= step : this.cateToTop += step
      if (step === 0) return
      setTimeout(() => this.scrolled(), 20)
    }
  },
  mounted () {
    let scrollHandler = this.debounce(this.scrolled, 400)
    window.addEventListener('scroll', scrollHandler)
  }
}
</script>

