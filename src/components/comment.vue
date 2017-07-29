<template>
    <div>
      <div v-show="!comments" class="well">
        当前文章还没有评论，快来添加第一条评论吧！
        <span @click="" class="badge btn btn-primary">评论</span>
      </div>
      <div v-show="comments" class="list-group">
        <div class="list-group-item text-left active">文章评论<span @click="" class="badge btn btn-primary">评论</span></div>
        <div v-for="(comment,index) in comments" class="list-group-item text-left">{{ comment.comment }} <span class="info">{{ index + 1}}楼 &nbsp; {{ comment.time }}</span></div>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  props: ['comments'],
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.info {
  float: right;
}
</style>
