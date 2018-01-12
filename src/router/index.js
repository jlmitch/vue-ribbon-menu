import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import HelloWorld from '@/pages/HelloWorld';
import Account from '@/pages/Account';

Vue.use(Router);

const menus = require('@/data/Data.json');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: { menus },
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
      props: { menus },
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      props: { menus },
    },
  ],
});
