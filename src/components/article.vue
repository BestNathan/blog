<template>
    <div class="container article">
      <div class="well well-sm text-center">
        <h4>
          {{ article.title }}
          <span @click="gotoEditor" class="badge editorBtn btn btn-primary">点击编辑</span>
          <span class="badge cate">分类：{{ article.category === 'all' ? '全部分类' : article.category }}</span>
        </h4>
      </div>
      <div class="well text-left" v-html="article.content"></div>
      <comment :comments="comments"></comment>
    </div>
</template>
<script>
import comments from '../mocks/mockComments.json'
import bus from '../util/bus'
import comment from './comment.vue'

export default {
  name: 'article',
  components: {
    comment
  },
  data () {
    return {
      article: {},
      comments: []
    }
  },
  computed: {
  },
  methods: {
    gotoEditor: function () {
      this.$router.push('/editor/' + this.$route.params.id)
    }
  },
  mounted () {
    this.article = bus.getStore('article')
    this.comments = comments
  }
}
</script>
<style scoped>
.article {
  margin-top: 70px;
}
.editorBtn {
  float: right;
}
.cate {
  float: left;
}
</style>

