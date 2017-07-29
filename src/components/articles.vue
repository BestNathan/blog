<template>
    <div class="list-group articles">
      <div class="list-group-item text-left active"><span @click="newArticle" class="badge newArticle">发布新文章</span>文章列表</div>
      <div class="list-group-item text-left article" @click="gotoArticle(article)" v-for="article in articles">{{ article.title }}<span class="info">{{ article.time }}</span></div>
    </div>
</template>
<script>
import bus from '../util/bus'

export default {
  name: 'articles',
  props: ['articles'],
  data () {
    return {
    }
  },
  methods: {
    gotoArticle: function (article) {
      bus.setStore('article', article)
      this.$router.push('/article/' + article.id)
    },
    newArticle: function () {
      this.$router.push('/newArticle')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.articles {
  height: 1000px;
  margin-top: 30px;
}
.info {
  float: right;
}
.article {
  cursor: pointer;
}
.newArticle {
  cursor: pointer;
}
</style>
