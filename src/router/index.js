import {createWebHistory, createRouter} from "vue-router";

import ToDo from '@/views/TodoPage.vue';
import PostsPage from '@/views/PostsPage.vue';
import UserInfoPage from '@/views/UserInfoPage.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [  
  {
    path: '/',
    name: 'ToDo',
    component: ToDo,
  },
  {
    path: '/post',
    name: 'Post',
    component: PostsPage
  },
  {
    path: '/users/1',
    name: 'User',
    component: UserInfoPage
  },
  {
    path: '/wrong',
    name: 'Not found',
    component: NotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});
