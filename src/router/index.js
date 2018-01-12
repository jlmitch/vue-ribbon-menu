import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import HelloWorld from '@/pages/HelloWorld';
import Account from '@/pages/Account';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
  ],
});
