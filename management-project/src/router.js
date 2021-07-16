import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './components/Home.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () =>
        import(/* webpackChunkName: "list" */ './components/MngList.vue'),
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () =>
        import(/* webpackChunkName: "signUp" */ './components/MngSignUp.vue'),
    },
  ],
});
