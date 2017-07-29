import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
import article from '@/components/article'
import editor from '@/components/editor'
import test from '@/components/test'
import banner from '@/components/banner/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/banner'
    },
    {
      path: '/banner',
      name: 'Content',
      component: banner
    },
    {
      path: '/articles',
      name: 'Content',
      component: Content
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: editor
    },
    {
      path: '/newArticle',
      name: 'editor',
      component: editor
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
