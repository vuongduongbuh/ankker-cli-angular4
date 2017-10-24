import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import Feed from '@/components/feed/feed';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    }
  ]
})
