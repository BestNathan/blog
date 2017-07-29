<template>
    <div class="container content">
      <category class="col-sm-2" :categories="categories"></category>
      <articles class="col-sm-10" :articles="articles"></articles>
    </div>
</template>
<script>
import category from './category'
import articles from './articles'
import mockdata from '../mocks/mockArticles.json'
import cates from '../mocks/mockCategories.json'
import bus from '../util/bus'

export default {
  name: 'content',
  data () {
    return {
      categories: null,
      articles: null
    }
  },
  components: {
    category,
    articles
  },
  mounted () {
    this.$begin()
    this.categories = bus.getStore('categories')
    this.articles = bus.getStore('articles')
    if (!(this.categories && this.articles)) {
      setTimeout(() => {
        this.categories = cates
        this.articles = mockdata
        if (this.categories && this.articles) {
          bus.setStore('categories', this.categories)
          bus.setStore('articles', this.articles)
          this.$complete()
        }
      }, 1000)
    } else {
      this.$complete()
    }
  }
}
</script>
<style scoped>
.content {
  margin-top: 70px;
  background-color: deepskyblue;
}
</style>
