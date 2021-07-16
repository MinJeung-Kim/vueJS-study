import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list',
    component: List,
  },
  {
    // (\\d+) : 숫자만 가능한 정규식
    path: '/detail/:id(\\d+)',
    component: Detail,
    children: [
      {
        path: 'author',
        component: Author,
      },
      {
        path: 'comment',
        component: Comment,
      },
    ],
  },
  //   {
  //     404 에러 페이지
  //     path: '/:anything(.*)',
  //     component: Error,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
