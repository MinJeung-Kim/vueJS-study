import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

// 로그인 페이지
const rjectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인 된 유저이기때문에 로그인 페이지 접근 X
    alert('로그인 되었습니다.');
    // home으로 페이지 이동
    next('/');
  } else {
    next();
  }
};

// 마이페이지
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 로그인이 안된 유저니까 마이페이지 접근 X
    alert('로그인을 하세요.');
    // home으로 페이지 이동
    next('/login');
  } else {
    next();
  }
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // 라우터에 들어오기 전에 함수를 실행시켜 보고 이상이 없으면 component 실행
      beforeEnter: rjectAuthUser,
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Mypage.vue'),
    },
  ],
});
