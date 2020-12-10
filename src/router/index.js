import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import article_detail from '@/pages/article_detail'
import interest from '@/pages/interest'
import article from '@/pages/article'
import postarticle from '@/pages/post_article'
import test from '@/pages/test'
import interest_detail from '@/pages/interest_detail'
import post_interest from '@/pages/post_interest'
import wenda from '@/pages/wenda'
import post_question from '@/pages/post_question'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article_detail',
      name: 'article_detail',
      component: article_detail
    },{
      path: '/interest',
      name: 'interest',
      component: interest
    }
    ,{
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/post_article',
      name: 'postarticle',
      component: postarticle
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/interest_detail',
      name: 'interest_detail',
      component: interest_detail
    },
    {
      path: '/post_interest',
      name: 'post_interest',
      component: post_interest
    },
    {
      path: '/wenda',
      name: 'wenda',
      component: wenda
    },
    {
      path: '/post_question',
      name: 'post_question',
      component: post_question
    },
  ]
})