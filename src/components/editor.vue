<template>
    <div class="container editor">
      <div class="input-group">
        <span class="input-group-addon">文章标题</span>
        <input v-model="title" type="text" class="form-control" placeholder="请输入标题">
      </div>
      <br>
      <quill-editor class="text-left" ref="myTextEditor"
                    v-model="content"
                    :options="{}">
      </quill-editor>
      <!--<div class="well" v-html="content"></div>-->
      <br>
      <div class="input-group">
        <span class="input-group-addon">文章分类</span>
        <input v-model="category" type="text" class="form-control" placeholder="请选择分类，或自己填写">
        <div :class="{ 'open': cateChooseOpen }" class="input-group-btn">
          <button @blur="closeCateChoose" @click="toggleCateChooseOpen" type="button" class="btn btn-default dropdown-toggle">{{ chooseTag }}&nbsp;<span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li v-for="cate in cates"><a href="#" @click.prevent="changeCategory(cate)">{{ cate === 'all' ? '全部分类' : cate }}</a></li>
          </ul>
        </div><!-- /btn-group -->
        <span class="input-group-btn">
          <button @click="update()" v-show="isEdit" class="btn btn-primary">保存修改</button>
          <button @click="publish()" v-show="!isEdit" class="btn btn-primary">发布文章</button>
        </span>
      </div><!-- /input-group -->
    </div>
</template>
<script>
import article from '../mocks/mockArticle.json'
import cates from '../mocks/mockCategories.json'
import bus from '../util/bus'

var toastModal = null

export default {
  name: 'editor',
  data () {
    return {
      id: '',
      category: '',
      title: '',
      content: '',
      cates: null,
      article: null,
      isEdit: true,
      cateChooseOpen: false
    }
  },
  computed: {
    chooseTag: function () {
      return this.category === '' ? '选择分类' : this.category === 'all' ? '全部分类' : this.category
    }
  },
  methods: {
    closeCateChoose: function () {
      setTimeout(() => { this.cateChooseOpen = false }, 200)
    },
    toggleCateChooseOpen: function () {
      this.cateChooseOpen = !this.cateChooseOpen
    },
    changeCategory: function (cate) {
      this.category = cate
    },
    update: function () {
      toastModal = this.$toastModal({
        title: '提示',
        content: '确定要继续修改文章内容吗？'
      })
      toastModal.$on('cancel', this.onUpdateCancel)
      toastModal.$on('confirm', this.onUpdateConfirm)
    },
    doUpdate: function () {
      this.$router.push('/article/' + this.$route.params.id)
    },
    onUpdateCancel: function () {
      console.log('update canceled')
      this.offEvents()
    },
    onUpdateConfirm: function () {
      console.log('update confirmed')
      this.offEvents()
      this.doUpdate()
    },
    publish: function () {
      toastModal = this.$toastModal({
        title: '提示',
        content: '确定要继续发布文章吗？'
      })
      toastModal.$on('cancel', this.onPublishCancel)
      toastModal.$on('confirm', this.onPublishConfirm)
    },
    doPublish: function () {
    },
    onPublishCancel: function () {
      console.log('publish canceled')
      this.offEvents()
    },
    onPublishConfirm: function () {
      console.log('publish confirmed')
      this.offEvents()
      this.doPublish()
    },
    offEvents: function () {
      toastModal.$off('cancel')
      toastModal.$off('confirm')
    }
  },
  mounted () {
    bus.$emit('loadBegin')
    this.id = this.$route.params.id
    this.id = this.id ? this.id : ''
    this.isEdit = this.id !== ''
    if (this.isEdit) {
      this.article = article
      this.content = article.content
      this.category = article.category
      this.title = article.title
    }
    this.cates = bus.getStore('cates')
    if (!this.cates) {
      setTimeout(() => {
        this.cates = cates
        bus.setStore('cates', cates)
        bus.$emit('loadComplete')
      }, 1000)
    } else {
      bus.$emit('loadComplete')
    }
  }
}
</script>
<style scoped>
  .editor{
    margin-top: 70px;
  }
</style>
